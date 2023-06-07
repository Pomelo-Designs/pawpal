import { ArrowButton } from "../Components";

interface NavCardProps {
  title: string;
  description?: string;
  src?: any;
  image?: string;
  classname?: string;
  cols?: string;
  handleClick?: () => void;
}

export default function NavCard({ image, cols, title, description, handleClick, classname }: NavCardProps) {

  return (
    <div className={`grid ${cols} cursor-pointer`}
      onClick={handleClick}>
      <div className={classname}>
        {image &&
          <img src={image} className={`bg-center bg-auto bg-no-repeat m-0 mb-6 rounded-xl`} />
        }
      </div>
      {description ?
        <div className="flex flex-col">
          <h6 className="text-xl">{title}</h6>
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