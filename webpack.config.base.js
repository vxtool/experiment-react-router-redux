import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import autoPrefixer from 'autoprefixer';
import partialImport from 'postcss-partial-import';
import variables from 'postcss-css-variables';
import mixins from 'postcss-mixins';
import nested from 'postcss-nested';

export default {
  entry: './source/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  postcss: [
    autoPrefixer,
    partialImport,
    variables,
    mixins,
    nested,
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: './source/index.html',
    }),
    new ExtractTextPlugin('style.css'),
  ],
};
