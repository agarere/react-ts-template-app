import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home'
import CounterPage from './pages/counter'
import TodoListPage from './pages/todos'

function App() {
  return (
    <Router>
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
      </Routes>
    </Router>
  )
}

export default App
