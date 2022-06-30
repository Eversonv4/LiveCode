import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   body{
      padding: 0;
      margin: 0;
      font-family: "Poppins", sans-serif;
   }

   ul {
      list-style: none;
      padding: 0;
      margin: 0;
   }

   img {
      cursor: pointer;
   }
`;
