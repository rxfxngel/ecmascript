const path = require('path');

module.exports = {
  entry: './src/app.js',//archivo donde se fusionaran los demas js
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/'/*aca se pone la ruta de salida*/),//join para unir rutas
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};