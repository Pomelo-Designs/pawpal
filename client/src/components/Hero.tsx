import { useNavigate } from "react-router-dom";
import { Button } from "./Buttons/Button";

interface HeroProps {
  gradient: string;
  image: string;
  heading: string;
  description: string;
  buttonLabel: string | undefined;
  buttonLink: string;
}

export const Hero = ({ gradient, image, heading, description, buttonLabel, buttonLink }: HeroProps) => {
  const navigate = useNavigate();

  return (
    <section className={`flex flex-col relative items-center justify-center grow h-[632px] ${gradient} bg-cover rounded-2xl`}>
      <div className={`absolute ${image} bg-cover w-full h-full bg-no-repeat z-0`} />
      <div className="z-10">
        <h1 className="font-karla text-8xl leading-[72px] capitalize mb-7 whitespace-pre-line break-all">
          {heading}
        </h1>
        <div className=" w-[650px]">
          <p className="text-2xl whitespace-pre-line">
            {description}
          </p>
          <div className="flex flex-row justify-end mt-14">
            <Button
              handleClick={() => navigate(buttonLink)}
              label={buttonLabel}
              primary={true}
              size="large"
            />
          </div>
        </div>
      </div>
    </section>
  )
}