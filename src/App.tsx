import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ToDoList from './pages/ToDoList'
import Default from './pages/Default'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import * as React from 'react'

function App(): JSX.Element {
  // document.body.style.backgroundColor =
  return (
    <div className="bg-body-secondary" data-bs-theme="dark">
      <Navbar className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="https://github.com/Miou-zora">Miouzora</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/todo">To Do List</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Default />} />
          <Route path="/todo" element={<ToDoList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
