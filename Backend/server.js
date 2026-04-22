import app from './src/app.js';
import connectDB from './src/config/db.js';
import GeminiAI from './src/services/ai.service.js';

const PORT = 3000;

connectDB();
GeminiAI();


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

