const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'src', 'views')));

const kursusRoutes = require('./src/routes/kursusRoutes');
const kontakRoutes = require('./src/routes/kontakRoutes');
const berlanggananRoutes = require('./src/routes/berlanggananRoutes');
const infoberitaRoutes = require('./src/routes/infoberitaRoutes');
const datahomeRoutes = require('./src/routes/datahomeRoutes');
const unggulanRoutes = require('./src/routes/unggulanRoutes');
const pbaruRoutes = require('./src/routes/pbaruRoutes');

app.get('/dokumentasi', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'));
});

app.use('/api', kursusRoutes);
app.use('/api', kontakRoutes);
app.use('/api', berlanggananRoutes);
app.use('/api', infoberitaRoutes);
app.use('/api', datahomeRoutes);
app.use('/api', unggulanRoutes);
app.use('/api', pbaruRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
