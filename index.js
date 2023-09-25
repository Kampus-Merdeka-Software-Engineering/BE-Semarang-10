const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const kursusRoutes = require('./src/routes/kursusRoutes');
const kontakRoutes = require('./src/routes/kontakRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api', kursusRoutes);
app.use('/api', kontakRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
// coba
// SETORAN CoMMENT 