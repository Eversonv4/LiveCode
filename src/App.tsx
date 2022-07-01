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
    // let validateStorage: boolean = await isLocalStorageActive();

    // setDefaultTheme(validateStorage);
    /*
    localStorage.getItem("theme") === "false"
      ? setDefaultTheme(false)
      : setDefaultTheme(true);
*/
    if (defaultTheme) {
      localStorage.setItem("theme", "true");
      Theme = GlobalTheme[0];
      return Theme;
    } else {
      localStorage.setItem("theme", "false");
      Theme = GlobalTheme[1];
      return Theme;
    }
  }

  function isLocalStorageActive() {
    let validateStorage = localStorage.getItem("theme") === null;
    if (validateStorage) {
      console.log("local storage", localStorage.getItem("theme"));
      return true;
    }

    if (!validateStorage) {
      return false;
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
