import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: ${({ theme }) => theme.colors.actionButtons};
  padding: 18px 58px;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.fontColorButton};
  border-radius: 10px;
  border: none;

  :hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.actionButtons + "aa"};
  }
`;
