// Components
import SecondComponent from "./components/SecondComponent";
import Destructuring from "./components/Destructuring";

// CSS
import "./App.css";

function App() {
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
    </div>
  );
}

export default App;
