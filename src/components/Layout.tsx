import { FC, PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout: FC<PropsWithChildren> = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 flex-col bg-gray-50 px-5">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
