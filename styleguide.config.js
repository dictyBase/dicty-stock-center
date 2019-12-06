const path = require("path")
module.exports = {
  styleguideDir: "docs",
  pagePerSection: true,
  title: "Dicty Stock Center",
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
    {
      sectionDepth: 1,
      name: "Catalog Pages",
      sections: [
        {
          name: "Common",
          components: "src/components/Stocks/Catalogs/common/**/*.js",
        },
        {
          name: "Strains",
          components: "src/components/Stocks/Catalogs/Strains/*.js",
        },
        {
          name: "Plasmids",
          components: "src/components/Stocks/Catalogs/Plasmids/*.js",
        },
      ],
    },
    {
      sectionDepth: 1,
      name: "Details Pages",
      sections: [
        {
          name: "Common",
          components: "src/components/Stocks/Details/common/**/*.js",
        },
        {
          name: "Strains",
          components: "src/components/Stocks/Details/Strains/*.js",
        },
        {
          name: "Plasmids",
          components: "src/components/Stocks/Details/Plasmids/*.js",
        },
      ],
    },
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/styleguide/Wrapper"),
  },
  template: {
    favicon: "./public/favicon.ico",
    head: {
      links: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto",
        },
      ],
    },
  },
  theme: {
    maxWidth: "100%",
    color: {
      codeBackground: "#F5F5F5;",
      ribbonBackground: "#004080",
    },
    fontFamily: {
      base: "Roboto, sans-serif",
    },
  },
  ribbon: {
    url: "http://www.github.com/dictyBase/Dicty-Stock-Center",
    text: "View on GitHub",
  },
}
