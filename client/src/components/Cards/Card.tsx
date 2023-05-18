

interface CardProps {
  title: string;
  description: string;
  image?: string;
  src?: any;
  handleClick?: () => void;
}

export const Card = ({ image, title, description, src, handleClick }: CardProps) => {

  return (
    <div className="w-full cursor-pointer rounded-xl border-[1px] leading-none inline-block"
      onClick={handleClick}
    >
      {image && <div className={`w-full h-[192px] ${image} bg-cover bg-no-repeat bg-center m-0 rounded-t-xl`} />
      }
      <div className="flex flex-col p-4 pb-8 gap-2.5">
        <h6 className="text-2xl">{title}</h6>
        <p className="text-xs whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
};