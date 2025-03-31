import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignupStyle.css";
import "./style.css";

import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";

function App() {
  return (
    <div className="App">
      {" "}
      <Routes>
        <Route path="/*" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
