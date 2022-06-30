import { Data } from "@store/dummy_data";
import { GlobalTheme } from "@shared/GlobalTheme";

import {
  HeaderContainer,
  Picture,
  HeaderSection,
  HeaderNav,
  TitleNotification,
} from "./styles";

export default function Header() {
  return (
    <HeaderContainer theme={GlobalTheme}>
      <HeaderSection>
        <Picture src={Data.logo_company} />
        <HeaderNav>
          <ul>
            <li>MENS</li>
            <li>WOMENS</li>
            <li>BEST</li>
            <li>COLLECTION</li>
          </ul>
        </HeaderNav>
        <TitleNotification>
          <Picture src={Data.bell_icon} />
          NOTIFICATIONS
        </TitleNotification>
      </HeaderSection>
    </HeaderContainer>
  );
}
