import React from "react";
import * as S from "./styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const ButtonNotifications = () => {
  return (
    <S.Button>
      <FontAwesomeIcon icon={faBell} />
    </S.Button>
  );
};

export default ButtonNotifications;
