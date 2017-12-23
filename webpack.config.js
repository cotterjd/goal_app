var path = require("path"),
  express = require("express"),
  webpack = require("webpack"),
  history = require("connect-history-api-fallback"),
  SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

// Naming and path settings
var appName = "app";
var entryPoint = "./src/main.js";
var exportPath = path.resolve(__dirname, "./dist");

// Enviroment flag
var plugins = [];
var env = process.env.NODE_ENV;

// Differ settings based on production flag
if (env === "production") {
  var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

  plugins.push(new UglifyJsPlugin({ minimize: true }));
  plugins.push(
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    })
  );
  plugins.push(
    new SWPrecacheWebpackPlugin({
      cacheId: "foobar-app",
      filename: "service-worker.js",
      staticFileGlobs: ["dist/**/*.{js,html,css}"],
      minify: true,
      stripPrefix: "dist/"
    })
  );
}
appName = appName + ".js";
// Main Settings config
module.exports = {
  entry: entryPoint,
  output: {
    path: exportPath,
    filename: appName
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(jpg|png|svg|ico|gif)$/,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
          name: "/images/[name].[ext]"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: ["absolute/path/a", "absolute/path/b"]
            }
          }
        ]
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(html|json)$/,
        exclude: /node_modules/,
        loader: "file-loader?name=[name].[ext]"
      }
    ]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  devServer: {
    inline: true,
    stats: { colors: true },
    publicPath: "/",
    staticOptions: {
      redirect: "false"
    },
    port: 8000,
    setup: app => {
      app.use(express.static(path.resolve(__dirname, "./src")));
    },
    historyApiFallback: true
  }
};
