import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Expanded/Navbar";
import CompactNavbar from "../components/Navbar/Compact/CompactNavbar";
import Footer from "../components/Footer";
import ScrollToTop from "../hooks/ScrollTop";
import { Ease } from "../components/Animations/Ease";
import { Hero } from "../components/Hero";
import { useEffect, useState } from "react";
import { routes } from "./Routes";
import { Helmet } from "react-helmet";

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
  const path = location.pathname;
  const [show, setShow] = useState(false);
  const [data, setData] = useState<DataProps[] | any>([]);

  const getData = () => routes.map((item: any) => {
    if (item.route === path) {
      setData(item as unknown as DataProps[]);
    } else item.subnav.map((subitem: any) => {
      if (subitem.route === path) {
        setData(subitem as unknown as DataProps[]);
      } else if (subitem.subnav) {
        subitem.subnav.map((subsubitem: any) => {
          if (subsubitem.route === path) setData(subsubitem as unknown as DataProps[]);
        })
      }
    })
  });

  useEffect(() => {
    getData();
    setShow(false);
    setTimeout(() => setShow(true), 100);
  }, [location]);

  const transformPathToTitle = () => {
    if (path === "/") {
      return "PawPal";
    } else {
      // Removes all but last sub-path
      const str = path.slice(path.lastIndexOf("/") + 1, path.length);
      const capitalizeString = str.charAt(0).toUpperCase() + str.slice(1);

      const handleDash = capitalizeString.replace("-", " ");

      const text = ` – PawPal`;

      if (capitalizeString.includes("-")) return handleDash + text;
      else return capitalizeString + text;
    }
  }

  return (
    <>
      <Helmet>
        <title>{transformPathToTitle()}</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <ScrollToTop />
      <section className="w-full flex compact:flex-col medium:flex-col expanded:flex-row">
        <Navbar />
        <CompactNavbar />
        {show && <Page data={data} />}
      </section >
    </>
  );
}

const Page = ({ data }: any) => {
  return (
    <div className="grid justify-items-stretch w-full top-0 compact:mt-[64px] medium:mt-[64px] expanded:ml-[72px] z-0">
      <Ease key="page" y={10}>
        <div className="justify-self-center grid w-[1130px] grid-cols-12 gap-2 gap-y-12">
          {data.complete !== false && <Hero data={data} />}
          <Outlet />
          <Footer />
        </div>
      </Ease>
    </div>
  )
};