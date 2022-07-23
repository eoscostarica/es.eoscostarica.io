const path = require("path");
module.exports = {
  title:
    "Servicios de desarrollo de blockchain web3 EOSIO",
  tagline: "",
  url: "https://es.eoscostarica.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "eoscostarica",
  projectName: "es.eoscostarica.io",
  trailingSlash: false,
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          editUrl:
            "https://github.com/eoscostarica/es.eoscostarica.io/website/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/eoscostarica/es.eoscostarica.io/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, "src/plugins", "webpackconfig"),
    [
      "docusaurus2-dotenv",
      {
        systemvars: true,
      },
    ],
  ],
  themeConfig: {
    image: "img/metaImgBlack.png",
    footer: {},
    googleAnalytics: {
      trackingID: "UA-173987-66",
    },
  },
};
