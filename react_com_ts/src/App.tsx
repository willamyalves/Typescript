// React
import { useState, createContext } from "react";

// Components
import Destructuring, { Category } from "./components/Destructuring";

// Context
import Context from "./components/Context.tsx";

// CSS
import "./App.css";

interface IMyContext {
  language: string;
  framework: string;
  projects: number;
}

export const MyContext = createContext<IMyContext | null>(null);

function App() {
  const myContext: IMyContext = {
    language: "Javascript",
    framework: "Express",
    projects: 5,
  };

  return (
    <MyContext.Provider value={myContext}>
      <div className="App">
        <h1>Typescript com React!</h1>
        <Destructuring
          title="teste"
          content="teste"
          commentQtd={5}
          tags={["JS"]}
          category={Category.JS}
        />
        <Context />
      </div>
    </MyContext.Provider>
  );
}

export default App;
