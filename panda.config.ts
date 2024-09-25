import { defineConfig } from "@pandacss/dev";

const globalCss = {
  // Global styles
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  // Body styles
  body: {
    fontSize: "16px",
    lineHeight: "1.5",
  },
};



export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          text: {
            primary: {value: "#000"},
            secondary: {value: "#fff"},
          },
          background: {
            'board-white': {value: '#F4A460FF'},
            'board-black': {value: '#8B4513FF'},
          },
        },
      },
      slotRecipes: {

      }
    },
  },

  outdir: "styled-system",
  globalCss,
  jsxFramework: 'react',
  conditions: {},
});
