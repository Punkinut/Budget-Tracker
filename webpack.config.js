const config = {
    entry: "/public/js/index.js",
    output: {
      path: __dirname + "/public/dist",
      filename: "bundle.js",
    },
    mode: "production"
  };
  
  module.exports = config;