import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

html{
    @media (max-width: 1700px){
        font-size: 75%;
    }
    
}

body{
    background: #121212;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}
button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: #f1f1f1;;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    &:hover{
        background-color: #23d997;
        color: #f1f1f1;;
    }
}
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: #f1f1f1;;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
       
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color:#23d997;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }

    .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
`;

export default GlobalStyle;
