/* eslint-disable no-console */
var express = require('express');
var next = require('next');
var devProxy = {
  '/api': {
    target: 'http://3.36.237.214/',
    pathRewrite: { '^/api': '/' },
    changeOrigin: true,
  },
};
var port = parseInt(process.env.PORT, 10) || 3000;
var env = process.env.NODE_ENV;
var dev = env !== 'production';
var app = next({
  dir: '.',
  dev: dev,
});
var handle = app.getRequestHandler();
var server;
app
  .prepare()
  .then(function () {
    server = express();
    // Set up the proxy.
    if (dev && devProxy) {
      var createProxyMiddleware_1 = require('http-proxy-middleware')
        .createProxyMiddleware;
      Object.keys(devProxy).forEach(function (context) {
        server.use(context, createProxyMiddleware_1(devProxy[context]));
      });
    }
    // Default catch-all handler to allow Next.js to handle all other routes
    server.all('*', function (req, res) {
      return handle(req, res);
    });
    server.listen(port, function (err) {
      if (err) {
        throw err;
      }
      console.log('> Ready on port ' + port + ' [' + env + ']');
    });
  })
  ['catch'](function (err) {
    console.log('An error occurred, unable to start the server');
    console.log(err);
  });
