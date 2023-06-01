import { useNavigate } from "react-router-dom";
import { Button } from "./Components";

interface HeroProps {
  data: {
    gradient: string;
    image: string;
    heading: string;
    description: string;
    button: {
      label: string;
      path: string;
    },
  }
}

export default function Hero({ data }: HeroProps) {
  const navigate = useNavigate();

  return (
    <section className="flex items-stretch col-span-full h-[641px] relative items-center justify-center grow rounded-2xl">
      <img src={data.gradient} className="absolute w-full bg-cover bg-no-repeat z-0" />
      <img src={data.image} className="absolute right-0 bottom-0 bg-cover bg-no-repeat bg-right z-0" />
      <div className="self-center grid grid-cols-12 gap-5 col-span-full z-10">
        <h1 className="col-start-4 col-span-8 font-karla text-8xl leading-[72px] capitalize mb-7 whitespace-pre-line break-all">
          {data.heading}
        </h1>
        <div className="col-start-4 col-span-6">
          <p className="text-2xl whitespace-pre-line">
            {data.description}
          </p>
          <div className="flex flex-row justify-end mt-14">
            <Button
              handleClick={() => navigate(data.button.path)}
              label={data.button.label}
              primary={true}
              size="large"
            />
          </div>
        </div>
      </div>
    </section>
  )
}