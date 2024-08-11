// Components
import SecondComponent from "./components/SecondComponent";
import Destructuring from "./components/Destructuring";

// React
import { useState, ChangeEvent } from "react";

// CSS
import "./App.css";

function App() {
  const [text, setText] = useState<string | null>(null);

  const handleEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Typescript com React!</h1>
      <SecondComponent name={"Segundo"} />
      <Destructuring
        title="Um título qualquer"
        content="Algum conteúdo"
        commentQtd={15}
        tags={["JS, TS, Python"]}
      />
      <p>O texto é: {text}</p>
      <input type="text" onChange={handleEvent} />
    </div>
  );
}

export default App;
