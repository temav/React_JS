const HtmlWebpackPlugin = require("html-webpack-plugin");
let BrotliPlugin = require("brotli-webpack-plugin");
module.exports = {
  mode: "production", //"development",
  entry: {
    email: "./src/indexEmail.tsx",
    password: "./src/indexPassword.tsx",
  },
  output: {
    filename: "[name].index.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devServer: {
    historyApiFallback: { disableDotRule: true },
  },
  devtool: "", //"inline-source-map",
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /\.spec.tsx?$/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
  node: {
    fs: "empty",
    child_process: "empty",
    net: "empty",
    tls: "empty",
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ["email"],
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      filename: "./email.html",
    }),
    new HtmlWebpackPlugin({
      chunks: ["password"],
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      filename: "./password.html",
    }),
    new BrotliPlugin({
      asset: "[path].br[query]",
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};
