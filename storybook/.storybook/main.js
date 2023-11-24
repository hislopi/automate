const path = require("path")

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    // "storybook-addon-gatsby",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },

  webpackFinal: async config => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

    // Remove core-js to prevent issues with Storybook
    config.module.rules[0].exclude = [/core-js/]
    // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    config.module.rules[0].use[0].options.plugins.push(
      require.resolve("babel-plugin-remove-graphql-queries")
    )

    config.resolve.mainFields = ["browser", "module", "main"]

    config.module.rules.find(
      rule => rule.test.toString() === "/\\.css$/"
    ).exclude = /\.module\.css$/

    // Tell webpack what to do with CSS modules
    config.module.rules.push({
      test: /\.scss$/,
      include: path.resolve(__dirname, "../../src"),
      use: [
        {
          loader: "style-loader",
          options: {
            esModule: true,
          },
        },
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            esModule: true,
            modules: {
              namedExport: true,
            },
          },
        },
        {
          loader: "sass-loader",
          options: {
            additionalData: `@use 'variables' as *;`,
            sassOptions: {
              includePaths: [`${__dirname}/../../src/styles/global`],
            },
          },
        },
      ],
    })

    const dirname = __dirname + "../../../"
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(dirname, "src/components"),
      "@configs": path.resolve(dirname, "configs"),
      "@pages": path.resolve(dirname, "src/pages"),
      "@lib": path.resolve(dirname, "src/lib"),
      "@styles": path.resolve(dirname, "src/styles"),
      "@assets": path.resolve(dirname, "src/assets"),
    }

    console.log({ test: path.resolve(dirname, "src/components") })

    return config
  },
}
