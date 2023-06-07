import * as Component from "../components/Components";
// assets
import CompactAdopt from "../assets/home-page/compact/adopt.svg";
import MediumAdopt from "../assets/home-page/medium/adopt.svg";
import ExpandedAdopt from "../assets/home-page/expanded/adopt.svg";

import CompactFoster from "../assets/home-page/compact/foster.svg";
import MediumFoster from "../assets/home-page/medium/foster.svg";
import ExpandedFoster from "../assets/home-page/expanded/foster.svg";

import CompactHire from "../assets/home-page/compact/hire.svg";
import MediumHire from "../assets/home-page/medium/hire.svg";
import ExpandedHire from "../assets/home-page/expanded/hire.svg";

// import Foster from "../assets/home-page/foster.svg";
// import Hire from "../assets/home-page/hire.svg";
import News1 from "../assets/home-page/news1.png";
import News2 from "../assets/home-page/news2.png";
import News3 from "../assets/home-page/news3.png";
import News4 from "../assets/home-page/news4.png";
import { useState } from "react";

export default function Home() {

  const useImage = (compactImg: any, mediumImg: any, expandedImg: any) => {
    // const [compact, setCompact] = useState(false);
    // const [medium, setMedium] = useState(false);
    // const [expanded, setExpanded] = useState(false);

    // if (window.innerWidth > 1440 || window.innerWidth == 1440) {
    //   setExpanded(true);
    //   setMedium(false);
    //   setCompact(false);
    // } else if ((window.innerWidth < 1440 && window.innerWidth > 1280) || window.innerWidth == 1280) {
    //   setMedium(true);
    //   setExpanded(false);
    //   setCompact(false);
    // } else if (window.innerWidth < 360 || window.innerWidth == 360) {
    //   setCompact(true);
    //   setExpanded(false);
    //   setMedium(false);
    // }

    // if (((window.innerWidth < 1440 && window.innerWidth > 1280) || window.innerWidth == 1280)) return mediumImg;

    switch (true) {
      case (window.innerWidth > 1440 || window.innerWidth == 1440): return expandedImg;
      case ((window.innerWidth < 1440 && window.innerWidth > 1280) || window.innerWidth == 1280): return mediumImg;
      case (window.innerWidth < 360 || window.innerWidth == 360): return compactImg;
      default: return mediumImg;
    }
  }

  return (
    <>
      <Component.Section cols="medium:grid-cols-12 expanded:grid-cols-11" start="expanded:col-start-2">
        {/* <div className="col-span-full grid grid-cols-11"> */}
        <Component.Heading label="Adoption&Foster" cols="medium:col-span-5 expanded:col-span-4" />
        <p className="medium:col-span-5 expanded:col-span-4 text-sm">
          At our Adoption Center, we offer a wide range of adoption options to suit every lifestyle and preference. Whether you're looking for a furry friend to join your family or a companion for your existing pet, we have a variety of animals to choose from, including cats, dogs, rabbits, and more!
        </p>
        {/* </div> */}
      </Component.Section>
      <Component.Section cols="medium:grid-cols-12 expanded:grid-cols-11" start="expanded:col-start-2">
        <Component.NavCard
          title={"Adopt"}
          description="give a permanent home to an animal in need"
          image={useImage(CompactAdopt, MediumAdopt, ExpandedAdopt)}
          // classname="h-[312px]"
          cols="medium:col-span-4 expanded:col-span-3"
        />
        <div className="medium:hidden expanded:flex" />
        <Component.NavCard
          title={"Foster"}
          description="provide a temporary home to an animal in need"
          image={useImage(CompactFoster, MediumFoster, ExpandedFoster)}
          // classname="h-[312px]"
          cols="medium:col-span-4 expanded:col-span-3"
        />
        <div className="medium:hidden expanded:flex" />
        <Component.NavCard
          title={"Hire"}
          description="provide a barn/farm for a cat pest control expert"
          image={useImage(CompactHire, MediumHire, ExpandedHire)}
          // classname="h-[312px]"
          cols="medium:col-span-4 expanded:col-span-3"
        />
      </Component.Section>
      <Component.Section cols="medium:grid-cols-12 expanded:grid-cols-11" start="expanded:col-start-2">
        <Component.Heading label="Latest news" />
        <Component.Card
          image={News1}
          title={"Adopted Pitbull Lulu Overcomes Stereotypes"}
          description={"Our beloved senior Pitbull Lulu finally found a family! "}
          cols="medium:col-span-6 expanded:col-span-5"
        />
        <Component.Card
          image={News2}
          title={"Foster Kitten Siblings Bean and Dove Rejoice as Getting Adopted Together"}
          description={"Two adorable kitten siblings brought to us after being found alone on the streets and they both finally found a Forever Home."}
          cols="medium:col-span-6 expanded:col-span-5"
        />
        <Component.Card
          image={News3}
          title={"Resilient Parrot Momo Finds Home: From Abuse to Love and Happiness"}
          description={"Momo, the Parrot, Finds Love and Healing in His New Forever Home"}
          cols="medium:col-span-6 expanded:col-span-5"
        />
        <Component.Card
          image={News4}
          title={"Hugo and Denji Find Forever Home: A Heartwarming Adoption Story"}
          description={"When they were brought to the Adoption Center, the staff immediately noticed their special bond and knew they needed to be adopted together."}
          cols="medium:col-span-6 expanded:col-span-5"
        />
      </Component.Section>
      <Component.Section cols="medium:grid-cols-12 expanded:grid-cols-11" start="expanded:col-start-2">
        <Component.Heading label="Resources" />
        <Component.Card
          title={"Claws out!"}
          description={`Reasons Why Your Cat Seems Angry All the Time...`}
          cols="medium:col-span-4 expanded:col-span-3"
        />
        <Component.Card
          title={"How much space do rats need?"}
          description={`A Comprehensive Guide to a Perfect Rodent Home`}
          cols="medium:col-span-4 expanded:col-span-3"
        />
        <Component.Card
          title={"Best toys for a puppy with chewy taste"}
          description={`Your Puppy Keeps Chewing on Everything in Their Sight?`}
          cols="medium:col-span-4 expanded:col-span-3"
        />
      </Component.Section>
    </>
  )
}