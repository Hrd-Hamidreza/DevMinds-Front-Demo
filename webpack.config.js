const path = require("path");

module.exports = {
  mode: "development", //! development Or production
  entry: "./src/preapp.js",
  output: {
    filename: "finalapp.js",
    path: path.resolve(__dirname, "./public/"),
  },
  devServer: {
    static: "./public/",
    historyApiFallback: true,
  },
};
