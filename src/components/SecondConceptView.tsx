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
  position: relative;
  ${(props) => props.isPc && "height: 100vh;"}
  ${(props) => props.isPc && "margin-top: 128px;"}
  ${(props) => !props.isPc && "height: 80vh;"}
  ${(props) => !props.isPc && "margin-top: 64px;"}
`;

const CustomText = styled.p`
  font-size: 32px;
  text-align: right;
  margin-right: 32px;
  padding: 16px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
