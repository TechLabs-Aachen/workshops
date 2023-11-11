const presets = []
const plugins = [
  [
    "@babel/plugin-transform-react-jsx",
    { runtime: "automatic", importSource: "./runtime" }
  ],
]

module.exports = { presets, plugins }
