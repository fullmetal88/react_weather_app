const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve('./src'),
  entry: {
    app: [
      'script-loader!jquery/dist/jquery.min.js',
      'script-loader!foundation-sites/dist/js/foundation.min.js',
      './app.js',
    ],
  },
  externals: {
    jquery: 'jQuery',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ],
    alias: {
      navigation: 'components/Navigation',
      main: 'components/Main',
      getweather: 'components/GetWeather',
      about: 'components/About',
      examples: 'components/Examples',
      weatherform: 'components/WeatherForm',
      weatherresult: 'components/WeatherResult',
      weatherapi: 'api/WeatherApi',
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: [path.resolve('./node_modules')],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react'] },
        }],
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  devServer: {
    contentBase: path.resolve('./dist'),
  },
  devtool: 'source-map',
};
