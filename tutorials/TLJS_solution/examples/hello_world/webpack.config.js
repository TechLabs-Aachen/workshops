const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./dist/hello_world/App.js",
  mode: "production",
  output: {
    path: `${__dirname}/build/hello_world`,
    filename: "tl_bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
