# Express App Boilerplate

![The definition of "boilerplate"](https://i.imgur.com/0xEmAP6.png)

This is a template repository used to simplify the above, as setting this up for every project adds up overtime.

## Usage

```sh
yarn create next-app -e https://github.com/cyrus01337/next-app-boilerplate .
```

`.` is the current directory, meaning the project will be generated in the directory this command is invoked under, whereas omitting the `.` (path) creates a sub-directory and goes through the typical interactive installation.

## Author's Notes

This is not a stack that is expected to be used by many developers, but it is one that provides enough dependencies to cover most use cases that may warrant Express to be used as the back-end framework of choice. React to me will be my front-end framework of choice and due to this I have not included a layer/easy method, other than changing the Webpack configurations manually, to support other front-end frameworks - this is not a framework in itself but a template and will never evolve to become such a thing, although similar projects like [Astro](https://astro.build/) or [my NextJS boilerplate project](https://github.com/cyrus01337/next-app-boilerplate) may catch your eye if this back-end's structure appears bloated (it is).

I include many tools that I typically use in projects, leading to this project being extremely specific and opinionated and as such if you enjoy this "stack" but would like to change specific parts you are welcome to create your own fork.

The project also runs the Webpack development server (`webpack-dev-server`) and Express server concurrently using the aptly named process manager... `concurrently`, some may find this teeth-grinding, others may not care - I see it as a design problem. There is no clear reasoning behind this other than "it works", so in the future I will be looking to change this behaviour to be more suitable, reasonable and hopefully less hacky-feeling.

## Inclusions

-   [Yarn 2](https://yarnpkg.com/) and [why](https://yarnpkg.com/getting-started/migration#why-should-you-migrate)
-   [Dotenv](https://www.npmjs.com/package/dotenv)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [Nodemon](https://nodemon.io/)
-   [Webpack 5](https://webpack.js.org/)
-   [PostCSS 8](https://postcss.org/)
-   [TailwindCSS](https://tailwindcss.com/)
-   [Daisy UI](https://daisyui.com/)
-   [Lodash](https://lodash.com/)
-   [React 18](https://reactjs.org/)

## Environment Variables

```sh
# determines if webpack-bundle-analyzer runs post-build
ANALYZE=true

# port of choice for the Express server to use, defaults to 3000 in production
SERVER_PORT=4000

# port of choice for the Webpack dev server to use
DEV_SERVER_PORT=3000
```

## Plugins

### ESLint

-   `eslint-config-prettier` - prevents ESLint conflictions with Prettier
-   `eslint-plugin-react` - lint React and in conjunction JSX
-   `eslint-plugin-react-hooks` - enforce hook rules, self-explanatory

### Webpack

-   `html-webpack-plugin` - used for HTML template page
-   `webpack-bundle-analyzer` - observe changes to production build
-   SWC (`@swc/core`, `swc-loader`) - highly performant JS/X parser and minifier with CSS support soon™, used to cut build times down
-   [Code-splitting](https://webpack.js.org/guides/code-splitting/) - may prove sub-optimal for more expansive projects, [YMMV](https://dictionary.cambridge.org/dictionary/english/ymmv)

### React

-   `react-helmet` - concept picked up from NextJS, include tags usually seen in `<head>` within your components (check `src/client/components/Layout.jsx` for default usage)
-   `react-router-dom` - URL routing for developing [SPAs](https://developer.mozilla.org/en-US/docs/Glossary/SPA)

### PostCSS

-   `tailwindcss` - streamline rapid design with various CSS features
-   `cssnano` - CSS minifier of choice for production
-   `postcss-flexbugs-fixes` - picked up from NextJS, implements cross-browser solutions that fix common flexbox bugs, read more [here](https://github.com/philipwalton/flexbugs)

### TailwindCSS

-   `@tailwindcss/typography` - implements the `prose` class that makes text look good

### Prettier

-   `@trivago/prettier-plugin-sort-imports` - auto-sorts JS imports
-   `prettier-plugin-sort-json` - JSON file formatting, typically for configs
-   `prettier-plugin-tailwindcss` - auto-sorts Tailwind classes in JSX
