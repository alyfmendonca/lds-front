const proxy = [
  {
    context: '/api',
    target: 'http://localhost:9191',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;