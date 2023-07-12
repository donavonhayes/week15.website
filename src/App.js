import "./App.css";
import { Route, Routes } from "react-router-dom";
import Create from "./components/create/create";
import Read from "./components/read/read";
import Update from "./components/update/update";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Create />} className="datagrid"/>
        <Route path="read" exact element={<Read />} className="datagrid"/>
        <Route path="update" exact element={<Update />} className="datagrid"/>
      </Routes>
    </div>
  );
}

export default App;