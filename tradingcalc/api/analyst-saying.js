
import express from 'express';
import { ApiClient } from '@manus-api-client/data';

const router = express.Router();
const client = new ApiClient();

router.get("/analyst-saying", async (req, res) => {
  const { symbol } = req.query;

  if (!symbol) {
    return res.status(400).json({ error: "Symbol is required" });
  }

  try {
    const response = await client.call_api("YahooFinance/get_stock_what_analyst_are_saying", {
      symbol,
    });
    res.json(response);
  } catch (error) {
    console.error("Error fetching analyst saying:", error);
    res.status(500).json({ error: "Failed to fetch analyst saying" });
  }
});

export default router;


