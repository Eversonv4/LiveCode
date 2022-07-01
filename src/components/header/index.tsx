import { FaAdjust } from "react-icons/fa";

import {
  LogoCompanyDark,
  BellIconDark,
  BellIcon,
  LogoCompany,
} from "@assets/index";

import {
  HeaderContainer,
  Picture,
  HeaderSection,
  HeaderNav,
  TitleNotification,
} from "./styles";

export default function Header(props: any) {
  return (
    <HeaderContainer>
      <HeaderSection>
        {props.themeState ? (
          <Picture src={LogoCompany} />
        ) : (
          <Picture src={LogoCompanyDark} alt="logo company" />
        )}
        <HeaderNav>
          <ul>
            <li>MENS</li>
            <li>WOMENS</li>
            <li>BEST</li>
            <li>COLLECTION</li>
          </ul>
        </HeaderNav>
        <TitleNotification>
          <FaAdjust onClick={props.changeColors} />
          {props.themeState ? (
            <Picture src={BellIcon} alt="bell icon" />
          ) : (
            <Picture src={BellIconDark} alt="bell icon dark" />
          )}
          NOTIFICATIONS
        </TitleNotification>
      </HeaderSection>
    </HeaderContainer>
  );
}
