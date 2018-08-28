// Based on https://github.com/preboot/angular-webpack/blob/master/webpack.config.js

// Helper: root() is defined at the bottom
var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var APP = 'osn3';
var ENV = process.env.ENV;
var isDeploy = ENV === 'deploy';
var isProd = (ENV === 'prod') || isDeploy;
var isDev = (ENV === 'dev') || (!isProd);
var envText = isDeploy ? 'deploy' : isProd ? 'prod' : 'dev'

console.debug('Resolved build environment: '  + envText);

// Webpack Plugins
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  var config = {};

  if (isDev) {
    config.mode = 'development';
    config.devtool = 'eval-source-map';
  } else {
    config.mode = 'production';
    config.devtool = 'none';
  }

  config.entry = {
    app: root('osn3', 'main.tsx'),
  };

  config.optimization = {
      splitChunks: {
         chunks: "all",
      },
      minimize: isProd,
  };

  config.performance = {
    hints: false,
  };

  config.output = {
    path: root('dist'),
    filename: 'assets/[name].[chunkhash].bundle.js',
  };

  config.resolve = {
    extensions: ['.tsx', '.ts', '.js', '.json', '.css', '.scss', '.html'],
    alias: [{
      alias: 'jquery',
      name: 'jquery/src/jquery',
    }],
    modules: ['.', 'node_modules'],
  };

  var atlConfigFile = root('osn3', 'tsconfig.json');
  config.module = {
    rules: [
      {test: require.resolve("jquery"), loaders: ["expose-loader?$", "expose-loader?jQuery"] },
      {test: /\.tsx?$/, loader: 'awesome-typescript-loader?configFileName=' + atlConfigFile},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.html$/, loader: 'html-loader'},
      {
        test: /\.(gif|png|jpg|svg|woff|woff2|ttf|eot)$/, 
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'assets/[hash]-[name].[ext]'
          }
        }],
      },
      {
        test: /\.(css|scss|sass)$/, 
        use: [{loader: MiniCssExtractPlugin.loader}, 'css-loader', 'sass-loader'],
      },
    ]
  };

  config.plugins = [
   new CopyWebpackPlugin([{
      from: root('osn3', 'static'),
      flatten: true,
    }]),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('autoprefixer')(),
        ]
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        ENV: JSON.stringify(envText),
        LAUNCH_TIME: JSON.stringify(Date.now()),
      }
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: root('osn3', 'index.html'),
      chunksSortMode: 'dependency',
    }),
    new MiniCssExtractPlugin({
      filename: "assets/[name].[chunkhash].bundle.css",
    }),
  ];

  config.devServer = {
    contentBase: root('osn3'),
    historyApiFallback: true,
    quiet: false,
    stats: 'normal', // none (or false), errors-only, minimal, normal (or true) and verbose
    port: process.env.WEBPACK_DEV_SERVER_PORT || 8888,
  };

  return config
}


// Helper functions
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}