export default function Section({ children, start, cols }: any) {

  const useStart = () => {
    if (start) return start;
    else return "col-start-4";
  }

  const useCols = () => {
    if (cols) return cols;
    if (start === "col-start-5") return "grid-cols-9";
    else return "grid-cols-10";
  }

  return (
    <section className={`grid ${useStart()} ${useCols()} col-span-full gap-5`}>
      <div className={`grid ${useCols()} col-span-full gap-5`}>
        {children}
      </div>
    </section>
  )
};