const HtmlWebpackPlugin =  require('html-webpack-plugin');
module.exports = {
  mode : 'development',
  entry : ['./js/app.js', './js/tests/src_vue/App.js'],
  devServer: {
    liveReload: true,
    hot: true,
    open: true,
    static: ['./'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};