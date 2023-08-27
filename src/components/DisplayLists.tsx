import { useState } from "react";
interface DisplayListsProps {
  list: string[];
  heading: string;
}
function DisplayLists({ list, heading }: DisplayListsProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1 className="display-1">{heading}</h1>
      <ul className="list-group">
        {list.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default DisplayLists;
