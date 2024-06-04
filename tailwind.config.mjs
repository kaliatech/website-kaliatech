/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin'
import defaultTheme from 'tailwindcss/defaultTheme'
import daisyUiPlugin from 'daisyui'

import typographyPlugin from '@tailwindcss/typography'

export default {
  darkMode: 'selector', // or 'media'
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@kaliatech/shared-astro-tw/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  safelist: [
    {
      pattern: /grid-cols-\d+/,
      variants: ['md', 'lg'],
    },
  ],
  theme: {
    extend: {
      container: {
        // or have default horizontal padding
        padding: '1rem',
      },

      colors: {
        theme: {
          off_black: 'rgb(14,14,17)',
          off_white: '#fff6eb',
          50: '#E7EDF3',
          100: '#CCD9E5',
          200: '#9AB3CB',
          300: '#678DB1',
          400: '#456787',
          500: '#2C4256',
          600: '#233443',
          700: '#1A2733',
          800: '#111A22',
          900: '#090D11',
          950: '#05080A',
        },
      },
      fontFamily: {
        sans: ['"Montserrat Variable"', ...defaultTheme.fontFamily.sans],
        //sans: ['"Open Sans Variable"', ...defaultTheme.fontFamily.sans],
        //sans: ['"Nunito Variable"', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            //'--tw-prose-captions': '#ff0000',
            //maxWidth: '80ch', // add required value here
            maxWidth: 'none', // add required value here
            figcaption: {
              color: theme('colors.gray[500]'),
            },
            a: {
              display: 'inline-flex',
              fontWeight: 600,
              color: '#20466a'
            },
            h1: {
              fontSize: '1.5rem',
              fontWeight: 500,
              marginBottom: '.5rem',
            },
            h2: {
              fontSize: '1.25rem',
              fontWeight: 500,
              marginBottom: '.5rem',
            },
            // p: {
            //   fontWeight: 300,
            //   'p > li': {
            //     border: '2px solid red',
            //   },
            // },
          },
        },
      }),
    },
  },
  extend: {},
  plugins: [
    typographyPlugin,
    daisyUiPlugin,
    // plugin(function ({ addBase }) {
    //   addBase({
    //     html: { fontSize: '14px' },
    //   })
    // }),
  ],
  daisyui: {
    // https://daisyui.com/docs/config/
    logs: false,
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#2C4256',
          // secondary: 'teal',
          //['base-100']: 'oklch(var(--b1))',
          //'base-100': 'rgb(20,20,20)',
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#637487',
          // secondary: 'teal',
        },
      },
    ],
  },
}
