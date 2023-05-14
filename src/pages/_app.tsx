import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "ress";
import GoogleTagManager, {
  GoogleTagManagerId,
} from "@/components/libs/GoogleTagManager";
import { ToastProvider } from "@/components/hooks/useToast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <GoogleTagManager googleTagManagerId="GTM-TFH7PX4" />
      <Component {...pageProps} />
    </ToastProvider>
  );
}
