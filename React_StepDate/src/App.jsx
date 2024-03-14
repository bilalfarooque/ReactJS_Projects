import { useState } from "react";

import "./App.css";
import styled from "styled-components";
import Dates from "./Components/Date";
import Stepper from "./Components/Stepper";
import Counter from "./Components/Counter";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  background-color: aliceblue;
  width: 60%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 5px;
  background-color: orange;
  color: #040404;
  font-size: 14px;
  font-weight: 600;
`;

const Title = styled.h1`
  text-align: center;
  color: #76490f;
  margin: 0px 0 50px;
`;

function App() {
  const [ text ] = useTypewriter({
    words: ["Welcome to the date picker!", "Let's make some  magic happen!"],
    typeSpeed: 120,
    deleteSpeed: 30,
    loop: 5,
  });

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const ResetHandler = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <>
      <Container>
        <Wrapper>
          <Title>
            <span>{text}</span>
            <span style={{ color: "red" }}>
              <Cursor />
            </span>
          </Title>
          <Button onClick={ResetHandler}>Reset</Button>
          <Stepper step={step} setStep={setStep} />
          <Counter step={step} count={count} setCount={setCount} />
          <Dates count={count} />
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
