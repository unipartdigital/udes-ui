/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
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
  externals: {
    // Don't bundle @material-ui or styled-components
    "@material-ui/core": {
      commonjs: "@material-ui/core",
      commonjs2: "@material-ui/core",
      amd: "@material-ui/core",
      root: "mui",
    },
    "@material-ui/styles": {
      commonjs: "@material-ui/styles",
      commonjs2: "@material-ui/styles",
      amd: "@material-ui/styles",
      root: "mui_styles",
    },
    "styled-components": {
      commonjs: "styled-components",
      commonjs2: "styled-components",
      amd: "styled-components",
      root: "styled",
    },
  },
});
