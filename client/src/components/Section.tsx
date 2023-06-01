export default function Section({ children }: any) {
  return (
    <section className="grid col-start-2 grid-cols-11 col-span-full gap-5">
      {children}
    </section>
  )
};