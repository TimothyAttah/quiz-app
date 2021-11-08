import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  --bg-color: #020230;
  --bg-white: #ffffff;
  --text-white: #ffffff;
}
html{
  font-size: 16px;
}
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  ul{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  button{
    border: none;
    outline: none;
    cursor: pointer;
  }
  @keyframes correct {
  0%,22%,42%{
    background: mediumblue;
  }
  20%,40%,60%{
    background: linear-gradient(#0e0124, #22074d);
  }
  62%,100%{
    background: green;
  }
}
  @keyframes wrong {
  0%,22%,42%{
    background: mediumblue;
  }
  20%,40%,60%{
    background: linear-gradient(#0e0124, #22074d);
  }
  62%,100%{
    background: crimson;
  }
}
`;
