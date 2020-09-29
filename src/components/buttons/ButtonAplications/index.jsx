import React from "react";
import * as S from "./styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";

const ButtonAplications = () => {
  return (
    <S.Button>
      <FontAwesomeIcon icon={faTh} />
    </S.Button>
  );
};

export default ButtonAplications;
