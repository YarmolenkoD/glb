module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  env: {
    production: {},
  },
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
    [
      "module-resolver",
      {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ],
        root: ["./src"],
        alias: {
          store: "./src/redux-store",
          assets: "./src/assets",
          components: "./src/components",
          i18n: "./src/i18n",
          models: "./src/models",
          router: "./src/router",
          pages: "./src/pages",
          services: "./src/services",
          theme: "./src/theme",
          utils: "./src/utils",
          hooks: "./src/hooks",
        },
      },
    ],
    ["@babel/plugin-proposal-optional-catch-binding"],
  ],
}
