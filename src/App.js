import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countrires, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries());
  }, []);

  return (
    <div>
      <h1>Visiting Every Country In The World</h1>
    </div>
  );
}

function d(props) {
  return (
    <div>
      <h3>{props.}</h3>
    </div>
  )
}

export default App;
