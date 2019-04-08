module.exports = {
  styleguideDir: "docs",
  webpackConfig: require("react-scripts/config/webpack.config")("development"),
  ignore: ["**/*.test.{js,jsx,ts,tsx}", "**/*Styles.js", "**/mock*.js"],
}
