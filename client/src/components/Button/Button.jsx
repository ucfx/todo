const btnStyles = {
  success: "bg-blue-500 hover:bg-blue-600",
  danger: "bg-red-500 hover:bg-red-600",
};

const Button = ({ children, onClick, type = "success" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-white 
      rounded-md active:transform active:scale-95 
      transition-colors duration-250 ${btnStyles[type]}`}
    >
      {children}
    </button>
  );
};

export default Button;
