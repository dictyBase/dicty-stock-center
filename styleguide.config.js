const path = require("path")
module.exports = {
  styleguideDir: "styleguide",
  pagePerSection: true,
  title: "Dicty Stock Center",
  webpackConfig: require("react-scripts/config/webpack.config")("development"),
  propsParser: (filePath, source, resolver, handlers) => {
    const { ext } = path.parse(filePath)
    return ext === ".tsx"
      ? require("react-docgen-typescript")
          .withCustomConfig(`${process.cwd()}/tsconfig.json`)
          .parse(filePath, source, resolver, handlers)
      : require("react-docgen").parse(source, resolver, handlers)
  },
  ignore: [
    "**/*.test.{js,jsx,ts,tsx}",
    "**/*Styles.{js,jsx,ts,tsx}",
    "**/mock*.{js,jsx,ts,tsx}",
    "**/types.{js,jsx,ts,tsx}",
    "src/**/styles/*.{js,jsx,ts,tsx}",
    "src/**/types/*.{js,jsx,ts,tsx}",
    "src/**/utils/*.{js,jsx,ts,tsx}",
    "src/**/hooks/*.{js,jsx,ts,tsx}",
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
      content: "src/features/Stocks/Catalogs/README.md",
      sections: [
        {
          name: "Common",
          components: "src/features/Stocks/Catalogs/common/**/*.tsx",
        },
        {
          name: "Strains",
          components: "src/features/Stocks/Catalogs/Strains/*.tsx",
        },
        {
          name: "Plasmids",
          components: "src/features/Stocks/Catalogs/Plasmids/*.tsx",
        },
      ],
    },
    {
      sectionDepth: 1,
      name: "Details Pages",
      content: "src/features/Stocks/Details/README.md",
      sections: [
        {
          name: "Common",
          components: "src/features/Stocks/Details/common/**/*.tsx",
        },
        {
          name: "Strains",
          components: "src/features/Stocks/Details/Strains/*.tsx",
        },
        {
          name: "Plasmids",
          components: "src/features/Stocks/Details/Plasmids/*.tsx",
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
          components: "src/features/OrderForm/*.tsx",
        },
        {
          name: "Payment",
          components: "src/features/OrderForm/Payment/*.tsx",
        },
        {
          name: "Shipping ",
          components: "src/features/OrderForm/Shipping/*.tsx",
        },
        {
          name: "Submit",
          components: "src/features/OrderForm/Submit/*.tsx",
        },
      ],
    },
    {
      name: "Basic Components",
      components: "src/common/components/*.tsx",
      description:
        "This contains a list of components commonly used throughout the entire DSC application.",
    },
    {
      name: "Contact Page",
      components: "src/features/Contact/*.tsx",
      description:
        "All components used for the contact form, which is not yet built.",
    },
    // {
    //   name: "Error Displays",
    //   components: "src/features/Errors/*.tsx",
    //   description: "All components designed for handling errors."
    // },
    {
      name: "Homepage Components",
      components: "src/features/Home/*.tsx",
      description: "All components specific to the homepage.",
    },
    {
      name: "Info Pages",
      components: "src/features/EditablePages/*.tsx",
      description:
        "Components related to the display of information pages using our custom built Slate.js editor.",
    },
    {
      name: "MyDSC",
      components: "src/features/MyDsc/*.tsx",
      description: "All components related to the not-yet-ready MyDSC.",
    },
    {
      name: "Shopping Cart Page",
      components: "src/features/ShoppingCart/*.tsx",
      description:
        "Components used on the shopping cart page before entering the order form.",
    },
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/app/styleguide/Wrapper"),
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
