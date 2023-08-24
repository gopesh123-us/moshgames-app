

function ListGroup() {
  const cities = ["New York", "London", "Paris", "New Delhi", "San Francisco"];

  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {cities.map((city) => (
          <li className="list-group-item" key={city}>
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
