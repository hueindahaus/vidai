import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import stylistic from '@stylistic/eslint-plugin'

const eslintConfig = defineConfig([
  {
    plugins: {"@stylistic": stylistic},
    rules: {
      "@stylistic/indent": ["error", 2],
      "@stylistic/jsx-wrap-multilines": ["error", {
        "declaration": "parens",
        "assignment": "parens",
        "return": "parens",
        "arrow": "parens",
        "condition": "ignore",
        "logical": "ignore",
        "prop": "ignore",
        "propertyValue": "ignore"
      }],
    }
  },
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
