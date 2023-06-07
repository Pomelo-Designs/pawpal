import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ScrollToTop from "../hooks/ScrollTop";
import { Ease } from "../animations/Animations";
import { routes } from "./Routes";
import * as Component from "../components/Components";

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
        <Component.Navbar />
        {show && <Page data={data} />}
      </section >
    </>
  );
}

// 1440, 1280, 360

const Page = ({ data }: any) => {
  return (
    <div className="grid justify-items-stretch w-full top-0 compact:mt-[64px] medium:mt-0 expanded:mt-0 expanded:ml-[72px] z-0">
      <Ease key="page" y={10}>
        <div className="flex 
        expanded:ml-0 expanded:w-full expanded:mb-10
        medium:ml-[73px] medium:w-[calc(100%-73px)] medium:mb-10">
          <div className="grid 
          expanded:grid-cols-12
          medium:grid-cols-12
          compact:grid-cols-4
          gap-2 gap-y-12">
            {data.complete !== false && <Component.Hero data={data} />}
          </div>
        </div>
        <div className="flex justify-center medium:ml-[73px] medium:w-[calc(100%-146px)]">
          <div className="justify-self-center grid 
            expanded:w-[1360px] expanded:grid-cols-12 
            medium:w-[880px] medium:grid-cols-12 
            compact:grid-cols-4 
            gap-2 gap-y-12">

            <Outlet />
            <div className="medium:col-span-12 expanded:col-start-3 expanded:col-span-10">
              <Component.Footer />
            </div>
          </div>
        </div>
      </Ease>
    </div>
  )
};