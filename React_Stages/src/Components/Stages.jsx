import { Chip } from "@nextui-org/react";
import { Container } from "postcss";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default function Stages({ level }) {
  const stages = [1, 2, 3];
  return (
    <>
      <Wrapper>
        {stages.map((ele, index) => (
          <Chip
            variant="border"
            style={{
              backgroundColor: ele === level ? "#6e45f2" : "grey",
              color: ele === level ? "white" : "black",
            }}
          >
            {ele}
          </Chip>
        ))}
      </Wrapper>
    </>
  );
}
