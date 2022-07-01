import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #d7f1f8;
`;

export const SectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 1200px;
`;

export const SectionProduct = styled.div`
  width: 50%;
`;

export const TitleInfo = styled.h3`
  font-weight: 500;

  & img {
    margin-right: 28px;
  }
`;
