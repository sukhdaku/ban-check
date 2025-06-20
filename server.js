const express = require('express');
const app = express();
const banRoutes = require('./routes/banInfo');

app.use('/', banRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
