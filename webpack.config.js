const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/main.mjs',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
};
