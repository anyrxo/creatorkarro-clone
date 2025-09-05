import sys
sys.path.append("/opt/.manus/.sandbox-runtime")
from data_api import ApiClient
import json

def get_price(symbol, interval="1m", range="1d"):
    client = ApiClient()
    try:
        response = client.call_api("YahooFinance/get_stock_chart", query={
            "symbol": symbol,
            "region": "US",
            "interval": interval,
            "range": range
        })
        if response and "chart" in response and "result" in response["chart"]:
            result = response["chart"]["result"][0]
            meta = result["meta"]
            current_price = meta.get("regularMarketPrice", None)
            return current_price
        else:
            return None
    except Exception as e:
        print(f"Error fetching price for {symbol}: {e}")
        return None

if __name__ == "__main__":
    # Test with a stock symbol
    price = get_price("AAPL")
    if price:
        print(f"Current price of AAPL: {price}")

    # Test with a forex pair (note: Yahoo Finance uses =X for forex)
    price = get_price("EURUSD=X")
    if price:
        print(f"Current price of EUR/USD: {price}")

    # Test with an index (note: Yahoo Finance uses ^ for indices)
    price = get_price("^GSPC")
    if price:
        print(f"Current price of S&P 500: {price}")


