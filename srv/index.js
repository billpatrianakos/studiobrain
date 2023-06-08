// Server startup script
// =====================
// Will load all plugins, configs, and
// set up routing for all backend requests.

const config      = require('./config/app')[process.env.NODE_ENV || 'development'],
      path        = require('path'),
      express     = require('express'),
      app         = express(),
      port        = config.port,
      morgan      = require('morgan'),
      fs          = require('fs'),
      bodyParser  = require('body-parser'),
      _           = require('lodash'),
      isProd      = function() { return _.includes(['production', 'staging'], process.env.NODE_ENV); };

console.log('ENVIRONMENT IS: ', process.env.NODE_ENV);

// Set up all middleware
// ---------------------
app.set('trust proxy', isProd() ? 1 : 0); // Trust Nginx as proxy server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan(isProd() ? 'combined' : 'dev', {
  stream: isProd() ? fs.createWriteStream(path.join(__dirname, 'application.log'), { flags: 'a' }) : process.stdout,
  skip: (req, res) => { return isProd() && res.statusCode < 400 }
}));


// Load the API
require('./api')(app);


// 404 Handler
// -----------
app.use((req, res, next) => {
  if (req.xhr)
    res.status(404).json({ status: 'error', message: '404 - Page not found' });
  else
    res.status(404).send('404');
});

// Error handling
// --------------
app.use((err, req, res, next) => {
  if (req.xhr)
    res.status(500).json({ status: 'error', message: isProd() ? 'An unexpected error was encountered' : `Error: ${err}` });
  else
    res.send(err);
});


// Start the server
// ----------------
let server = app.listen(port || 9000, () => {
  console.log(`App is listening on localhost:${server.address().port}`);
});
