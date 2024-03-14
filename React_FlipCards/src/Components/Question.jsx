import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 25%;
  height: 250px;
  margin: 1% 1%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1%;
`;
const Text = styled.p`
  font-size: 18px;
`;

const Questions = ({ ele, number, setQuestionArr, QuestionArr }) => {
  const checkAnswer = (questionstatus, number) => {
    ele.status = !questionstatus;
    const Questions = [...QuestionArr];
    Questions[number].status = !questionstatus;
    setQuestionArr(Questions);
  };
  return (
    <Card
      style={{
        backgroundColor: ele.status ? "red" : "#f6f6f6",
        color: ele.status ? "#ffffff" : "#000",
      }}
      onClick={() => checkAnswer(ele.status, number)}
    >
      <Text>{ele.status ? ele.Answer : ele.Question}</Text>
    </Card>
  );
};

export default Questions;
