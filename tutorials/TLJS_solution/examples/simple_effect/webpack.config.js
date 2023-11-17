const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    alias: {
      Stylesheet: `${__dirname}/css`
      //tljs: `${__dirname}/../../src/runtime/tljs.js`,
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
  entry: ["./dist/simple_effect/App.js",],
  mode: "production",
  output: {
    path: `${__dirname}/build/simple_effect`,
    filename: "tl_bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
