// 전역 css 적용 (styled-components에 세팅되어 있는 기능)
import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

/*
styled - reset : 리셋 css 라이브러리
npm i styled-reset
*/

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
        list-style: none;
    }

    body {
        background-color: #e7e7e7;
    }

    button {
        border: none;
    }
`

export default GlobalStyles;