const path = require('path');

module.exports = {
  entry: {
    gettingStarted: "./gettingStarted.jsx",
    p2: "./p2.jsx",
    p4: "./p4.jsx",
    p5: "./p5.jsx",
  },
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192, // Convert images < 8kb to base64 strings
            name: 'images/[name].[ext]' // Output images to images directory
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: './',
    watchContentBase: true,
},
  output: {
    path: path.resolve(__dirname, 'compiled'),
    publicPath: "/",
    filename: "[name].bundle.js",
  },
  mode: "development",
};
