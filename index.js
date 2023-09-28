const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

const kursusRoutes = require('./src/routes/kursusRoutes');
const kontakRoutes = require('./src/routes/kontakRoutes');
const berlanggananRoutes = require('./src/routes/berlanggananRoutes');
const infoberitaRoutes = require('./src/routes/infoberitaRoutes');
const datahomeRoutes = require('./src/routes/datahomeRoutes');
const unggulanRoutes = require('./src/routes/unggulanRoutes');

app.use(bodyParser.json());
app.use(cors());

app.get('/dokumentasi', (req, res) => {
  res.render('index', { title: 'Halaman Dokumentasi XGROW DEVELOPER' });
});

app.use('/api', kursusRoutes);
app.use('/api', kontakRoutes);
app.use('/api', berlanggananRoutes);
app.use('/api', infoberitaRoutes);
app.use('/api', datahomeRoutes);
app.use('/api', unggulanRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
