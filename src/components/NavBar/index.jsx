import React from "react";
import * as S from "./styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/img/logo.png";
import Avatar from "../Avatar";
import ButtonCreateVideo from "../buttons/ButtonCreateVideo";
import ButtonAplications from "../buttons/ButtonAplications";
import ButtonNotifications from "../buttons/ButtonNotifications";
import ButtonMenu from "../buttons/ButtonMenu";

import Search from "../Search";

const NavBar = () => {
  return (
    <S.Nav>
      <ButtonMenu />
      <S.DivLogo>
        <S.Logo src={Logo} alt="logo" height="55" />
      </S.DivLogo>
      <Search />
      <S.DivNavigation>
        <S.ListNavigation>
          <ButtonCreateVideo />
          <ButtonAplications />
          <ButtonNotifications />
          <Avatar />
        </S.ListNavigation>
      </S.DivNavigation>
    </S.Nav>
  );
};

export default NavBar;
