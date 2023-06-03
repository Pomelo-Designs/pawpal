export default function Heading({ label, cols }: any) {

  const useCols = () => {
    if (cols) return cols;
    else return "col-span-full";
  }

  return (
    <h3 className={`${useCols()} font-karla whitespace-pre-line text-4xl p-12 pt-0 pl-0`}>{label}</h3>
  )
};

export const SubHeading = ({ label }: any) => (
  <h4 className="col-span-4 text-xl text-[22px] text-[#201A18] p-2.5 pl-0">{label}</h4>
);