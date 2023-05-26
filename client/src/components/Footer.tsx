import { Link } from "react-router-dom";
// @ts-ignore
import { ReactComponent as Facebook } from "./assets/Facebook.svg";
// @ts-ignore
import { ReactComponent as Twitter } from "./assets/Twitter.svg";
// @ts-ignore
import { ReactComponent as LinkedIn } from "./assets/LinkedIn.svg";

export default function Footer() {

  return (
    <div className="grid col-start-3 grid-cols-10 col-span-full gap-5 items-center justify-center 
    border-t-[1px] border-[#D8C2C0] h-[72px] text-xs">
      <div className="flex col-span-full flex-row justify-between">
        <span>
          &copy; PawPals Adoption Center. All rights reserved.
        </span>
        <Link to="/privacy">
          Privacy policy
        </Link>
        <Link to="/privacy">
          Terms of Service
        </Link>
        <span className="flex flex-row items-center gap-1.5">
          <span className="material-symbols-rounded">mail</span>
          info@pawpals.com
        </span>
        <Social />
      </div>
    </div>
  )
}

const Social = () => (
  <div className="flex flex-row h-7 w-40 items-center justify-evenly rounded-full bg-pink-300">
    <Twitter
      style={{ height: "16px", width: "16px" }}
      fill="#362F2C"
    />
    <Facebook
      style={{ height: "16px", width: "16px" }}
      fill="#362F2C"
    />
    <LinkedIn
      style={{ height: "16px", width: "16px" }}
      fill="#362F2C"
    />
  </div>
)