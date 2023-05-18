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
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;

  ${(props) => props.isPc && "height: 100vh;"}
  ${(props) => props.isPc && "margin-top: 128px;"}
  ${(props) => !props.isPc && "height: 50vh;"}
`;

const CustomText = styled.p`
  font-size: 32px;
  text-align: right;
  margin-right: 32px;
  padding: 8px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-right: 16px;
  }
`;
