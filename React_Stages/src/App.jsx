import { useState } from "react";

import "./App.css";
import Stages from "./Components/Stages";
import Text from "./Components/Text";
import Buttons from "./Components/Buttons";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  color: #000;
`;

const Wrapper = styled.div`
  width: 75%;
  height: 80vh;
  background-color: aliceblue;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

function App() {
  const [level, setLevel] = useState(1);

  return (
    <>
      <Container>
        <Wrapper>
          <Stages level={level} />
          <Text level={level} />
          <Buttons level={level} setLevel={setLevel} />
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
