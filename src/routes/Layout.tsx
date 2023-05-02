import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Expanded/Navbar";
import CompactNavbar from "../components/Navbar/Compact/CompactNavbar";
import Footer from "../components/Footer";
import ScrollToTop from "../hooks/ScrollTop";
import { Ease } from "../components/Animations/Ease";
import { Hero } from "../components/Hero";
import { useEffect, useState } from "react";
import { routes } from "./Routes";

interface DataProps {
  route: string;
  heading: string;
  description: string;
  button: {
    label: string;
    path: string;
  }
};

export default function Layout() {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [data, setData] = useState<DataProps[] | any>([]);

  useEffect(() => {
    const data = routes.find(element => element.route === location.pathname)!;
    setData(data as unknown as DataProps[]);
    setShow(false);
    setTimeout(() => setShow(true), 100);
  }, [location])

  return (
    <>
      <ScrollToTop />
      <section className="w-full flex compact:flex-col medium:flex-col expanded:flex-row">
        <Navbar />
        <CompactNavbar />
        <div className="w-full flex flex-col top-0 compact:mt-[64px] medium:mt-[64px] expanded:ml-[72px] z-0">
          {show &&
            <>
              <Ease key="page" y={10}>
                <div className="flex flex-col">
                  <Hero
                    heading={data.heading}
                    description={data.description}
                    buttonLink={data.button.path}
                    buttonLabel={data.button.label}
                  />
                  <div className="self-center w-[936px]">
                    <Outlet />
                  </div>
                </div>
              </Ease>
              <div className="w-full grow min-h-[100px]" />
              <Footer />
            </>
          }
        </div>
      </section>
    </>
  );
}