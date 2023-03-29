import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;
    --gray-300: #828282;
    --gray-100: #333333;
    --gray-50: #828282;
    --gray-20: #E0E0E0;
    --gray-0: #F5F5F5;
    --negative: #E60000
    --warning: #FFCD07
    --success: #168821
    --info: #155BCB
}

* {
    box-sizing:border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
}

button{
    cursor: pointer;
    border: none;
    background: transparent
}

ul {
    list-style-type:none;
}
`;
