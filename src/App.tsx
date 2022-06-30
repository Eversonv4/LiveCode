import Header from "@components/header";
import ProductScreen from "@pages/productPage";
import { GlobalStyle } from "@shared/globalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { GlobalTheme } from "@shared/GlobalTheme";

function App() {
  return (
    <>
      <ThemeProvider theme={GlobalTheme}>
        <Header />
        <ProductScreen />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
