import React from "react";
import styled from "styled-components";
import IconsInstagram from "@/components/ui/InstagramIcon";

const SnsShare = () => {
  return (
    <Container>
      <Title>bar kaze sns</Title>
      <IconsInstagram />
    </Container>
  );
};

export default SnsShare;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

const Title = styled.h1`
  margin: 1rem 0;
  line-height: 1.15;
  font-size: 2rem;
`;
