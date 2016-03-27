import HTMLWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './app/main.js',
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.scss$/, exclude: /node_modules/, loaders: ['style', 'css', 'sass']}
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: __dirname + '/app/index.html'
    })
  ]
}