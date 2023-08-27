interface Props {
  children: string;
  onClick: () => void;
}

const ButtonWithAlert = ({ children, onClick }: Props) => {
  return (
    <div className="btn btn-success mb-2" onClick={onClick}>
      {children}
    </div>
  );
};

export default ButtonWithAlert;
