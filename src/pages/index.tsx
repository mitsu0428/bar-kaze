import React from "react";
import styled from "styled-components";
import FooterView from "@/components/layout/FooterView";
import InformationView from "@/components/InformationView";
import InstagramView from "@/components/InstagramView";
import ProfileView from "@/components/ProfileView";
import SecondConceptView from "@/components/SecondConceptView";
import SecondView from "@/components/SecondView";
import ThirdView from "@/components/ThirdView";
import TopView from "@/components/TopView";
import SeoSettings from "@/components/libs/SeoSettings";
import BarKazeNews from "@/components/BarKazeNews";

export default function Home() {
  const [isPc, setIsPc] = React.useState(false);

  React.useEffect(() => {
    const isPc = window.matchMedia("(min-width: 769px)").matches;
    setIsPc(isPc);
  }, []);

  return (
    <Main>
      <SeoSettings
        pageTitle={"bar kaze -円山町 | bar kaze maruyamacho"}
        pageDescription={
          "【渋谷駅から徒歩5分】円山町エリアにある「bar kaze -円山町」の公式サイト。正統派ウイスキーから個性的なカクテルまでその時の気分に応じたお酒を楽しめます。"
        }
        pagePath={"https://bar-kaze.net"}
        pageImg={"https://bar-kaze.net"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
      <TopView isPc={isPc} />
      <BarKazeNews isPc={isPc} />
      <SecondView isPc={isPc} />
      <SecondConceptView isPc={isPc} />
      <ThirdView isPc={isPc} />
      <InstagramView isPc={isPc} />
      <ProfileView isPc={isPc} />
      <InformationView isPc={isPc} />
      <FooterView isPc={isPc} />
    </Main>
  );
}

const Main = styled.main`
  color: #f5f5f5;
  padding: 8px;
`;
