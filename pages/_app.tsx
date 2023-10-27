import type { AppProps } from "next/app";
import "../styles/global.css";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";

const DynamicLayout = dynamic(() => import("@/components/Layout"), { ssr: false });
const DynamicTransition = dynamic(() => import("@/components/Transition"), { ssr: false });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DynamicLayout>
      <AnimatePresence mode="wait">
        <DynamicTransition />
        <Component {...pageProps} />
        <Analytics />
      </AnimatePresence>
    </DynamicLayout>
  );
}
