module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'OutputCompileTimeWebpackPlugin.js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              cacheDirectory: true
            }
          }
        ],
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}
