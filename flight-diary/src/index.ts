













import express from 'express';
const app = express();
import diaryRouter from './routes/diaries';
app.use(express.json());

// cors
const cors = require('cors')
// app use cors
app.use(cors({
  origin: '*'
}));

const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diaries', diaryRouter);

app.use('', diaryRouter )

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});