import { useNavigate } from "react-router-dom";
import { Button } from "./Buttons/Button";

interface HeroProps {
  heading: string;
  description: string;
  buttonLabel: string | undefined;
  buttonLink: string;
}

export const Hero = ({ heading, description, buttonLabel, buttonLink }: HeroProps) => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center grow h-[632px] bg-[#FF84A9] rounded-2xl">
      <div>
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