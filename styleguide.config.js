const path = require("path")
module.exports = {
  styleguideDir: "docs",
  webpackConfig: require("react-scripts/config/webpack.config")("development"),
  ignore: [
    "**/*.test.{js,jsx,ts,tsx}",
    "**/*Styles.js",
    "**/mock*.js",
    "src/components/OrderForm/countryList.js",
    "src/components/OrderForm/initialValues.js",
    "src/components/OrderForm/validationSchema.js",
    "src/components/authentication/Authorization.js",
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/styleguide/Wrapper"),
  },
}
