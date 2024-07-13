import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { Dispatch, SetStateAction, useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleItemSelected = (item: string) => {
    console.log(item);
  };
  const [ alertVisible, setAlertVisible ]= useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleItemSelected}
      />
      { alertVisible && <Alert onClose={() => setAlertVisible(false)}>Hello world <span className="badge bg-primary">2123</span></Alert>}
      <Button color="primary" onClick={() => setAlertVisible(true)}>Click me</Button>
    </div>
  );
}

export default App;
