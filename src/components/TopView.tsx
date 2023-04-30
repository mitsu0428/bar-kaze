import React from "react";
import Image from "next/image";
import styled from "styled-components";

type Props = {
  isPc: boolean;
};

function TopView({ isPc }: Props) {
  return (
    <Container>
      {isPc && (
        <CustomTextArea>
          <CustomSubTitle>bar</CustomSubTitle>
          <CustomSubTitle>kaze</CustomSubTitle>
          <CustomSubTitle>Maruyamacho</CustomSubTitle>
        </CustomTextArea>
      )}
      {!isPc && (
        <CustomTextAreaSp>
          <CustomSubTitleSp>bar</CustomSubTitleSp>
          <CustomSubTitleSp>kaze</CustomSubTitleSp>
          <CustomSubTitleSp>Maruyamacho</CustomSubTitleSp>
        </CustomTextAreaSp>
      )}
      {isPc && (
        <CustomImage
          src="/images/first_view.jpg"
          alt="top view"
          width={1440}
          height={900}
        />
      )}
      {!isPc && (
        <CustomImageSp
          src="/images/first_view.jpg"
          alt="top view"
          width={360}
          height={225}
        />
      )}
    </Container>
  );
}

export default TopView;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 8px;
`;

const CustomTextArea = styled.div`
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
`;

const CustomTextAreaSp = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CustomImage = styled(Image)`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

const CustomImageSp = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const CustomSubTitle = styled.h2`
  font-size: 100px;
  color: #f5f5f5;
`;

const CustomSubTitleSp = styled.h2`
  font-size: 36px;
  color: #f5f5f5;
`;
