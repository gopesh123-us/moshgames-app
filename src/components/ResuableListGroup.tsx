import { useState } from "react";

// {items: array, heading: string, onSelected: () => void}
interface ResuableListGroupProps {
  countries: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ResuableListGroup({
  countries,
  heading,
  onSelectItem,
}: ResuableListGroupProps) {
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
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ResuableListGroup;
