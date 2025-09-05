import requests

# Replace with your Finnhub API key (if you have one, otherwise use a placeholder)
FINNHUB_API_KEY = "YOUR_FINNHUB_API_KEY"

def get_latest_news():
    url = f"https://finnhub.io/api/v1/news?category=general&token={FINNHUB_API_KEY}"
    try:
        response = requests.get(url)
        response.raise_for_status()  # Raise an exception for HTTP errors
        news_data = response.json()
        return news_data
    except requests.exceptions.RequestException as e:
        print(f"Error fetching news from Finnhub: {e}")
        return None

if __name__ == "__main__":
    news = get_latest_news()
    if news:
        for article in news[:5]:  # Print first 5 articles
            print(f"Title: {article.get('headline', 'N/A')}")
            print(f"Source: {article.get('source', 'N/A')}")
            print(f"URL: {article.get('url', 'N/A')}")
            print("---")
    else:
        print("Failed to retrieve news.")


