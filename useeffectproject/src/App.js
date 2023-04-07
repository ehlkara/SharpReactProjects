import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [ehlullah, setEhlullah] = useState(0);
  const [buse, setBuse] = useState(0);
  useEffect(() => {
    console.log("İlk kez render edildiğinde çalışır daha da çalışmaz.");
  }, []);

  useEffect(() => {
    console.log("Her zaman çalışır.");
  });

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır. Ek olarak ehlullah değerinde değişiklik olduğunda çalışır."
    );
  }, [ehlullah]);

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır. Ek olarak buse değerinde değişiklik olduğunda çalışır."
    );
  }, [buse]);

  useEffect(() => {
    console.log(
      "İlk kez render edildiğinde çalışır. Ek olarak ehlullah veya buse değerinde değişiklik olduğunda çalışır."
    );
  }, [ehlullah, buse]);

  return (
    <div className="App">
      <div className="firstDiv">
        <button onClick={() => setEhlullah(ehlullah + 1)}>ehlullah ++</button>
        <div>Ehlullah: {ehlullah}</div>
      </div>
      <div>
        <button onClick={() => setBuse(buse + 1)}>buse ++</button>
        <div>Buse: {buse}</div>
      </div>
    </div>
  );
}

export default App;
