import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const nav = useNavigate();
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => nav("/gemini")}>Nav to Gemini</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
