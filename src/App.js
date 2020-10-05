import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import * as S from "./AppStyled";

function App() {
  return (
    <div>
      <NavBar />
      <S.Content>
        <Menu />
        <div>teste</div>
      </S.Content>
    </div>
  );
}

export default App;
