# Express App Boilerplate

![The definition of ](https://i.imgur.com/0xEmAP6.png)

This is a template repository used to simplify the above, as setting this up for every project adds up overtime.

## Usage

Fork it, go into the project's Settings and ensure it's set as a template repository (it should be by default if I configured the repo correctly).

## Author's Notes

This is not a stack that is expected to be used by many developers, but it is one that provides enough dependencies to cover most use cases that may warrant Express to be used as the back-end framework of choice. React to me will be my front-end framework of choice and due to this I have not included a layer/easy method, other than changing the Webpack configurations manually, to support other front-end frameworks - this is not a framework in itself but a template and will never evolve to become such a thing, although similar projects like [Astro](https://astro.build/) or [my NextJS boilerplate project](https://github.com/cyrus01337/next-app-boilerplate) may catch your eye if this back-end's structure is too bloated for you.

I include many tools that I typically use in projects, leading to this project being extremely specific and opinionated and as such if you enjoy this "stack" but would like to change specific parts you are welcome to create your own fork.

The project also runs the Webpack development server (`webpack-dev-server`) and Express server concurrently using the aptly named process manager... `concurrently`, some may find this teeth-grinding, others may not care - I see it as a design problem. There is no clear reasoning behind this other than "it works", so in the future I will be looking to change this behaviour to be more suitable, reasonable and hopefully less hacky-feeling.

## Inclusions

-   [TOML](https://toml.io/en/)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [Nodemon](https://nodemon.io/)
-   [Webpack 5](https://webpack.js.org/)
-   [PostCSS 8](https://postcss.org/)
-   [Lodash](https://lodash.com/)
-   [React 18](https://reactjs.org/)
-   [React Router 6](https://reactrouter.com/en/6.4.5)

## Configuration

```sh
# port of choice for both the Express server and the Webpack dev server to use (for consistency during testing)
PORT=3000
```

## Plugins

### ESLint

-   `@babel/plugin-syntax-import-assertions` - adds support for type assertions (usually when importing JSON files in my case)
-   `@babel/plugin-transform-runtime` - allow linting for React files
-   `eslint-config-prettier` - prevents ESLint conflictions with Prettier
-   `eslint-plugin-react` - lint React and in conjunction JSX
-   `eslint-plugin-react-hooks` - enforce hook rules, self-explanatory

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

-   ~~`@trivago/prettierplugin-sort-imports`~~ `@ianvs/prettier-plugin-sort-imports` - fork of Trivago's import-sorting plugin that auto-sorts JS imports extensively
-   `prettier-plugin-sort-json` - JSON file formatting, typically for configs
-   ~~`prettier-plugin-tailwindcss` - auto-sorts Tailwind classes in JSX~~ This was excluded in preference of VSC's [Headwind extension](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind), created by the author(s?) of Tailwind, that covers this very well
