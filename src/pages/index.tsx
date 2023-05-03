import React from "react";
import styled from "styled-components";
import FooterView from "@/components/FooterView";
import InformationView from "@/components/InformationView";
import InstagramView from "@/components/InstagramView";
import ProfileView from "@/components/ProfileView";
import SecondConceptView from "@/components/SecondConceptView";
import SecondView from "@/components/SecondView";
import ThirdView from "@/components/ThirdView";
import TopView from "@/components/TopView";
import SeoSettings from "@/components/libs/SeoSettings";

export default function Home() {
  const [isPc, setIsPc] = React.useState(false);

  React.useEffect(() => {
    const isPc = window.matchMedia("(min-width: 769px)").matches;
    setIsPc(isPc);
  }, []);

  return (
    <Main>
      <SeoSettings />
      <TopView isPc={isPc} />
      <SecondView isPc={isPc} />
      <SecondConceptView isPc={isPc} />
      <ThirdView isPc={isPc} />
      <InstagramView isPc={isPc} />
      <InformationView isPc={isPc} />
      <ProfileView isPc={isPc} />
      <FooterView isPc={isPc} />
    </Main>
  );
}

const Main = styled.main`
  color: #f5f5f5;
`;
