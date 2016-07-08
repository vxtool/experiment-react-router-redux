import webpack from 'webpack';
import baseConfig from './webpack.config.base';

const config = {
  ...baseConfig,
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    ...baseConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
  },
};
export default config;
