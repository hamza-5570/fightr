import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "sonner";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Toaster position="bottom-right" richColors />
      <Component {...pageProps} />
    </>
  );
}
