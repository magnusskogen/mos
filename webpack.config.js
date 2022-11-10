const path = require('path');

module.exports = {
    entry: './src/scripts.js',
    watch: true,
    output: {
      filename: 'scripts.js',
      path: path.resolve(__dirname, 'web/assets'),
    },
};