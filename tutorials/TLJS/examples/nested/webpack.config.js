const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    alias: {
      Stylesheet: `${__dirname}/css`
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  entry: ["./dist/nested/App.js",],
  mode: "production",
  output: {
    path: `${__dirname}/build/nested`,
    filename: "tl_bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
