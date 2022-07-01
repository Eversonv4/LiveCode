import Header from "@components/header";
import ProductScreen from "@pages/productPage";
import { GlobalStyle } from "@shared/globalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { GlobalTheme } from "@shared/GlobalTheme";

import { useState } from "react";

function App() {
  const [defaultTheme, setDefaultTheme] = useState(false);

  function toggleDefaultTheme() {
    setDefaultTheme(!defaultTheme);
    changeTheme();
  }

  function changeTheme() {
    if (defaultTheme) {
      let Theme: Object = GlobalTheme[0];
      return Theme;
    } else {
      let Theme: Object = GlobalTheme[1];
      return Theme;
    }
  }

  console.log("Theme", changeTheme);
  return (
    <>
      <ThemeProvider theme={changeTheme}>
        <Header />
        <ProductScreen changeColors={toggleDefaultTheme} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
