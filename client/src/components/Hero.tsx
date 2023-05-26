import { useNavigate } from "react-router-dom";
import { Button } from "./Buttons/Button";

interface HeroProps {
  data: {
    gradient: string;
    image: string;
    heading: string;
    description: string;
    buttonLabel: string | undefined;
    buttonLink: string;
    buttonType: "pink" | "blue" | "brown";
  }
}

export const Hero = ({ data }: HeroProps) => {
  const navigate = useNavigate();

  return (
    <section className={`flex items-stretch col-span-full relative items-center justify-center grow h-[632px] ${data.gradient} bg-cover rounded-2xl`}>
      <div className={`absolute ${data.image} bg-cover w-full h-full bg-no-repeat bg-right z-0`} />
      <div className="self-center grid grid-cols-12 col-span-full">
        <h1 className="col-start-5 col-span-8 font-karla text-8xl leading-[72px] capitalize mb-7 whitespace-pre-line break-all">
          {data.heading}
        </h1>
        <div className="col-start-5 col-span-7">
          <p className="text-2xl whitespace-pre-line">
            {data.description}
          </p>
          <div className="flex flex-row justify-end mt-14">
            <Button
              handleClick={() => navigate(data.buttonLink)}
              label={data.buttonLabel}
              primary={true}
              size="large"
              type={data.buttonType}
            />
          </div>
        </div>
      </div>
    </section>
  )
}