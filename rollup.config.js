import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import babel from "rollup-plugin-babel"
import pkg from "./package.json"

const external = Object.keys(pkg.dependencies || {})

export default [
  {
    entry: "index.js",
    dest: pkg.browser,
    format: "umd",
    external,
    moduleName: "ReactStorehouse",
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: ["node_modules/**"],
      }),
    ],
  },
  {
    entry: "index.js",
    external,
    targets: [
      { dest: pkg.main, format: "cjs" },
      { dest: pkg.module, format: "es" },
    ],
    plugins: [
      babel({
        exclude: ["node_modules/**"],
      }),
    ],
  },
]
