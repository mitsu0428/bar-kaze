import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { IoIosInformationCircle } from "react-icons/io";

export const Components = () => {
  const closeInformationUrl =
    "https://www.instagram.com/p/CwzoBMCSGBm/?utm_source=ig_web_copy_link";
  const handleClickToCloseInformation = () => {
    window.open(closeInformationUrl, "_blank");
  };

  return (
    <CustomWrap onClick={handleClickToCloseInformation}>
      <IoIosInformationCircle size={16} />
      <span>閉店のお知らせ</span>
    </CustomWrap>
  );
};

const CustomWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 8px;
  padding: 8px;
  position: absolute;
  z-index: 1;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-right: 16px;
  }
`;
