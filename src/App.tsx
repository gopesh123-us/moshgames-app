import ListGroup from "./components/ListGroup";
import ResuableListGroup from "./components/ResuableListGroup";

function App() {
  const countries = ["Amsterdam", "England", "France", "India", "Nepal"];
  const heading = "Countries";
  return (
    <div>
      <ResuableListGroup countries={countries} heading={heading} />
      <ListGroup />
    </div>
  );
}

export default App;
