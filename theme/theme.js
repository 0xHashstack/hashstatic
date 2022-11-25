import { extendTheme, theme as base } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    Avenir: `Avenir, ${base.fonts.body}`,
  },
  colors: {
    "header-black-translucent": "rgba(1,2,3,0.85)",
    "header-black": "rgba(5,3,6,1)",
    "header-white": "#F5F5F5",
    "header-button-start": "#6936FC",
    "header-button-end": "#152ABA",
    "header-link-hover": "rgba(255,255,255,0.7)",
    "button-hover": "#6d6af8",
    "hero-green": "#2BDBBD",
    "hero-grey": "#ADB5BD",
    "backed_by-black": "#141124",
    "backed_by-grey": "#99A1AC",
    background: "#040716",
    "card-border": "#2A263E",
    "featured_by-background": "#0C0822",
    "contribute-icon": "#CACACA",
    "footer-icon": "#858C94",
  },
  breakpoints: {
    xs: "23rem",
    ipadLandscape: "73.75em",
    "4k": "160em",
  },
  styles: {
    global: () => ({
      body: {
        bg: "",
      },
    }),
  },
});
