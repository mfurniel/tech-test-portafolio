import eslintPluginAstro from 'eslint-plugin-astro';
export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
      "astro/no-unused-define-vars-in-style": "error",
      "semi": ["error", "always"],
      "no-unused-vars": ["warn"]
    },
  },
  {
    // Ignored rules in archives .d.ts
    files: ["**/*.d.ts"],
    rules: {
      "no-unused-vars": "off"
    }
  }
];

