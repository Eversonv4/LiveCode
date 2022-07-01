import Header from "@components/header";
import ProductPage from "@pages/productPage";
import { GlobalStyle } from "@shared/globalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { GlobalTheme } from "@shared/GlobalTheme";

import { useState } from "react";

function App() {
  const [defaultTheme, setDefaultTheme] = useState<Boolean>(true);
  let Theme: Object;

  function toggleTheme() {
    setDefaultTheme(!defaultTheme);
    changeTheme();
  }

  function changeTheme() {
    if (defaultTheme) {
      Theme = GlobalTheme[0];
      return Theme;
    } else {
      Theme = GlobalTheme[1];
      return Theme;
    }
  }

  return (
    <>
      <ThemeProvider theme={changeTheme}>
        <Header themeState={defaultTheme} changeColors={toggleTheme} />
        <ProductPage themeState={defaultTheme} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
