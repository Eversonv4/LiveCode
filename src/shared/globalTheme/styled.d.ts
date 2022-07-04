import "styled-components";
import { GlobalTheme } from "./styles";

declare module "styled-components" {
  type ThemeType = typeof Globaltheme;

  export interface DefaultTheme extends ThemeType {}
}
