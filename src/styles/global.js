import { createGlobalStyle } from 'styled-components';

import bg from '../assets/images/background.png';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: url(${bg}) no-repeat center top;
        background-size: cover;
        font-family: 'Roboto', cursive;
    }

    body, input, button {
        font: 14px, sans-serif;
    }

    #root {
        max-width: 1120px;
        margin-left: 50px;
        padding-top: 0px;
    }    

    button {
        cursor: pointer;
    }
`;