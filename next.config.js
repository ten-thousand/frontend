module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://3.36.237.214/:path*',
      },
    ];
  },
};
