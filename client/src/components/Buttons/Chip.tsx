export default function Chip({ click, label, input }: any) {

  const bool = () => {
    if (input === null && label === "All") return true;
    if (typeof input === 'string') {
      if (label.toLowerCase() === input.toLowerCase()) return true;
    }
    else return false;
  }

  const style = () => {
    switch (true) {
      case (bool() === true): {
        return "bg-[#FFDBCC] border-none hover:color-[#351000] hover:bg-[#EDCBBF]"
      }
    }
  }

  return (
    <button
      onClick={click}
      className={`${style()} flex items-center justify-center h-8 w-[72px] border-[#857371] border-[1px] rounded-xl`}>
      <span className="text-xs color-[#534342] font-medium">{label}</span>
    </button>
  )
}