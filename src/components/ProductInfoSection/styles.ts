import styled from "styled-components";

interface IColors {
  bgColor: string;
}

export const Container = styled.div`
  justify-content: space-between;
  width: 100%;
`;

export const OptionsColors = styled.div<IColors>`
  height: 40px;
  width: 40px;
  background-color: ${(props) => props.bgColor};
`;

export const ColorsList = styled.ul`
  display: flex;

  & li {
    margin-right: 20px;
  }
`;
