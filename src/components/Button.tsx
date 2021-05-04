type ButtonProps = {
  text: string;
  style?: any;
  active?: boolean;
  onClick?: any;
};

const Button = ({
  text,
  style,
  active = true,
  onClick = () => {},
}: ButtonProps) => {
  return (
    <button
      onClick={active && onClick}
      type="button"
      className={`${active ? "btn" : "btn btn--inactive"} ${
        style ? style : ""
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
