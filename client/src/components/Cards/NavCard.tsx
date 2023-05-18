import { ArrowButton } from "../Buttons/ArrowButton";

interface NavCardProps {
  title: string;
  description?: string;
  src?: any;
  image?: string;
  handleClick?: () => void;
}

export const NavCard = ({ image, title, description, handleClick }: NavCardProps) => {

  return (
    <div className="w-full cursor-pointer"
      onClick={handleClick}>
      {image &&
        <div className={`w-full ${image} bg-center bg-no-repeat m-0 mb-6 rounded-xl`} />
      }
      {description ?
        <div className="flex flex-col">
          <h6 className="text-2xl">{title}</h6>
          <div className="flex flex-row items-center justify-between">
            <p className="text-base w-48 mt-1.5 whitespace-pre-line">{description}</p>
            <ArrowButton />
          </div>
        </div>
        :
        <div className="relative flex flex-row items-center justify-center w-full">
          <h6 className="text-2xl">{title}</h6>
          <ArrowButton classes="absolute right-0" />
        </div>
      }
    </div>
  )
}