import './App.css'
import Create from './Create'
import Read from './Read'
import Update from './Update'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Navbar'

export default function App() {
  return (
    <div className="main container col-8">
      <NavBar />
      <h2 className="main-header">React Crud Operations App</h2>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </div>
  )
}