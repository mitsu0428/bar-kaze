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
            width={1200}
            height={750}
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
          <CustomCenterText>
            <Link href="mailto: bar.kaze.prj@gmail.com">
              ▶︎ bar.kaze.prj@gmail.com
            </Link>
          </CustomCenterText>
        </>
      )}
      {!isPc && (
        <>
          <CustomTextSp>当店では空間を活用して</CustomTextSp>
          <CustomTextSp>
            イベント等を行っていただくことも可能です。
          </CustomTextSp>
          <CustomTextSp>メールまたはDMにてご相談ください。</CustomTextSp>
          <CustomTextSp>
            <Link href="mailto: bar.kaze.prj@gmail.com">
              ▶︎ bar.kaze.prj@gmail.com
            </Link>
          </CustomTextSp>
        </>
      )}
    </Container>
  );
}

export default ThirdView;

const Container = styled.div<{ isPc: boolean }>`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  position: relative;
  ${(props) => props.isPc && "height: 100vh;"}
  ${(props) => !props.isPc && "height: 50vh;"}
  ${(props) => props.isPc && "margin-top: 128px;"}
  ${(props) => !props.isPc && "margin-top: 64px;"}
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
  margin-left: 32px;

  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const CustomText = styled.p`
  position: relative;
  font-size: 36px;
  text-align: left;
  margin-left: 64px;
  padding: 16px;
`;

const CustomCenterText = styled.p`
  position: relative;
  font-size: 36px;
  text-align: center;
  margin-top: 32px;
`;

const CustomTextSp = styled.p`
  position: relative;
  font-size: 16px;
  text-align: center;
  padding: 16px;
`;

const Hr = styled.hr`
  margin-top: 32px;
  border-width: 0 0 1px;
  border-image: linear-gradient(
      90deg,
      hsla(0, 0%, 35%, 0),
      hsla(0, 0%, 35%, 0.5) 50%,
      hsla(0, 0%, 35%, 0) 100%
    )
    0 0 100%;
  border-style: solid;
`;
