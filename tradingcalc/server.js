
import express from 'express';
import cors from 'cors';
import insightsRouter from './api/insights.js';
import analystSayingRouter from './api/analyst-saying.js';

const app = express();
const PORT = process.env.PORT || 3001; // Use a different port than React app

app.use(cors());
app.use(express.json());

// API routes
app.use('/api', insightsRouter);
app.use('/api', analystSayingRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


