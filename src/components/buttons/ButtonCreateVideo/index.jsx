import React from "react";
import * as S from "./styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

const ButtonCreateVideo = () => {
  return (
    <S.Button>
      <FontAwesomeIcon icon={faVideo} />
    </S.Button>
  );
};

export default ButtonCreateVideo;
