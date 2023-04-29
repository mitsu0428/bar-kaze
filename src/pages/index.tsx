import PortfolioComponents from "@/components/PhotoGallery";
import SnsShare from "@/components/SnsShare";
import FooterComponents from "@/components/layout/FooterComponents";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Main>
        <Container>
          <Title>渋谷/円山町エリアにあるシックな雰囲気のbar</Title>
          <SubTitle>bar kaze</SubTitle>
        </Container>
        <Hr />
        <Container>
          <SubTitle>Concept</SubTitle>
          <Text>正統派ウイスキーから個性的なカクテルまで。</Text>
        </Container>
        <Container>
          <SnsShare />
        </Container>
        <Hr />
        <Container>
          <SubTitle>Photo Gallery</SubTitle>
          <PortfolioComponents />
        </Container>
        <Hr />
        <Container>
          <SubTitle>Information</SubTitle>
          <Text>TEL: 03-6416-3943</Text>
          <Text>OPEN: 20:00-5:00</Text>
          <Text>ACCESS: 渋谷駅(A2出口)から徒歩5分</Text>
          <Text>ADDRESS: 東京都渋谷区円山町1-3 SKビル 4F</Text>
        </Container>
        <FooterComponents />
      </Main>
    </>
  );
}

const Main = styled.main`
  color: #f5f5f5;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

const Title = styled.h1`
  margin: 1rem 0;
  line-height: 1.15;
  font-size: 2rem;
`;

const SubTitle = styled.h2`
  margin: 1rem 0;
`;

const Text = styled.p`
  margin: 0.5rem 0;
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
