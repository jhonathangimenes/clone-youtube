import styled from "styled-components";

export const ListLinks = styled.ul`
  list-style-type: none;
  padding: 0 0 0 0;
  margin: 0;
  width: 240px;
  border: solid 1px #d2dae2;
  z-index: 9999;
  position: absolute;
  top: 0;
  background-color: #ffff;
  height: 100%;
  overflow: hidden;
  overflow-x: hidden;
  &:hover {
    overflow: scroll;
    overflow-x: hidden;
  }
`;

export const Link = styled.li`
  color: #535c68;
  padding: 10px 0 10px 0;
  align-items: center;
  display: flex;
  cursor: pointer;

  svg {
    padding-right: 20px;
    padding-left: 20px;
    font-size: 20px;
  }

  &:hover {
    background-color: #c7ecee;
  }
`;

export const TitleGroup = styled.li`
  font-weight: bold;
  margin-left: 20px;
  color: #535c68;
  padding: 10px 0 10px 0;
`;

export const AvatarRegistration = styled.img`
  border-radius: 50%;
  height: 20px;
  padding-right: 20px;
  padding-left: 20px;
`;

export const SplitLink = styled.li`
  border-bottom: solid 1px #d2dae2;
`;

export const DivLogo = styled.div`
  align-items: center;
  display: flex;
`;

export const Logo = styled.img``;

export const LinkLogo = styled.li`
  color: #535c68;
  align-items: center;
  display: flex;
  height: 60px;
  cursor: pointer;

  svg {
    padding-right: 10px;
    padding-left: 20px;
    font-size: 20px;
  }
`;
