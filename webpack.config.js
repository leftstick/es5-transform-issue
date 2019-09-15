module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        include: path => path.includes("debug/src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: { ie: 10 } }]]
          }
        }
      }
    ]
  }
};
