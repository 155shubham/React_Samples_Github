const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        // for any file with a suffix of js or jsx
        test: /\.(js|jsx)$/,
        // ignore transpiling JavaScript from node_modules, bower_components as it should be that state
        exclude: /(node_modules|bower_components)/,
        // use the babel-loader for transpiling JavaScript to a suitable format
        loader: "babel-loader",
        // attach the presets to the loader (most projects use .babelrc file instead)
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
