import type { AppProps } from "next/app";
import "../styles/global.css";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";

const DynamicLayout = dynamic(() => import("@/components/Layout"), { ssr: false });
const DynamicTransition = dynamic(() => import("@/components/Transition"), { ssr: false });

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <DynamicLayout>
      <AnimatePresence mode="wait" initial={false}>
        <div key={router.route} className="h-full">
          <DynamicTransition />
          <Component {...pageProps} />
          <Analytics />
        </div>
      </AnimatePresence>
    </DynamicLayout>
  );
}
