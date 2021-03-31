import { createProxyMiddleware } from 'http-proxy-middleware';

export default createProxyMiddleware({
  target: 'http://3.36.237.214/',
  pathRewrite: { '^/api': '/' },
  changeOrigin: true,
  prependPath: true,
});
