import "./App.css";
import { Route, Routes } from "react-router-dom";
import Create from "./create/Create";
import Read from "./read/Read";
import Update from "./update/Update";

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