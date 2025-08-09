import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home'
import CounterPage from './pages/counter'
import TodoListPage from './pages/todos'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FormPage from './pages/form/FormPage';

function App() {
  return (
    <>
      <Navbar collapseOnSelect bg="light" data-bs-theme="light"  className="mb-3">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/counter">Counter</Nav.Link>
              <Nav.Link as={Link} to="/todo-list">Todo List</Nav.Link>
              <Nav.Link as={Link} to="/form">Form</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />
          <Route
            path='/counter'
            element={<CounterPage />}
          />
          <Route
            path='/todo-list'
            element={<TodoListPage />}
          />
          <Route
            path='/form'
            element={<FormPage />}
          />
        </Routes>
      
    </>

  )
}

export default App
