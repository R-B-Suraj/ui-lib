const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/'
  },
  module: {
    rules: [
      
      {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },

    {
      test: /\.css$/,
      use: ['style-loader','css-loader']
      // we don't need an options object here because we are just telling which loaders to use
      // order in which we write is important .. we are using 2 loaders
      // it runs from right to left... ie. first css-loader  to collect css files , then style-loader to add that to html dom

    }
       
  ]


  }
};