import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Avenir';
        font-style: normal;
        font-weight: 400;
        src: url('/fonts/Avenir-Regular.woff2') format("opentype");
        font-display: swap;
      }
      @font-face {
        font-family: 'Avenir';
        font-style: italic;
        font-weight: 400;
        src:  url('/fonts/Avenir-It.woff2') format("opentype");
        font-display: swap;
      }
      @font-face {
        font-family: 'Avenir';
        font-style: normal;
        font-weight: 700;
        src: url('/fonts/Avenir-Bold.woff2') format("opentype");
        font-display: swap;
      }
      @font-face {
        font-family: 'Avenir';
        font-style: italic;
        font-weight: 700;
        src: url('/fonts/Avenir-BoldIt.woff2') format("opentype");
        font-display: swap;
      }
      @font-face {
        font-family: 'Avenir';
        font-style: normal;
        font-weight: 600;
        src: url('/fonts/Avenir-Demi.woff2') format("opentype");
        font-display: swap;
      }
      @font-face {
        font-family: 'Avenir';
        font-style: italic;
        font-weight: 600;
        src: url('/fonts/Avenir-DemiIt.woff2') format("opentype");
        font-display: swap;
      }
      @font-face {
        font-family: 'Avenir';
        font-style: normal;
        font-weight: 500;
        src: url('/fonts/Avenir-Medium.woff2') format("opentype");
        font-display: swap;
      }
      @font-face {
        font-family: 'Avenir';
        font-style: italic;
        font-weight: 500;
        src: url('/fonts/Avenir-MediumIt.woff2') format("opentype");
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Avenir';
        font-style: normal;
        font-weight: 300;
        src: url('/fonts/Avenir-UltLt.woff2') format("opentype");
        font-display: swap;
      }
      @font-face {
        font-family: 'Avenir';
        font-style: normal;
        font-weight: 800;
        src: url('/fonts/Avenir-Heavy.woff2') format("opentype");
        font-display: swap;
      }
      @font-face {
        font-family: 'Avenir';
        font-style: italic;
        font-weight: 800;
        src: url('/fonts/Avenir-HeavyIt.woff2') format("opentype");
        font-display: swap;
      }
      `}
  />
);

export default Fonts;
