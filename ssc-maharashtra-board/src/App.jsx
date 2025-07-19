import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ExamProvider } from './context/ExamContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Standards from './pages/Standards'
import Contact from './pages/Contact'
import StudentLogin from './pages/StudentLogin'
import Exam from './pages/Exam'
import Result from './pages/Result'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [studentData, setStudentData] = useState(null)

  return (
    <Router>
      <ExamProvider>
        <div className="app-container">
          <Navbar isLoggedIn={isLoggedIn} />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/standards" element={<Standards />} />
              <Route path="/contact" element={<Contact />} />
              <Route 
                path="/login" 
                element={<StudentLogin setIsLoggedIn={setIsLoggedIn} setStudentData={setStudentData} />} 
              />
              <Route path="/exam/:standard" element={<Exam studentData={studentData} />} />
              <Route path="/result" element={<Result studentData={studentData} />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ExamProvider>
    </Router>
  )
}

export default App