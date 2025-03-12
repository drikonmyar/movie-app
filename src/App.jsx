import './css/App.css'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/favorites' element={<Favorites />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
