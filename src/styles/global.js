import { createGlobalStyle } from 'styled-components';

import bg from '../assets/images/background.png';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: url(${bg}) no-repeat center top;
        background-size: cover;
    }

    body, input, button {
        font: 14px, sans-serif;
    }

    #root {
        max-width: 1120px;
        margin-left: 50px;
        padding-top: 30px;
    }    

    button {
        cursor: pointer;
    }
`;