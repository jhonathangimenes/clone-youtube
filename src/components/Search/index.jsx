import React from "react";
import * as S from "./styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <S.DivSearch>
      <S.DivInput>
        <S.Input />
        <S.Button>
          <FontAwesomeIcon icon={faSearch} />
        </S.Button>
      </S.DivInput>
    </S.DivSearch>
  );
};

export default Search;
