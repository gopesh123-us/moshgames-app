import ListGroup from "./components/ListGroup";
import ResuableListGroup from "./components/ResuableListGroup";
import FamilyNames from "./components/FamilyNames";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const countries = ["Amsterdam", "England", "France", "India", "Nepal"];
  const heading = "Countries";
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const members = ["Pinky", "Raju", "Sweety", "Pradeep", "Suman"];
  const topheading = "Family Members";

  const buttonName = "My Big Button";

  const handleClick = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Alert>
        <strong>
          Hello World <i>Alert</i>
        </strong>
      </Alert>
      <Button btnName={buttonName} onClicking={handleClick} color={"primary"} />
      <ResuableListGroup
        countries={countries}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
      <ListGroup />
      <FamilyNames members={members} heading={topheading} />
    </div>
  );
}

export default App;
