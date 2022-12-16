const defaultTheme = require("tailwindcss/defaultTheme");
const daisyUI = require("daisyui");
const tailwindCSSTypography = require("@tailwindcss/typography");

module.exports = {
    content: ["./src/components/**/*.jsx", "./src/pages/**/*.jsx"],
    daisyui: {
        // https://daisyui.com/docs/themes/#-4
        themes: ["light"],
    },
    plugins: [daisyUI, tailwindCSSTypography],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
        },
    },
};
