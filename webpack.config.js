module.exports  = {
  entry : {
    jsx : './app/app.jsx'
  },
  output : {
    path : __dirname,
    filename : './public/bundle.js'
  },
  resolve : {
    extensions : ['.','.js','.jsx']
  },
  module : {
    loaders : [
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.css$/, loader: "file?name=[name].[ext]" },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
      { test: /\.js?$/, query : { presets : ['react','es2015','babel-preset-stage-1']}, exclude: /node_modules/, loader: "babel-loader"},
      { test: /\.jsx?$/, query : { presets : ['react','es2015','babel-preset-stage-1']}, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.png$/, loader: "url-loader?limit=100000"},
      {test: /\.jpg$/, loader: "file-loader" },
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,loader: 'url?limit=10000&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ],

  },
  devtool : 'cheap-module-eval-source-map'
};
