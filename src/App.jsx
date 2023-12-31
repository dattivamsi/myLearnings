import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HoverButton from "./Buttons/HoverButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div className="wrapper">
        <HoverButton />
        <span className="first-text">I am</span>
        <ul className="sec-text">
          <li>
            <span>YouTuber</span>
          </li>
          <li>
            <span>Developer</span>
          </li>
          <li>
            <span>Freelancer</span>
          </li>
          <li>
            <span>Designer</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
