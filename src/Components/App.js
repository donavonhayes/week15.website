import "../App.css";
import { Route, Routes } from "react-router-dom";
import Create from "../create/create";
import Read from "../read/read";
import Update from "../update/update";

function App() {
  return (
    <div className="main">
      <Routes>
        <Route path="/create" element={<Create />} className="datagrid"/>
        <Route path="read" exact element={<Read />} className="datagrid"/>
        <Route path="update" exact element={<Update />} className="datagrid"/>
      </Routes>
    </div>
  );
}

export default App;