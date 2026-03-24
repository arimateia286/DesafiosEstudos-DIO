import styled from "styled-components";

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  color: #7f28b5;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 42px;
  color: #fff;

  border: 1px solid #7f28b5;
  border-radius: 8px;
  overflow: hidden;
  padding: 0 10px;

  & input {
    width: 100%;
    height: 42px;
    border-radius: 8px;
    background-color: transparent;
    border: 0;
    outline: none;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
`;
