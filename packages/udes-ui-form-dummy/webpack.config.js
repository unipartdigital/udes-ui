const merge = require("webpack-merge");
const common = require("../../webpack.config");
const pkg = require("./package.json");
const path = require("path");
const libraryName = pkg.name;

// Merge in local config here
module.exports = merge(common, {
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist/"),
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
  },
});
