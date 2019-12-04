const path = require("path")
module.exports = {
  styleguideDir: "docs",
  webpackConfig: require("react-scripts/config/webpack.config")("development"),
  ignore: [
    "**/*.test.{js,jsx,ts,tsx}",
    "**/*Styles.js",
    "**/mock*.js",
    "**/types.js",
    "src/**/styles/*.js",
    "src/**/types/*.js",
    "src/**/utils/*.js",
    "src/**/hooks/*.js",
    "src/components/authentication/Authorization.js",
  ],
  sections: [
    // {
    //   name: "Catalog Pages",
    //   components: "src/components/Stocks/Catalogs/**/*.js",
    // },
    {
      name: "Details Pages",
      components: "src/components/Stocks/Details/**/*.js",
    },
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/styleguide/Wrapper"),
  },
}
