import { useNavigate } from "react-router-dom";

export default function ArrowCard({ title, path, direction }: any) {
  const navigate = useNavigate();

  return (
    <div className="w-full h-24 
      flex flex-col justify-center 
      rounded-xl px-6 bg-pink-300
      cursor-pointer"
      onClick={() => navigate(path)}
    >
      <div className="flex flex-row items-center">
        <ArrowSign
          direction={direction}
        />
      </div>
      <h3 className="text-2xl">{title}</h3>
    </div>
  )
}

const ArrowSign = ({ direction }: any) => {
  if (direction === "right") return (
    <>
      <span className="mr-2 text-sm color-[#534342]">
        Up next
      </span>
      <Arrow />
    </>
  ); else if (direction === "left") return (
    <>
      <Arrow
        classes="mr-2 rotate-180"
      />
      <span className="text-sm color-[#534342]">
        Previous
      </span>
    </>
  ); else return null;
}

const Arrow = ({ classes }: any) => (
  <span
    style={{ fontSize: "16px" }}
    className={`material-symbols-rounded ${classes}`}
  >
    arrow_forward
  </span>
)