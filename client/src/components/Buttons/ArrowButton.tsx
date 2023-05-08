export const ArrowButton = ({ classes, click, disabled }: any) => (
  <button
    onClick={click}
    disabled={disabled}
    className={`flex justify-center items-center h-10 w-10 rounded-full bg-pink-300 ${classes}`}>
    <span className="material-symbols-rounded">arrow_forward</span>
  </button>
);