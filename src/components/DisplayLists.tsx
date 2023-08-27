interface DisplayListsProps {
  list: string[];
  heading: string;
}
function DisplayLists({ list, heading }: DisplayListsProps) {
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {list.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </>
  );
}

export default DisplayLists;
