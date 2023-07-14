import './App.css'
import Create from './components/create'
import Read from './components/read'
import Update from './components/update'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar'




export default function App() {
  return (
    <div className="main container col-8">
      <NavBar />
      <h2 className="main-header">React Crud Operations App</h2>
      <Routes>
        <Route path="/Create" element={<Create />} />
        <Route path="/Read" element={<Read />} />
        <Route path="/Update" element={<Update />} />
      </Routes>
    </div>
  )
}