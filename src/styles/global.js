import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import bg from '../assets/images/background.png';

//@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

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
        font-family: sans-serif;
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