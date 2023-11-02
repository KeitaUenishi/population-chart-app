import "@/styles/globals.css";

import { RecoilEnv, RecoilRoot } from "recoil";

import type { AppProps } from "next/app";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
