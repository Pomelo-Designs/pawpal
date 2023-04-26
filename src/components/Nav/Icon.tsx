export const Icon = ({ icon, hover, clicked, isActive, styles }: any) => {

  const weight = () => {
    switch (true) {
      case (isActive && clicked): return "material-active-clicked";
      case (isActive && hover): return "material-active-hover";
      case (isActive): return "material-active";
      case (clicked): return "material-hover-clicked";
      case (hover): return "material-hover";
      default: return "material-passive";
    }
  }

  return (
    <span className={`flex material-symbols-rounded z-10 ${styles} ${weight()}`}>
      {icon}
    </span>
  )
}