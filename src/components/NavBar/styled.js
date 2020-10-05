import styled from "styled-components";

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 9fr 4fr;
`;

export const DivLogo = styled.div`
  align-items: center;
  display: flex;
  button {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const Logo = styled.img`
  margin: 0 auto;
`;

export const DivNavigation = styled.div`
  align-items: center;
  display: flex;
`;

export const ListNavigation = styled.div`
  width: 100%;
  text-align: right;
  margin-right: 20px;

  button {
    margin-right: 20px;
  }
`;
