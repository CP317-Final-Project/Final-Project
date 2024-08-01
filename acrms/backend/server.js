const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

const carsRouter = require('./routes/cars');
app.use('/api/cars', carsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
