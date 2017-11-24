module.exports = {
    // Tell webpack to run babel on every file it runs through
    module: {
      rules: [
        {
          test: /\.js?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: [
              'react',
              'stage-0',
              ['env', { targets: { browsers: ['last 2 versions'] } }]
            ]
          }
        },
        {
          use: ['style-loader', 'css-loader'],
          test: /\.css$/
        },
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }       
      ]
    }
};