

interface CardProps {
  title: string;
  description: string;
  src?: any;
  handleClick?: () => void;
}

export const Card = ({ title, description, src, handleClick }: CardProps) => {

  return (
    <div className="w-full cursor-pointer rounded-xl border-[1px] leading-none inline-block"
      onClick={handleClick}
    >
      {src &&
        <img src={src} className="w-full h-[192px] object-cover object-top m-0 rounded-t-xl" alt="image" />
      }
      <div className="flex flex-col p-4 pb-8 gap-2.5">
        <h6 className="text-2xl">{title}</h6>
        <p className="text-xs whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
};