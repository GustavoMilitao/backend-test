const 
  express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  routes = require('./routes/routes'),
  helmet = require('helmet'),
  require('dotenv').config();

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(port);