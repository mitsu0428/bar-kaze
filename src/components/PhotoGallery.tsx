import React from "react";
import styled from "styled-components";
import Image from "next/image";

const PortfolioComponents = () => {
  return (
    <Container>
      <SubContainer>
        <ImageTag
          layout="fill"
          src="/images/IMG_6475.jpg"
          alt="kaji-logo"
        />
      </SubContainer>
      <SubContainer>
        <ImageTag
          layout="fill"
          src="/images/IMG_6477.jpg"
          alt="kaji-logo"
        />
      </SubContainer>
      <SubContainer>
        <ImageTag
          layout="fill"
          src="/images/IMG_6564.jpg"
          alt="kaji-logo"
        />
      </SubContainer>

      <SubContainer>
        <ImageTag
          layout="fill"
          src="/images/IMG_6565.jpg"
          alt="kaji-logo"
        />
      </SubContainer>
      <SubContainer>
        <ImageTag
          layout="fill"
          src="/images/IMG_6890.jpg"
          alt="kaji-logo"
        />
      </SubContainer>
      <SubContainer>
        <ImageTag
          layout="fill"
          src="/images/IMG_6891.jpg"
          alt="kaji-logo"
        />
      </SubContainer>
    </Container>
  );
};

export default PortfolioComponents;

const ImageTag = styled(Image)`
  position: relative !important;
  width: 100% !important;
  height: unset !important;
`;

const Container = styled.div`
  width: 100%;
  column-count: 3;
  @media (max-width: 1024px) {
    column-count: 2;
  }
  @media (max-width: 768px) {
    column-count: 1;
  }
  margin-top: 32px;
`;

const SubContainer = styled.div`
  break-inside: avoid;
  margin-top: 32px;
  margin-left: 16px;
  margin-right: 16px;
`;
