import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../../components/header/Header'
import Home from '../home/Home'
import About from '../about/About'
import Contact from '../contact/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App