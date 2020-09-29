import React from "react";
import * as S from "./styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const ButtonMenu = () => {
  return (
    <S.Button>
      <FontAwesomeIcon icon={faBars} />
    </S.Button>
  );
};

export default ButtonMenu;
