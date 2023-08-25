import { useState } from "react";

// {items: array, heading: string}
interface ResuableListGroupProps {
  countries: string[];
  heading: string;
}

function ResuableListGroup({ countries, heading }: ResuableListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {countries.length === 0 && <p>No cities found</p>}
      <ul className="list-group">
        {countries.map((city, index) => (
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

export default ResuableListGroup;
