import styled from "styled-components";

interface IColors {
  bgColor: string;
}

export const Container = styled.div`
  justify-content: space-between;
  width: 50%;
  color: ${(props) => props.theme.colors.fontColor};
`;

export const OptionsColors = styled.div<IColors>`
  height: 40px;
  width: 40px;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor};
`;

export const ColorsList = styled.ul`
  display: flex;
  margin-bottom: 25px;

  & li {
    margin-right: 20px;
  }
`;

export const TitleProduct = styled.h2`
  margin-bottom: 5px;
`;

export const PriceSpan = styled.span`
  display: block;
  margin-bottom: 25px;
`;

export const TextParagraph = styled.p`
  color: ${(props) => props.theme.colors.fontColorLight};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 28px;
  width: 26.5rem;
`;

export const ListSize = styled.ul`
  display: flex;

  & li {
    margin-right: 40px;
  }
`;
