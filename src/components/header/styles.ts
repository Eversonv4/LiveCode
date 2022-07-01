import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 85px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #b8b8b8;
  background-color: ${(props) => props.theme.colors.backgroundHeader};
  color: ${(props) => props.theme.colors.fontColor};
`;

export const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
`;

export const HeaderNav = styled.nav`
  margin-right: -6rem;

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
  cursor: pointer;

  & :first-child {
    margin-right: 30px;
    cursor: pointer;
  }

  & :nth-child(2) {
    margin-right: 15px;
  }
`;
