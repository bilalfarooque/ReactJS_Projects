import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 50%;
  font-size: 30px;
  text-align: center;
  font-weight: 600;
  color: #8a74ed;
`;

export default function Text({ level }) {
  const Content = ["Learn Javascript", "Learn ReactJS", "Learn NodeJS"];

  return (
    <>
      <Wrapper>{Content[level - 1]}</Wrapper>
    </>
  );
}
