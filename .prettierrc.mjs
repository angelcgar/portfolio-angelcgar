// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: ["*.astro", "*.ts"],
      options: {
        parser: "astro",
        singleQuote: true,
      },
    },
  ],
};
