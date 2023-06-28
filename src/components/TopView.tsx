import React from "react";
import Image, { ImageProps } from "next/image";
import styled from "styled-components";

type Props = {
  isPc: boolean;
};

function TopView({ isPc }: Props) {
  return (
    <Container isPc={isPc}>
      <CustomTextArea isPc={isPc}>
        <CustomSubTitle isPc={isPc}>bar kaze</CustomSubTitle>
        <CustomSubTitle isPc={isPc}>Maruyamacho</CustomSubTitle>
      </CustomTextArea>
      <SlideShow>
        {/* 画像を追加 */}
        <CustomImage
          src="/images/first_view.jpg"
          alt="top view"
          width={isPc ? 1200 : 360}
          height={isPc ? 750 : 225}
          isPc={isPc}
          isFirst // 最初の画像を示すフラグを追加
        />
        <CustomImage
          src="/images/second_view.jpg"
          alt="top view"
          width={isPc ? 1200 : 360}
          height={isPc ? 750 : 225}
          isPc={isPc}
        />
        <CustomImage
          src="/images/third_view.jpg"
          alt="top view"
          width={isPc ? 1200 : 360}
          height={isPc ? 750 : 225}
          isPc={isPc}
        />
      </SlideShow>
    </Container>
  );
}

export default TopView;

const Container = styled.div<{ isPc: boolean }>`
  width: 100%;
  height: ${(props) => (props.isPc ? "100vh" : "50vh")};
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 16px;
  overflow: hidden; /* スライドショー領域をはみ出た部分を隠す */
`;

const SlideShow = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const CustomImage = styled(Image)<
  ImageProps & { isPc: boolean; isFirst?: boolean }
>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  border-radius: 16px;
  opacity: 0;
  animation: ${(props) => (props.isFirst ? "slideShowFirst" : "slideShow")} 20s
    infinite;

  /* 最初の画像のアニメーション */
  @keyframes slideShowFirst {
    0% {
      opacity: 0;
      transform: scale(1);
    }
    25% {
      opacity: 1;
      transform: scale(1.05);
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
    75% {
      opacity: 1;
      transform: scale(1.05);
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }

  /* 2番目以降の画像のアニメーション */
  @keyframes slideShow {
    0% {
      opacity: 0;
      transform: scale(1);
    }
    25% {
      opacity: 0;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
    75% {
      opacity: 0;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }
`;

const CustomTextArea = styled.div<{ isPc: boolean }>`
  position: absolute;
  top: 128px;
  left: 32px;
  z-index: 1;
  width: ${(props) => (props.isPc ? "100%" : "100%")};
  height: ${(props) => (props.isPc ? "100%" : "100%")};
`;

const CustomSubTitle = styled.h2<{ isPc: boolean }>`
  font-size: ${(props) => (props.isPc ? "100px" : "36px")};
  font-weight: 700;
  color: #f5f5f5;
`;
