import { createGlobalStyle } from 'styled-components';

//import fonts

//  Raleway Extra Bold
import RalewayExtraBoldWoff2 from '@assets/fonts/Raleway-ExtraBold.woff2';
import RalewayExtraBoldWoff from '@assets/fonts/Raleway-ExtraBold.woff';
import RalewayExtraBoldTtf from '@assets/fonts/Raleway-ExtraBold.ttf';

//  Raleway Medium
import RalewayMediumWoff2 from '@assets/fonts/Raleway-Medium.woff2';
import RalewayMediumWoff from '@assets/fonts/Raleway-Medium.woff';
import RalewayMediumTtf from '@assets/fonts/Raleway-Medium.ttf';

//  Raleway SemiBold
import RalewaySemiBoldWoff2 from '@assets/fonts/Raleway-SemiBold.woff2';
import RalewaySemiBoldWoff from '@assets/fonts/Raleway-SemiBold.woff';
import RalewaySemiBoldTtf from '@assets/fonts/Raleway-SemiBold.ttf';

//  Raleway Light
import RalewayLightWoff2 from '@assets/fonts/Raleway-Light.woff2';
import RalewayLightWoff from '@assets/fonts/Raleway-Light.woff';
import RalewayLightTtf from '@assets/fonts/Raleway-Light.ttf';

//  Raleway Bold
import RalewayBoldWoff2 from '@assets/fonts/Raleway-Bold.woff2';
import RalewayBoldWoff from '@assets/fonts/Raleway-Bold.woff';
import RalewayBoldTtf from '@assets/fonts/Raleway-Bold.ttf';

//  Raleway Regular
import RalewayRegularWoff2 from '@assets/fonts/Raleway-Regular.woff2';
import RalewayRegularWoff from '@assets/fonts/Raleway-Regular.woff';
import RalewayRegularTtf from '@assets/fonts/Raleway-Regular.ttf';

//  Open Sans Bold
import OpenSansBoldWoff2 from '@assets/fonts/OpenSans-Bold.woff2';
import OpenSansBoldWoff from '@assets/fonts/OpenSans-Bold.woff';
import OpenSansBoldTtf from '@assets/fonts/OpenSans-Bold.ttf';

//  Open Sans Light
import OpenSansLightWoff2 from '@assets/fonts/OpenSans-Light.woff2';
import OpenSansLightWoff from '@assets/fonts/OpenSans-Light.woff';
import OpenSansLightTtf from '@assets/fonts/OpenSans-Light.ttf';

//  Open Sans SemiBold
import OpenSansSemiBoldWoff2 from '@assets/fonts/OpenSans-SemiBold.woff2';
import OpenSansSemiBoldWoff from '@assets/fonts/OpenSans-SemiBold.woff';
import OpenSansSemiBoldTtf from '@assets/fonts/OpenSans-SemiBold.ttf';


export const GlobalStyles = createGlobalStyle `

  /* roboto-regular - latin */
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayExtraBoldWoff2}) format('woff2'),
        url(${RalewayExtraBoldWoff}) format('woff'),
        url(${RalewayExtraBoldTtf}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Raleway';
    src: url(${RalewayMediumWoff2}) format('woff2'),
        url(${RalewayMediumWoff}) format('woff'),
        url(${RalewayMediumTtf}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Raleway';
    src: url(${RalewaySemiBoldWoff2}) format('woff2'),
        url(${RalewaySemiBoldWoff}) format('woff'),
        url(${RalewaySemiBoldTtf}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Raleway';
    src: url(${RalewayLightWoff2}) format('woff2'),
        url(${RalewayLightWoff}) format('woff'),
        url(${RalewayLightTtf}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansBoldWoff2}) format('woff2'),
        url(${OpenSansBoldWoff}) format('woff'),
        url(${OpenSansBoldTtf}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansLightWoff2}) format('woff2'),
        url(${OpenSansLightWoff}) format('woff'),
        url(${OpenSansLightTtf}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Open Sans';
    src: url(${OpenSansSemiBoldWoff2}) format('woff2'),
        url(${OpenSansSemiBoldWoff}) format('woff'),
        url(${OpenSansSemiBoldTtf}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Raleway';
    src: url(${RalewayRegularWoff2}) format('woff2'),
        url(${RalewayRegularWoff}) format('woff'),
        url(${RalewayRegularTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Raleway';
    src: url(${RalewayBoldWoff2}) format('woff2'),
        url(${RalewayBoldWoff}) format('woff'),
        url(${RalewayBoldTtf}) format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}



*,
*::after,
*::before {
  box-sizing: inherit;
}

body {
  display: flex;
  flex-direction: column;
  font-family: 'Raleway';
  height: 100%;
  font-size: 16px;
  line-height: 1.5;
}

.main {
  flex-grow: 1;
}

img {
  width: 100%;
  height: auto;
  vertical-align: middle;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0)
}

.container {
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 20px;
}

  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
  /* Document
    ========================================================================== */
  /**
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in iOS.
   */
  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  /* Sections
    ========================================================================== */
  /**
   * Remove the margin in all browsers.
   */
  body {
    font-family: 'Roboto Mono', 'Arial', sans-serif;
    margin: 0;
  }
  main {
    display: block;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  /* Grouping content
    ========================================================================== */
  /**
   * 1. Add the correct box sizing in Firefox.
   * 2. Show the overflow in Edge and IE.
   */
  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }
  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  /* Text-level semantics
    ========================================================================== */
  /**
   * Remove the gray background on active links in IE 10.
   */
  a {
    background-color: transparent;
  }
  /**
   * 1. Remove the bottom border in Chrome 57-
   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
   */
  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    text-decoration: underline dotted; /* 2 */
  }
  /**
   * Add the correct font weight in Chrome, Edge, and Safari.
   */
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }
  /**
   * Add the correct font size in all browsers.
   */
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  /* Embedded content
    ========================================================================== */
  /**
   * Remove the border on images inside links in IE 10.
   */
  img {
    border-style: none;
  }
  /* Forms
    ========================================================================== */
  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }
  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */
  button,
  input { /* 1 */
    overflow: visible;
  }
  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */
  button,
  select { /* 1 */
    text-transform: none;
  }
  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  /**
   * Remove the inner border and padding in Firefox.
   */
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  /**
   * Restore the focus styles unset by the previous rule.
   */
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  /**
   * Correct the padding in Firefox.
   */
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }
  /**
   * Add the correct vertical alignment in Chrome, Firefox, and Opera.
   */
  progress {
    vertical-align: baseline;
  }
  /**
   * Remove the default vertical scrollbar in IE 10+.
   */
  textarea {
    overflow: auto;
  }
  /**
   * 1. Add the correct box sizing in IE 10.
   * 2. Remove the padding in IE 10.
   */
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }
  /**
   * Correct the cursor style of increment and decrement buttons in Chrome.
   */
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */
  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }
  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }
  /* Interactive
    ========================================================================== */
  /*
  * Add the correct display in Edge, IE 10+, and Firefox.
  */
  details {
    display: block;
  }
  /*
  * Add the correct display in all browsers.
  */
  summary {
    display: list-item;
  }
  /* Misc
    ========================================================================== */
  /**
   * Add the correct display in IE 10+.
   */
  template {
    display: none;
  }
  /**
   * Add the correct display in IE 10.
   */
  [hidden] {
    display: none;
  }
`;