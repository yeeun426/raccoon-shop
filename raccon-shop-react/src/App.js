import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignupStyle.css";
import "./style.css";

import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Clock from "./pages/clone/Clock";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/clock" element={<Clock />} />
      </Routes>
    </div>
  );
}

export default App;
