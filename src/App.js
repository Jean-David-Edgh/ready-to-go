import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Switch from "./components/Switch";
import Launch from "./components/Launch";
import { useState } from "react";

function App() {
  const [switched1, setSwitch1] = useState(false);
  const [switched2, setSwitch2] = useState(false);
  const [switched3, setSwitch3] = useState(false);

  return (
    <div className="app">
      <Header />

      <div className="body">
        <div className="toggle">
          <Switch switched={switched1} setSwitch={setSwitch1} />
          <Switch switched={switched2} setSwitch={setSwitch2} />
          <Switch switched={switched3} setSwitch={setSwitch3} />
        </div>
        <div className="ship">
          <Launch />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
