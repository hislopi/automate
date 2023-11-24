const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@configs": path.resolve(__dirname, "../configs"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@lib": path.resolve(__dirname, "src/lib"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@assets": path.resolve(__dirname, "src/assets"),
      },
    },
  })
}
