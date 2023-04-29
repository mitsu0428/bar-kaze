import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const PortfolioComponents = () => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleNextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const images = [
    {
      src: "/images/IMG_6475.jpg",
      alt: "bar-kaze-maruyamacho",
      width: 900,
      height: 900,
    },
    {
      src: "/images/IMG_6477.jpg",
      alt: "bar-kaze-maruyamacho",
      width: 900,
      height: 900,
    },
    {
      src: "/images/IMG_6891.jpg",
      alt: "bar-kaze-maruyamacho",
      width: 900,
      height: 900,
    },
    {
      src: "/images/IMG_6890.jpg",
      alt: "bar-kaze-maruyamacho",
      width: 900,
      height: 900,
    },
    {
      src: "/images/IMG_6565.jpg",
      alt: "bar-kaze-maruyamacho",
      width: 900,
      height: 900,
    },
    {
      src: "/images/IMG_6564.jpg",
      alt: "bar-kaze-maruyamacho",
      width: 900,
      height: 900,
    },
  ];

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      {isMobile ? (
        <SlideShowContainer>
          <ImageTag
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            width={images[currentImageIndex].width}
            height={images[currentImageIndex].height}
          />
          <Button onClick={handlePrevImage}>{"<"}</Button>
          <Button onClick={handleNextImage}>{">"}</Button>
        </SlideShowContainer>
      ) : (
        images.map((image, index) => (
          <SubContainer key={index}>
            <ImageTag
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
            />
          </SubContainer>
        ))
      )}
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

const SlideShowContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;

const Button = styled.button`
  position: absolute;
  border: none;
  padding: 8px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  &:first-of-type {
    left: 0;
    border-radius: 0 8px 8px 0;
  }
  &:last-of-type {
    right: 0;
    border-radius: 8px 0 0 8px;
  }
`;
