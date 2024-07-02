import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";

const input = "src/index.ts";

export default [
  {
    input,
    output: [
      {
        file: "dist/index.js",
        format: "es",
      },
      {
        file: "dist/index.cjs",
        format: "cjs",
      },
    ],
    plugins: [resolve(), commonjs(), json(), typescript(), terser()],
  },
];
