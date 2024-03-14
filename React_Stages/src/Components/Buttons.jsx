import React from "react";
import styled from "styled-components";
import { Button } from "@nextui-org/react";

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
`;

export default function Buttons({level, setLevel}) {
  const previous = () => {
    if (level == 1) {
      setLevel(3);
    } else {
      setLevel((prev) => prev - 1);
    }
    console.log("prev==>", level);
  };

  const next = () => {
    if (level == 3) {
      setLevel(1);
    } else {
      setLevel((next) => next + 1);
    }
    console.log("next==>", level);
  };

  return (
    <>
      <Wrapper>
        <Button color="primary" variant="ghost" onClick={previous}>
          Previous
        </Button>
        <Button color="primary" variant="ghost" onClick={next}>
          Next
        </Button>
      </Wrapper>
    </>
  );
}
