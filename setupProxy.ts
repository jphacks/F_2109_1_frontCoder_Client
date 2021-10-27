const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  const headers = {
    'Content-Type': 'application/json',
  }

  app.use(
    '/imgScore',
    createProxyMiddleware({
      target: 'http://54.95.10.72:3000/v0.1.0',
      changeOrigin: true,
      secure: false,
      headers: headers,
    })
  )
}
