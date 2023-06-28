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
        <CustomSubTitle isPc={isPc}>bar</CustomSubTitle>
        <CustomSubTitle isPc={isPc}>kaze</CustomSubTitle>
        <CustomSubTitle isPc={isPc}>Maruyamacho</CustomSubTitle>
      </CustomTextArea>
      <CustomImage
        src="/images/first_view.jpg"
        alt="top view"
        width={isPc ? 1200 : 360}
        height={isPc ? 750 : 225}
        isPc={isPc}
      />
    </Container>
  );
}

export default TopView;

const Container = styled.div<{ isPc: boolean }>`
  width: 100%;
  height: ${(props) => (props.isPc ? "100vh" : "50vh")};
  display: flex;
  position: relative;
  padding: 32px;
`;

const CustomImage = styled(Image)<ImageProps & { isPc: boolean }>`
  position: absolute;
  ${(props) => (props.isPc ? "bottom: 0; right: 0;" : "top: 0; left: 0;")}
  z-index: -1;
  border-radius: 8px;
`;

const CustomTextArea = styled.div<{ isPc: boolean }>`
  position: absolute;
  top: ${(props) => (props.isPc ? "50%" : "25%")};
  left: ${(props) => (props.isPc ? "30%" : "50%")};
  transform: translate(-50%, -50%);
`;

const CustomSubTitle = styled.h2<{ isPc: boolean }>`
  font-size: ${(props) => (props.isPc ? "100px" : "36px")};
  font-weight: 700;
  color: #f5f5f5;
`;
