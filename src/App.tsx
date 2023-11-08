import { BrowserRouter, Route, Routes } from 'react-router-dom'
import * as React from 'react'
import './styles/Globals.css'
import HomePage from './pages/Home'
import ToDoPage from './pages/ToDo'
import DonePage from './pages/Done'
import MePage from './pages/Me'

function App(): JSX.Element {
  document.body.style.backgroundColor = '#000000'
  return (
    <div>
      <div className="ellipse" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<ToDoPage />} />
          <Route path="/done" element={<DonePage />} />
          <Route path="/me" element={<MePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
