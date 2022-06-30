import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 85px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #b8b8b8;
  background-color: ${(props) => props.theme.colors.productColors.optionOne};
`;

export const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const HeaderNav = styled.nav`
  & ul {
    display: flex;
  }

  & ul li {
    margin: 0 15px;
    cursor: pointer;
  }
`;

export const Picture = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const TitleNotification = styled.span`
  display: flex;
  align-items: center;
`;
