import { useState } from "react";
import "./ListGroup.css";

function ListGroup() {
  const cities = ["New York", "London", "Paris", "New Delhi", "San Francisco"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  /*  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };
 */
  return (
    <>
      <h1>List Group</h1>
      {cities.length === 0 && <p>No cities found</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => setSelectedIndex(index)}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
