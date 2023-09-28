const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const kursusRoutes = require('./src/routes/kursusRoutes');
const kontakRoutes = require('./src/routes/kontakRoutes');
const berlanggananRoutes = require('./src/routes/berlanggananRoutes');
const infoberitaRoutes = require('./src/routes/infoberitaRoutes');
const datahomeRoutes = require('./src/routes/datahomeRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api', kursusRoutes);
app.use('/api', kontakRoutes);
app.use('/api', berlanggananRoutes);
app.use('/api', infoberitaRoutes);
app.use('/api', datahomeRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
// coba
// SETORAN CoMMENT 