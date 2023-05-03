/* eslint-disable react/react-in-jsx-scope */
import Head from "next/head";

interface MetaData {
  pageTitle?: string;
  pageDescription?: string;
  pagePath?: string;
  pageImg?: string;
  pageImgWidth?: number;
  pageImgHeight?: number;
}

const SeoSettings = ({
  pageTitle,
  pageDescription,
  pagePath,
  pageImg,
  pageImgWidth,
  pageImgHeight,
}: Partial<MetaData>) => {
  const defaultTitle = "bar kaze -円山町 | bar kaze maruyamacho";
  const defaultDescription =
    "【渋谷駅から徒歩5分】円山町エリアにあるbar kazeの公式サイト。正統派ウイスキーから個性的なカクテルまでその時の気分に応じたお酒を楽しめます。";

  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
  const description = pageDescription ? pageDescription : defaultDescription;
  const url = pagePath;
  const imgUrl = pageImg;
  const imgWidth = pageImgWidth ? pageImgWidth : 1280;
  const imgHeight = pageImgHeight ? pageImgHeight : 640;

  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,user-scalable=no"
      />
      <meta
        name="description"
        content={description}
      />
      <meta
        property="og:url"
        content={url}
      />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="og:site_name"
        content={title}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:image"
        content={imgUrl}
      />
      <meta
        property="og:image:width"
        content={String(imgWidth)}
      />
      <meta
        property="og:image:height"
        content={String(imgHeight)}
      />
      <link
        rel="canonical"
        href={url}
      />
    </Head>
  );
};

export default SeoSettings;
