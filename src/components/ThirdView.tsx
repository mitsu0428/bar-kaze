import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

type Props = {
  isPc: boolean;
};

function ThirdView({ isPc }: Props) {
  return (
    <Container isPc={isPc}>
      <CustomSubTitle>Events</CustomSubTitle>
      {isPc && (
        <CustomImageContainer>
          <CustomImage
            src="/images/third_view.jpg"
            alt="third view"
            width={1440}
            height={900}
          />
        </CustomImageContainer>
      )}
      {!isPc && (
        <CustomImageContainerSp>
          <CustomImageSp
            src="/images/third_view.jpg"
            alt="third view"
            width={360}
            height={225}
          />
        </CustomImageContainerSp>
      )}

      {isPc && (
        <>
          <CustomText>当店では空間を活用して</CustomText>
          <CustomText>イベント等を行っていただくことも可能です。</CustomText>
          <CustomText>メールまたはDMにてご相談ください。</CustomText>
          <CustomCenterText>▶︎ bar.kaze.prj@gmail.com</CustomCenterText>
        </>
      )}
      {!isPc && (
        <>
          <CustomTextSp>当店では空間を活用して</CustomTextSp>
          <CustomTextSp>
            イベント等を行っていただくことも可能です。
          </CustomTextSp>
          <CustomTextSp>メールまたはDMにてご相談ください。</CustomTextSp>
          <CustomTextSp>▶︎ bar.kaze.prj@gmail.com</CustomTextSp>
        </>
      )}
    </Container>
  );
}

export default ThirdView;

const Container = styled.div<{ isPc: boolean }>`
  width: 100%;
  ${(props) => props.isPc && "height: 100vh;"}
  ${(props) => !props.isPc && "height: 50vh;"}
  position: relative;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const CustomImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CustomImageContainerSp = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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
  color: transparent;
  -webkit-text-stroke: 2px #f5f5f5;
`;

const CustomText = styled.p`
  position: relative;
  font-size: 44px;
  text-align: left;
`;

const CustomTextSp = styled.p`
  position: relative;
  font-size: 16px;
  text-align: center;
`;

const CustomCenterText = styled.p`
  position: relative;
  font-size: 44px;
  text-align: center;
`;
