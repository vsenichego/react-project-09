import React, { useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop";
import Button from "./components/Button";
import Title from "./components/Title";
import styled, {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
:root {
  --primary: #0000ff;
  --secondary: #5efc8d;
  --light-gray: #cccccc;
}

body {
  font-family: Helvetica;
}

h3 {
  margin: 0;
  padding: 0;
}
`;

const WrapperDiv = styled.div`
  padding-top: 5px;
  width: 100vw;
  margin: 0 auto;
`;

function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
        <WrapperDiv>
        <Shop />
        <Button onClick={() => setLogin(false)}>
          Выйти
        </Button>
        </WrapperDiv>
      </>
    );
  } else {
    return (
      <>
      <WrapperDiv>
        <Title>Нужно залогиниться!</Title>
        <Button onClick={() => setLogin(true)}>
          Войти
        </Button>
        </WrapperDiv>
      </>
    );
  }
}

render(<><Global /><App /></>, document.querySelector("#root"));