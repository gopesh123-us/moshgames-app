interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "warning" | "info";
  onClick: () => void;
}
const ButtonV2 = ({ children, color = "danger", onClick }: Props) => {
  return (
    <div className={"btn btn-" + color} onClick={onClick}>
      {children}
    </div>
  );
};

export default ButtonV2;
