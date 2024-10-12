import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background: #161A23;
        display: flex;
        font-family: sans-serif;
        justify-content: center;
    }

    h1, h2, h3, p {
        color: #FFFF;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
        background: #009F55;
        border: none;
        padding: 14px;
        color:white;
        transition: 0.3s;
        border-radius: 10px;

        &:hover {
            background: #49FC79;
        }
    }

`;

export default GlobalStyle;
