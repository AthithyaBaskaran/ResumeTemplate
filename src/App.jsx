import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Components/Resume/Dashboard'
import ResumeInfo from './Components/Resume/ResumeInfo'
import ResumeUpload from './Components/Resume/ResumeUpload'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/resume_info' element={<ResumeInfo />} />
          <Route path='/resume_upload' element={<ResumeUpload />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
