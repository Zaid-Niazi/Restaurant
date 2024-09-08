const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./src/index.js", // Your JavaScript entry point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js", // Output bundle file,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/, // For CSS files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Path to your HTML file in src
      filename: "index.html", // Name of the output HTML file in dist
    }),
  ],
};
