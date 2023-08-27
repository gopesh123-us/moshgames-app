import { useState } from "react";
import ListGroup from "./components/ListGroup";
import ResuableListGroup from "./components/ResuableListGroup";
import FamilyNames from "./components/FamilyNames";
import Button from "./components/Button";
import Alert from "./components/Alert";
import ButtonV2 from "./components/ButtonV2";
import ButtonWithAlert from "./components/ButtonWithAlert";
import DisplayLists from "./components/DisplayLists";

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

  const [visibility, setVisibility] = useState(false);

  const fruits = ["apple", "orange", "banana", "grapes"];
  const listheading = "Fruits";

  return (
    <div>
      <DisplayLists list={fruits} heading={listheading} />

      {visibility && (
        <Alert
          onClose={() => {
            setVisibility(false);
          }}
        >
          Hello World
        </Alert>
      )}
      <ButtonWithAlert onClick={() => setVisibility(true)}>
        Press for Alert
      </ButtonWithAlert>
      <br />

      <ButtonV2
        color="info"
        onClick={() => {
          console.log("clicked");
        }}
      >
        MyButtonV2
      </ButtonV2>
      <Alert
        onClose={() => {
          console.log("clicked");
        }}
      >
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
