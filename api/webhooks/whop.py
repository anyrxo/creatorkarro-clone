"""
Whop Webhook Handler

Handles webhooks from Whop for payment success, subscription events, etc.
Tracks conversions in GA4 and stores transaction data.

This webhook endpoint should be configured in your Whop dashboard:
https://dash.whop.com/settings/webhooks

Webhook URL: https://yourdomain.com/api/webhooks/whop
Events to listen for:
- payment.succeeded
- subscription.created
- subscription.renewed
- subscription.canceled
- payment.failed
"""

from flask import Flask, request, jsonify
import os
import hmac
import hashlib
import json
from datetime import datetime
import requests

app = Flask(__name__)

# Configuration
WHOP_WEBHOOK_SECRET = os.environ.get('WHOP_WEBHOOK_SECRET', '')
GA4_MEASUREMENT_ID = os.environ.get('NEXT_PUBLIC_GA_MEASUREMENT_ID', '')
GA4_API_SECRET = os.environ.get('GA4_API_SECRET', '')  # Get from GA4 admin

# Course ID mapping
COURSE_MAPPING = {
    'ai-influencers': {
        'name': 'AI Influencers Mastery Course',
        'price': 169,
        'category': 'Course'
    },
    'digital-products': {
        'name': 'Digital Products Academy',
        'price': 189,
        'category': 'Course'
    },
    'instagram-ignited': {
        'name': 'Instagram Ignited Course',
        'price': 147,
        'category': 'Course'
    },
    'fx-trading': {
        'name': 'FX Trading Mastery',
        'price': 197,
        'category': 'Course'
    },
    'all-access': {
        'name': 'All-Access Pass',
        'price': 39.99,
        'category': 'Subscription'
    }
}


def verify_webhook_signature(payload, signature):
    """Verify the webhook signature from Whop"""
    if not WHOP_WEBHOOK_SECRET:
        print("WARNING: WHOP_WEBHOOK_SECRET not set, skipping verification")
        return True

    expected_signature = hmac.new(
        WHOP_WEBHOOK_SECRET.encode('utf-8'),
        payload,
        hashlib.sha256
    ).hexdigest()

    return hmac.compare_digest(expected_signature, signature)


def send_to_ga4(event_name, client_id, params):
    """Send event to Google Analytics 4 Measurement Protocol"""
    if not GA4_MEASUREMENT_ID or not GA4_API_SECRET:
        print("GA4 credentials not configured, skipping GA4 tracking")
        return False

    url = f"https://www.google-analytics.com/mp/collect?measurement_id={GA4_MEASUREMENT_ID}&api_secret={GA4_API_SECRET}"

    payload = {
        "client_id": client_id,
        "events": [{
            "name": event_name,
            "params": params
        }]
    }

    try:
        response = requests.post(url, json=payload)
        if response.status_code == 204:
            print(f"Successfully sent {event_name} to GA4")
            return True
        else:
            print(f"GA4 API error: {response.status_code}")
            return False
    except Exception as e:
        print(f"Error sending to GA4: {str(e)}")
        return False


def get_course_info(product_id):
    """Get course information from product ID"""
    # Map Whop product ID to course info
    # You'll need to update this based on your actual Whop product IDs
    for course_id, course_data in COURSE_MAPPING.items():
        if course_id in product_id.lower():
            return course_id, course_data

    # Default fallback
    return 'unknown', {'name': 'Unknown Course', 'price': 0, 'category': 'Course'}


def store_transaction(transaction_data):
    """Store transaction data (implement your database logic here)"""
    # TODO: Implement database storage
    # Example: Save to PostgreSQL, MongoDB, or a file
    print(f"Transaction stored: {transaction_data}")

    # For now, just log to a file
    try:
        with open('transactions.log', 'a') as f:
            f.write(json.dumps(transaction_data) + '\n')
    except Exception as e:
        print(f"Error storing transaction: {str(e)}")


def send_confirmation_email(customer_email, course_name, transaction_id):
    """Send purchase confirmation email"""
    # TODO: Implement email sending logic
    # You can use SendGrid, AWS SES, or any email service
    print(f"Confirmation email sent to {customer_email} for {course_name}")


@app.route('/api/webhooks/whop', methods=['POST'])
def whop_webhook():
    """Handle incoming webhooks from Whop"""

    # Get the raw payload and signature
    payload = request.get_data()
    signature = request.headers.get('X-Whop-Signature', '')

    # Verify webhook signature for security
    if not verify_webhook_signature(payload, signature):
        print("Invalid webhook signature")
        return jsonify({"error": "Invalid signature"}), 401

    # Parse the webhook data
    try:
        data = request.json
    except Exception as e:
        print(f"Error parsing webhook data: {str(e)}")
        return jsonify({"error": "Invalid JSON"}), 400

    # Get event type
    event_type = data.get('event', '')
    print(f"Received webhook event: {event_type}")

    # Handle different event types
    if event_type == 'payment.succeeded':
        handle_payment_success(data)

    elif event_type == 'subscription.created':
        handle_subscription_created(data)

    elif event_type == 'subscription.renewed':
        handle_subscription_renewed(data)

    elif event_type == 'subscription.canceled':
        handle_subscription_canceled(data)

    elif event_type == 'payment.failed':
        handle_payment_failed(data)

    else:
        print(f"Unhandled event type: {event_type}")

    return jsonify({"status": "success"}), 200


def handle_payment_success(data):
    """Handle successful payment"""
    # Extract payment data
    payment_data = data.get('data', {})
    transaction_id = payment_data.get('id', '')
    customer_email = payment_data.get('customer_email', '')
    customer_id = payment_data.get('customer_id', '')
    product_id = payment_data.get('product_id', '')
    amount = payment_data.get('amount', 0) / 100  # Convert cents to dollars

    # Get course information
    course_id, course_info = get_course_info(product_id)

    print(f"Payment succeeded: {transaction_id} - ${amount} - {course_info['name']}")

    # Track conversion in GA4
    send_to_ga4(
        'purchase',
        customer_id or transaction_id,
        {
            'transaction_id': transaction_id,
            'value': amount,
            'currency': 'USD',
            'items': [{
                'item_id': course_id,
                'item_name': course_info['name'],
                'item_category': course_info['category'],
                'price': amount,
                'quantity': 1
            }]
        }
    )

    # Store transaction in database
    transaction_data = {
        'transaction_id': transaction_id,
        'customer_email': customer_email,
        'customer_id': customer_id,
        'course_id': course_id,
        'course_name': course_info['name'],
        'amount': amount,
        'currency': 'USD',
        'status': 'completed',
        'timestamp': datetime.utcnow().isoformat(),
        'event_type': 'purchase'
    }
    store_transaction(transaction_data)

    # Send confirmation email
    send_confirmation_email(customer_email, course_info['name'], transaction_id)


def handle_subscription_created(data):
    """Handle new subscription"""
    subscription_data = data.get('data', {})
    subscription_id = subscription_data.get('id', '')
    customer_email = subscription_data.get('customer_email', '')
    customer_id = subscription_data.get('customer_id', '')
    product_id = subscription_data.get('product_id', '')

    course_id, course_info = get_course_info(product_id)

    print(f"Subscription created: {subscription_id} - {course_info['name']}")

    # Track subscription start in GA4
    send_to_ga4(
        'subscription_start',
        customer_id or subscription_id,
        {
            'subscription_id': subscription_id,
            'product_id': course_id,
            'product_name': course_info['name'],
            'subscription_type': 'monthly'
        }
    )

    # Store subscription data
    subscription_data_to_store = {
        'subscription_id': subscription_id,
        'customer_email': customer_email,
        'customer_id': customer_id,
        'course_id': course_id,
        'course_name': course_info['name'],
        'status': 'active',
        'timestamp': datetime.utcnow().isoformat(),
        'event_type': 'subscription_created'
    }
    store_transaction(subscription_data_to_store)


def handle_subscription_renewed(data):
    """Handle subscription renewal"""
    subscription_data = data.get('data', {})
    subscription_id = subscription_data.get('id', '')
    customer_id = subscription_data.get('customer_id', '')
    amount = subscription_data.get('amount', 0) / 100

    print(f"Subscription renewed: {subscription_id} - ${amount}")

    # Track renewal in GA4
    send_to_ga4(
        'subscription_renewed',
        customer_id or subscription_id,
        {
            'subscription_id': subscription_id,
            'value': amount,
            'currency': 'USD'
        }
    )


def handle_subscription_canceled(data):
    """Handle subscription cancellation"""
    subscription_data = data.get('data', {})
    subscription_id = subscription_data.get('id', '')
    customer_id = subscription_data.get('customer_id', '')

    print(f"Subscription canceled: {subscription_id}")

    # Track cancellation in GA4
    send_to_ga4(
        'subscription_canceled',
        customer_id or subscription_id,
        {
            'subscription_id': subscription_id,
            'cancellation_reason': subscription_data.get('cancellation_reason', 'unknown')
        }
    )


def handle_payment_failed(data):
    """Handle failed payment"""
    payment_data = data.get('data', {})
    payment_id = payment_data.get('id', '')
    customer_id = payment_data.get('customer_id', '')
    error_message = payment_data.get('error_message', '')

    print(f"Payment failed: {payment_id} - {error_message}")

    # Track failed payment in GA4
    send_to_ga4(
        'payment_failed',
        customer_id or payment_id,
        {
            'payment_id': payment_id,
            'error_message': error_message
        }
    )


if __name__ == '__main__':
    # Run the webhook server
    port = int(os.environ.get('PORT', 5002))
    app.run(host='0.0.0.0', port=port, debug=False)
