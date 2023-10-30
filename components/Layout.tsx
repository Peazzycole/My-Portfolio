import { Sora } from "next/font/google";
import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";
import { ReactNode } from "react";

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
      <div className="flex-1 h-full w-full">
        <TopLeftImg />
        <Nav />
        <Header />
        <div className="h-screen overflow-scroll xsm:overflow-hidden relative bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
          <div className="vsm:mt-[100px] h-full vsm:mb-[80px] landscape:vsm:mb-[250px] md:mb-0 ">
            {children}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Layout;
