import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgroundMain};
  color: ${(props) => props.theme.colors.fontColor};
`;

export const SectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  height: 100vh;
  margin-top: 55px;
`;

export const SectionProduct = styled.div`
  width: 70%;
`;

export const TitleInfo = styled.h3`
  font-weight: 500;

  & img {
    margin-right: 28px;
  }
`;
