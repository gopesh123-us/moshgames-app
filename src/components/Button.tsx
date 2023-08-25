interface buttonProps {
  btnName: string;
  color: string;
  onClicking: (item: string) => void;
}
const Button = ({ btnName, color, onClicking }: buttonProps) => {
  return (
    <button
      className={`btn btn-${color}`}
      onClick={() => onClicking("submitted")}
    >
      {btnName}
    </button>
  );
};

export default Button;
