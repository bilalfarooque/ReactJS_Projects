import { useState } from "react";
import Question from "./Components/Question";
import styled from "styled-components";

import "./App.css";

const Container = styled.div`
  width: 90%;
  height: 90vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

function App() {
  const [QuestionArr, setQuestionArr] = useState([
    {
      Question: "What Language is React Based on?",
      Answer: "JavaScript",
      status: false,
    },
    {
      Question: "What are the building blocks of React apps?",
      Answer: "Components",
      status: false,
    },
    {
      Question:
        "What's the name of the syntax we use of describe a UI a React?",
      Answer: "JSX",
      status: false,
    },
    {
      Question: "How to pass data from parent to child componenets?",
      Answer: "Props",
      status: false,
    },
    {
      Question: "How to give components memory?",
      Answer: "State",
      status: false,
    },
    {
      Question:
        "What do we call an input element that is completely synchronised with state?",
      Answer: "Input Field",
      status: false,
    },
  ]);

  return (
    <>
      <Container>
        {QuestionArr.map((ele, index) => (
          <Question
            number={index}
            QuestionArr={QuestionArr}
            setQuestionArr={setQuestionArr}
            ele={ele}
          />
        ))}
      </Container>
    </>
  );
}

export default App;
