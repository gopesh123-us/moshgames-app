import ListGroup from "./components/ListGroup";
import ResuableListGroup from "./components/ResuableListGroup";
import FamilyNames from "./components/FamilyNames";

function App() {
  const countries = ["Amsterdam", "England", "France", "India", "Nepal"];
  const heading = "Countries";

  const members = ["Pinky", "Raju", "Sweety", "Pradeep", "Suman"];
  const topheading = "Family Members";
  return (
    <div>
      <ResuableListGroup countries={countries} heading={heading} />
      <ListGroup />
      <FamilyNames members={members} heading={topheading} />
    </div>
  );
}

export default App;
