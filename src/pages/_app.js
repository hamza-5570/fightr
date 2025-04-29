import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "sonner";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Fightr</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Toaster
        position="bottom-right"
        richColors
        toastOptions={{
          style: {
            background: 'black',
          },
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
