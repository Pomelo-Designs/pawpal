

interface CardProps {
  title: string;
  description: string;
  image?: string;
  cols?: string;
  handleClick?: () => void;
}

export const Card = ({ image, title, description, cols, handleClick }: CardProps) => {

  return (
    <div className={` ${cols} cursor-pointer rounded-xl border-[1px] leading-none inline-block`}
      onClick={handleClick}
    >
      {image && <img src={image} className={`w-full h-[192px] bg-cover bg-no-repeat bg-center m-0 rounded-t-xl`} />
      }
      <div className="flex flex-col p-4 pb-8 gap-2.5">
        <h6 className="text-2xl">{title}</h6>
        <p className="text-xs whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
};