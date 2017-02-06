var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var gifRoutes = require('./routes/gifRoutes');

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/gifRoutes', gifRoutes);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'views', 'index.html'));
});

app.listen(process.env.PORT || 3000);
