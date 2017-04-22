// Example webpack configuration with asset fingerprinting in production.
'use strict';

var path = require('path');
var webpack = require('webpack');
var StatsPlugin = require('stats-webpack-plugin');

// must match config.webpack.dev_server.port
var devServerPort = 3808;

// set NODE_ENV=production on the environment to add asset fingerprints
var production = process.env.NODE_ENV === 'production';
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: {
    // Sources are expected to live in $app_root/webpack
    'application': [
      'webpack-dev-server/client?http://localhost:3808/',
      'webpack/hot/dev-server',
      './webpack/application.js',
      // './webpack/stylesheets/application.scss',
      './webpack/css/main.css',
      './webpack/css/fonts.css',
      './webpack/css/reset.css',
    ]
  },

  output: {
    // Build assets directly in to public/webpack/, let webpack know
    // that all webpacked assets start with webpack/

    // must match config.webpack.output_dir
    path: path.join(__dirname, '..', 'public', 'webpack'),
    publicPath: '/webpack/',

    filename: production ? '[name]-[hash].js' : '[name].js'
  },

  resolve: {
    modules: [
      path.join(__dirname, "webpack"),
      "node_modules"
    ],
    extensions: ['.js', '.jsx', '.css', '.sass','.scss'],
  },

  plugins: [
    // must match config.webpack.manifest_filename
    new StatsPlugin('manifest.json', {
      // We only need assetsByChunkName
      chunkModules: false,
      source: false,
      chunks: false,
      modules: false,
      assets: true
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new ExtractTextPlugin("application.css"),
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react', 'stage-2']
        }
      },
      {
        test: /\.jsx$/,
        loader: ["babel-loader?presets[]=es2015,presets[]=react"],
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            // "postcss-loader",
            "sass-loader"
          ]
        })
      },
      {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            // "postcss-loader",
            "sass-loader"
          ]
        })
      },
      {
        test: /\.(woff2?|woff|ttf|eot|otf|svg|png|jpg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      }
    ]
  },
};

if (production) {
  config.plugins.push(
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false },
      sourceMap: false
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    // new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  );
} else {
  config.devServer = {
    port: devServerPort,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  };
  config.output.publicPath = '//localhost:' + devServerPort + '/webpack/';
  // Source maps
  config.devtool = 'cheap-module-eval-source-map';
}

module.exports = config;
