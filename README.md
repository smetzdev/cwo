# CWO NX Workspace

## Notes

## Global Styling

Atm our global styling is sperated into three packages

- libs/designtokens
- libs/global-styles
- libs/tailwind-config
  Global styles and tailwind-config manual added packages, outside of the nx-context.

## Instructions to add a new Project

### Gatsby

For adding a gatsby project, you have to run the gatsby-generator.
After that you have to set up tailwind with postcss following [this guide](https://tailwindcss.com/docs/guides/gatsby)

#### Tailwind

To use the global tailwind config, you have to import it inside your apps tailwind.config.js

```js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cwoTailwindConfig = require("../../libs/tailwind-config")

module.exports = {
  presets: [cwoTailwindConfig],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

#### Globals Styles + Fonts

Inside your Tailwind css file, you have to import the global-stlyes file.
It might look something like this:

```css
@import "tailwindcss/base";
@import "../../../../libs/global-styles/main.css";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

It expects to have all fonts to be available under /fonts/\*\*\*, so you have to put your fonts folder
into the static files or make a symlink. The fonts folder is saved in "libs/shared/".
You can run this command in the command line for a symlink :

```bash
ln -s ***ORIGINAL/FONTS/PATH*** ***PATH/TO/THE/COPY***
```
