import Keypad from "./component/Keypad";
import Theme from "./component/Theme";
import Screen from "./component/Screen";
import "./App.css";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("1");
  const [secondAnswer, setSecondAnswer] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <main
      className={`${theme === "2" ? "main-2" : theme === "3" ? "main-3" : ""}`}
    >
      <div className="container-body">
        <header>
          <h1>calc</h1>
          <Theme theme={theme} setTheme={setTheme} />
        </header>
        <Screen answer={answer} secondAnswer={secondAnswer} theme={theme} />
        <Keypad
          answer={answer}
          setAnswer={setAnswer}
          secondAnswer={secondAnswer}
          setSecondAnswer={setSecondAnswer}
          theme={theme}
        />
      </div>
    </main>
  );
}

export default App;
