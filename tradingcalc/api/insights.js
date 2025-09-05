
import express from 'express';
import { PythonShell } from 'python-shell';

const router = express.Router();

router.get("/stock-insights", async (req, res) => {
  const { symbol } = req.query;

  if (!symbol) {
    return res.status(400).json({ error: "Symbol is required" });
  }

  try {
    let options = {
      mode: 'json',
      pythonOptions: ['-u'], // get print results in real-time
      scriptPath: './python_scripts', // Path to your Python scripts
      args: [symbol]
    };

    PythonShell.run('get_stock_insights.py', options, function (err, results) {
      if (err) {
        console.error("Error running Python script:", err);
        return res.status(500).json({ error: "Failed to fetch stock insights" });
      }
      // results is an array consisting of messages collected during execution
      res.json(results[0]);
    });
  } catch (error) {
    console.error("Error fetching stock insights:", error);
    res.status(500).json({ error: "Failed to fetch stock insights" });
  }
});

export default router;


