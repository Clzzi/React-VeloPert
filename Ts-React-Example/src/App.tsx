import React from "react";
import Greetings from "./Greetings";

function App() {
  const onClick = (name: string) => {
    console.log(name);
  };

  return <Greetings onClick={onClick} name={"Clzzi"} />;
}

export default App;
