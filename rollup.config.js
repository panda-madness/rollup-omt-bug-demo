import nodeResolve from "@rollup/plugin-node-resolve";
import OMT from "@surma/rollup-plugin-off-main-thread";

export default {
  input: "main.js",
  output: {
    dir: "dist",
    format: "amd"
  },
  plugins: [
    nodeResolve(),
    OMT()
  ]
}