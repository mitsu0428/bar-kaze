import Image from "next/image";
import React from "react";
import styled from "styled-components";

type Props = {
  isPc: boolean;
};

function InformationView({ isPc }: Props) {
  return (
    <Container isPc={isPc}>
      {isPc ? (
        <>
          <StyledImage
            src="/images/map/bar-kaze-map.png"
            alt="bar kaze までの道のり画像"
            width={isPc ? 450 : 250}
            height={isPc ? 450 : 250}
          />
          <TextWrap>
            <CustomText>OPEN 20:00 - 5:00</CustomText>
            <CustomText>TEL: 03-6416-3943</CustomText>
          </TextWrap>
        </>
      ) : (
        <>
          <StyledImage
            src="/images/map/bar-kaze-map.png"
            alt="bar kaze までの道のり画像"
            width={isPc ? 450 : 250}
            height={isPc ? 450 : 250}
          />
          <TextWrap>
            <CustomText>OPEN 20:00 - 5:00</CustomText>
            <CustomText>TEL: 03-6416-3943</CustomText>
          </TextWrap>
        </>
      )}
    </Container>
  );
}

export default InformationView;

const Container = styled.div<{ isPc: boolean }>`
  width: 100%;
  position: relative;
  display: flex;
  ${(props) => props.isPc && "flex-direction: row;"}
  ${(props) => !props.isPc && "flex-direction: column;"}
  ${(props) => props.isPc && "justify-content: space-around;"}
  ${(props) => !props.isPc && "justify-content: center;"}
  align-items: center;
  text-align: center;
  ${(props) => props.isPc && "height: 100vh;"}
  ${(props) => !props.isPc && "height: 50vh;"}
  ${(props) => props.isPc && "margin-top: 128px;"}
  ${(props) => !props.isPc && "margin-top: 64px;"}
`;

const CustomText = styled.p`
  font-size: 24px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(Image)`
  border-radius: 8px;
`;
