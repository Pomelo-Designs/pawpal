export const Background = ({ isActive, hover, clicked, styles }: any) => {

  const color = () => {
    switch (true) {
      case (isActive): return "bg-pink-200";
      case (clicked): return "bg-pink:200";
      case (hover): return "bg-pink-100";
      default: return "bg-transparent";
    }
  }

  return (
    // styles = height, width, border-radius
    <div className={`absolute ${color()} ${styles}`} />
  )
}