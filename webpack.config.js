const path = require("path")
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
  entry: './src/index.js',
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
    publicPath:'/',
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].bundle.css',
      template: './src/css/app.css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/templates/index.html',
    }),
  ],
  module: {
    rules: [{
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/react"]
          }
        }],
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: 'postcss.config.js'
              }
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.pug$/,
        loader: ['pug-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader:'file-loader',
            options:{
              name:'[name].[ext]',
              outputPath:'img/',
              publicPath:'img/',
            }
          }
        ],
      }
    ],
  },
  mode: "development"
}