// eslint.config.js
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import prettier from "eslint-plugin-prettier/recommended";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  prettier,
  {
    files: ["src/**/*.{js,ts,astro}"],
    rules: {
      "astro/no-unused-define-vars-in-style": "error",
      semi: ["error", "always"],
      "no-unused-vars": ["warn"],
    },
  },
];
