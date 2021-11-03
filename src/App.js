import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Switch from "./components/Switch";
import Launch from "./components/Launch";
import { useState } from "react";

function App() {
  const [switched, setSwitch] = useState(0);

  return (
    <div className="app">
      <Header />

      <div className="body">
        <div className="toggle">
          <Switch switched={switched} setSwitch={setSwitch} />
          <Switch switched={switched} setSwitch={setSwitch} />
          <Switch switched={switched} setSwitch={setSwitch} />
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
