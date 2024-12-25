// eslint.config.js
import globals from "globals";
import pluginJs from "@eslint/js";
/*-----------------------------------------------------*/
/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
  pluginJs.configs.recommended,
];
