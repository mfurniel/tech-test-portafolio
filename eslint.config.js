import eslintPluginAstro from "eslint-plugin-astro";
import prettier from "eslint-plugin-prettier/recommended";

export default [
  ...eslintPluginAstro.configs.recommended,
  prettier,
  {
    rules: {
      "astro/no-unused-define-vars-in-style": "error",
      semi: ["error", "always"],
      "no-unused-vars": ["warn"],
    },
  },
  {
    files: ["**/*.d.ts"],
    rules: {
      "no-unused-vars": "off",
    },
  },
];
