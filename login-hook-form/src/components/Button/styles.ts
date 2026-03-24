import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  background-color: #7f28b5;
  color: #fff;

  border: 1px solid #7f28b5;
  border-radius: 8px;

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
