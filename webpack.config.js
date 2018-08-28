var webpack = require('webpack')

module.exports = {
  entry: "./src/scripts",
  output: {
    publicPath: "/dist/scripts/",
    path: __dirname + "/dist/scripts",
    filename: "bundle.js"
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        exclude: "/node_modules/"
      }
    ]
  }
}
