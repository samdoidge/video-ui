const Button = ({ children, isDisabled = false, onClick }) =>
  <button onClick={onClick} className={`${isDisabled ? "bg-cyan-200" : "bg-cyan-500"} px-4 py-2 font-semibold text-sm text-white rounded mr-1 mb-1 shadow-sm`} disabled={isDisabled}>{children}</button>

export default Button;
