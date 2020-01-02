const path = require("path")
module.exports = {
  styleguideDir: "docs",
  pagePerSection: true,
  title: "Dicty Stock Center",
  webpackConfig: require("react-scripts/config/webpack.config")("development"),
  propsParser: require("react-docgen-typescript").withCustomConfig(
    "./tsconfig.json",
  ).parse,
  ignore: [
    "**/*.test.{js,jsx,ts,tsx}",
    "**/*Styles.{js,jsx,ts,tsx}",
    "**/mock*.{js,jsx,ts,tsx}",
    "**/types.{js,jsx,ts,tsx}",
    "src/**/styles/*.{js,jsx,ts,tsx}",
    "src/**/types/*.{js,jsx,ts,tsx}",
    "src/**/utils/*.{js,jsx,ts,tsx}",
    "src/**/hooks/*.{js,jsx,ts,tsx}",
    "src/components/authentication/Authorization.js",
    "src/**/*Context.{js,jsx,ts,tsx}",
    "src/**/*Store.{js,jsx,ts,tsx}",
  ],
  sections: [
    {
      name: "Introduction",
      content: "src/README.md",
    },
    {
      sectionDepth: 1,
      name: "Catalog Pages",
      content: "src/components/Stocks/Catalogs/README.md",
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
      content: "src/components/Stocks/Details/README.md",
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
    {
      sectionDepth: 1,
      name: "Order Form",
      description:
        "This contains all components related to the DSC order form. Sections are separated by page (Payment, Shipping, Submit) as well as common/shared components used within multiple pages.",
      sections: [
        {
          name: "Common",
          components: "src/components/OrderForm/*.js",
        },
        {
          name: "Payment",
          components: "src/components/OrderForm/Payment/*.js",
        },
        {
          name: "Shipping ",
          components: "src/components/OrderForm/Shipping/*.js",
        },
        {
          name: "Submit",
          components: "src/components/OrderForm/Submit/*.js",
        },
      ],
    },
    {
      name: "Basic Components",
      components: "src/components/common/*.js",
      description:
        "This contains a list of components commonly used throughout the entire DSC application.",
    },
    {
      name: "Contact Page",
      components: "src/components/Contact/*.js",
      description:
        "All components used for the contact form, which is not yet built.",
    },
    // {
    //   name: "Error Displays",
    //   components: "src/components/Errors/*.js",
    //   description: "All components designed for handling errors."
    // },
    {
      name: "Homepage Components",
      components: "src/components/Home/*.js",
      description: "All components specific to the homepage.",
    },
    {
      name: "Info Pages",
      components: "src/components/InfoPage/*.js",
      description:
        "Components related to the display of information pages, currently using Draft.js but will be switched to use our custom built Slate editor.",
    },
    {
      name: "MyDSC",
      components: "src/components/MyDsc/*.js",
      description: "All components related to the not-yet-ready MyDSC.",
    },
    {
      name: "Shopping Cart Page",
      components: "src/components/ShoppingCart/*.js",
      description:
        "Components used on the shopping cart page before entering the order form.",
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
    fontSize: {
      base: 14,
      text: 16,
      small: 13,
      h1: 40,
      h2: 24,
      h3: 18,
      h4: 18,
      h5: 16,
      h6: 16,
    },
  },
  ribbon: {
    url: "http://www.github.com/dictyBase/Dicty-Stock-Center",
    text: "View on GitHub",
  },
}
