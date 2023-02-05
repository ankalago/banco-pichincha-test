import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');

  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .box-shadow {
    box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05);
    color: red;
  }

  body {
    margin: 0;
    padding: 0 2em;
    background: #f3f4f6;
    font-family: 'Poppins', sans-serif;
    color: #111827;
  }

  input[type='text'] {
    font-family: 'Poppins', sans-serif;
    font-size: .875rem;
    padding: 0.5rem 0.75rem;
    border-width: 1px;
    border-style: solid;
    appearance: none;
    background-color: #fff;
    border-radius: 0.375rem;
    border-color: #d1d5db;
    box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05);
    width: calc(100% - 2em);
    
    &:hover, &:focus, &:focus-visible {
      border-color: #4f46e5;
      border-width: 1px;
      outline-color: #4f46e5;
    }
  }

  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    height: 5px;
    background: #fff;
    border-width: 1px;
    border-style: solid;
    border-radius: 0.375rem;
    border-color: #d1d5db;
    background-image: linear-gradient(#4f46e5, #4f46e5);
    background-size: 70% 100%;
    background-repeat: no-repeat;
    box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05);
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: #4f46e5;
    cursor: ew-resize;
    box-shadow: 0 0 2px 0 #555;
    transition: background .3s ease-in-out;
  }

  button {
    font-family: 'Poppins', sans-serif;
    font-size: .875rem;
    line-height: 1.25rem;
    padding: 0.5rem 0.75rem;
    border-width: 1px;
    border-style: solid;
    appearance: none;
    border-radius: 0.375rem;
    border-color: #d1d5db;
    box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05);
    justify-content: center;
    background: #4f46e5;
    color: white;
    cursor: pointer;

    &:hover {
      background: #4338ca;
    }
  }
`;

export default GlobalStyle;
