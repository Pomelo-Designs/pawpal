import { useEffect, useState } from "react";
import { ArrowButton } from "./Components";

interface PaginationProps {
  data: any;
  input: any;
  setInput: (input: any) => void;
}

export default function Pagination({ data, input, setInput }: PaginationProps) {
  const [offset, setOffset] = useState(0);
  const totalCount = data?.adoptions?.totalCount || 0;
  const itemsPerPage = input.limit;
  const totalItems = totalCount;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentPage = Math.floor(offset / itemsPerPage) + 1;
  const isPrevDisabled = offset === 0;
  const isNextDisabled = offset + itemsPerPage >= totalItems;

  useEffect(() => {
    setInput({ ...input, offset });
  }, [offset, setInput, input]);

  const handlePageChange = (newPage: number) => {
    const newOffset = (newPage - 1) * itemsPerPage;
    setOffset(newOffset);
  };

  return (
    <div className="col-span-1 col-end-4 p-6 flex flex-row gap-6 justify-center items-center">
      <ArrowButton
        click={() => handlePageChange(currentPage - 1)}
        disabled={isPrevDisabled}
        classes="rotate-180 disabled:bg-[#1c1b1f1f]"
        arrow={isPrevDisabled ? "#a6a6a6" : "#000"}
      />
      <span>{currentPage}&nbsp;/&nbsp;{totalPages}</span>
      <ArrowButton
        click={() => handlePageChange(currentPage + 1)}
        disabled={isNextDisabled}
        classes="disabled:bg-[#1c1b1f1f]"
        arrow={isNextDisabled ? "#a6a6a6" : "#000"}
      />
    </div>
  );
};