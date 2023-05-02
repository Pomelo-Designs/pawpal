interface NavCardProps {
  title: string;
  description?: string;
  src?: any;
  handleClick?: () => void;
}

export const NavCard = ({ title, description, src, handleClick }: NavCardProps) => {

  return (
    <div className="w-full cursor-pointer"
      onClick={handleClick}>
      {src &&
        <img src={src} className="w-full h-[192px] object-cover object-top m-0 mb-6 rounded-xl" alt="image" />
      }
      {description ?
        <div className="flex flex-col">
          <h6 className="text-2xl">{title}</h6>
          <div className="flex flex-row items-center justify-between">
            <p className="text-base w-48 mt-1.5 whitespace-pre-line">{description}</p>
            <Button />
          </div>
        </div>
        :
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col">
            <h6 className="text-2xl">{title}</h6>
            <p className="text-xs whitespace-pre-line">{description}</p>
          </div>
          <Button />
        </div>
      }
    </div>
  )
}

const Button = () => (
  <button className="flex justify-center items-center h-10 w-10 rounded-full bg-pink-300">
    <span className="material-symbols-rounded">arrow_forward</span>
  </button>
);