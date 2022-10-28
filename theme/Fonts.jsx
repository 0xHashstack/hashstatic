import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Avenir';
        font-style: normal;
        font-weight: 400;
        src: url('/fonts/Avenir-Regular.otf') format("opentype");
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Avenir';
        font-style: italic;
        font-weight: 400;
        src:  url('/fonts/Avenir-It.otf') format("opentype");
        font-display: swap;
      }
      @font-face {
        font-family: 'Avenir';
        font-style: normal;
        font-weight: 700;
        src: url('/fonts/Avenir-Bold.otf') format("opentype");
        font-display: swap;
      }
      @font-face {
        font-family: 'Avenir';
        font-style: italic;
        font-weight: 700;
        src: url('/fonts/Avenir-BoldIt.otf') format("opentype");
        font-display: swap;
      }
      @font-face {
        font-family: 'Avenir';
        font-style: normal;
        font-weight: 600;
        src: url('/fonts/Avenir-Demi.otf') format("opentype");
        font-display: swap;
      }
      @font-face {
        font-family: 'Avenir';
        font-style: italic;
        font-weight: 600;
        src: url('/fonts/Avenir-DemiIt.otf') format("opentype");
        font-display: swap;
      }
      @font-face {
        font-family: 'Avenir';
        font-style: normal;
        font-weight: 500;
        src: url('/fonts/Avenir-Medium.otf') format("opentype");
        font-display: swap;
      }
      @font-face {
        font-family: 'Avenir';
        font-style: italic;
        font-weight: 500;
        src: url('/fonts/Avenir-MediumIt.otf') format("opentype");
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Avenir';
        font-style: normal;
        font-weight: 300;
        src: url('/fonts/Avenir-UltLt.otf') format("opentype");
        font-display: swap;
      }
      @font-face {
        font-family: 'Avenir';
        font-style: italic;
        font-weight: 300;
        src: url('/fonts/Avenir-UltLtIt.otf') format("opentype");
        font-display: swap;
      }
      @font-face {
        font-family: 'Avenir';
        font-style: normal;
        font-weight: 800;
        src: url('/fonts/Avenir-Heavy.otf') format("opentype");
        font-display: swap;
      }
      @font-face {
        font-family: 'Avenir';
        font-style: italic;
        font-weight: 800;
        src: url('/fonts/Avenir-HeavyIt.otf') format("opentype");
        font-display: swap;
      }
      `}
  />
);

export default Fonts;
