module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: [
    "/lib/**/*", // Ignore built files.
  ],
  plugins: ["@typescript-eslint", "import"],
  rules: {
    // eslint-disable-next-line quote-props
    quotes: ["warn", "double"],
    "object-curly-spacing": ["error", "always"],
    // "no-unused-vars": ["warn", { vars: "all", args: "after-used" }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    // eslint-disable-next-line quote-props
    indent: "off",
    "require-jsdoc": [
      "error",
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false,
        },
      },
    ],
  },
};
