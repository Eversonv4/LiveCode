import Header from "@components/header";
import ProductPage from "@pages/productPage";
import { GlobalStyle } from "@shared/globalStyle/GlobalStyle";

import { ThemeProvider } from "styled-components";
import { GlobalTheme } from "@shared/globalTheme/styles";

import { useState } from "react";

function App() {
  const [defaultTheme, setDefaultTheme] = useState<Boolean>(true);
  let SelectedTheme: Object;

  function toggleTheme() {
    setDefaultTheme(!defaultTheme);
    changeTheme();
  }

  function changeTheme() {
    if (defaultTheme) {
      SelectedTheme = GlobalTheme[0];
      return SelectedTheme;
    } else {
      SelectedTheme = GlobalTheme[1];
      return SelectedTheme;
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
