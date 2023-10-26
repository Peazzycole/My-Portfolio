import { Sora } from "next/font/google";
import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

type layoutProps = {
  children: ReactNode;
};

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
      <Analytics />
    </div>
  );
};

export default Layout;
