import styled from "styled-components";

export const Button = styled.button`
  background-color: #fff;
  border: none;
  font-size: 20px;
  border-radius: 50%;
  height: 45px;
  width: 45px;
  color: #535c68;
  cursor: pointer;

  &:focus {
    outline: none;
    background-color: #c7ecee;
  }
`;
