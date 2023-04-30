import React from "react";
import styled from "styled-components";

type Props = {
  isPc: boolean;
};

function SecondConceptView({ isPc }: Props) {
  return (
    <Container isPc={isPc}>
      <CustomText>外にいる時にふと感じる心地よい風</CustomText>
      <CustomText>生活していると、追い風が吹くこともあれば</CustomText>
      <CustomText>向かい風が吹くこともある</CustomText>
      <CustomText>でも絶対に心地良い風が吹く瞬間はある</CustomText>
      <CustomText>そんな瞬間がずっと続くように。</CustomText>
    </Container>
  );
}

export default SecondConceptView;

const Container = styled.div<{ isPc: boolean }>`
  width: 100%;
  ${(props) => props.isPc && "height: 100vh;"}
  ${(props) => !props.isPc && "height: 50vh;"}
  padding: 32px;
  position: relative;
`;

const CustomText = styled.p`
  font-size: 1rem;
  text-align: right;
  margin-bottom: 16px;
  max-width: 600px;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    text-align: right;
  }
`;
