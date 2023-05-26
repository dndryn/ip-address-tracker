import * as path from 'path';
import * as webpack from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import 'webpack-dev-server';


const config: webpack.Configuration = {
  target: "web",
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.([cm]?ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"],
    },
    fallback: {
      //------------>
      //TODO: the following is work around for dotenv/webpack issue
      // remove this when issue is resolved
      "path": require.resolve('path-browserify'),
      "os": require.resolve("os-browserify/browser"),
      "fs": false,
      //<------------
    },
    plugins: [
      new TsconfigPathsPlugin({ configFile: "./tsconfig.json" }),
    ],
  },
};

export default config;