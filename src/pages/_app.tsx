import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "ress";
import GoogleTagManager, {
  GoogleTagManagerId,
} from "@/components/libs/GoogleTagManager";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleTagManager googleTagManagerId="GTM-TFH7PX4" />
      <Component {...pageProps} />
    </>
  );
}
