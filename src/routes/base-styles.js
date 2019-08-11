import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const BaseStyles = createGlobalStyle`
    ${reset}
    body, html, #root { height: 100% };
    html { font-family: 'Montserrat', sans-serif; }
    * { box-sizing: border-box; margin: 0; padding: 0 };
`;

export default BaseStyles;
