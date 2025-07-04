import "@/global/styles/base.css";
import { ModalsRoot } from "@/modules/modal/components/ModalsRoot";
import { ToastsRoot } from "@/modules/toast/components/ToastsRoot";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ModalsRoot />
      <ToastsRoot />
    </>
  );
}
