import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Carpool App!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});