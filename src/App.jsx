import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Components/Resume/Dashboard'
import ResumeInfo from './Components/Resume/ResumeInfo'
import ResumeUpload from './Components/Resume/ResumeUpload'
import UserDetails from './Components/Resume/UserDetails'
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/user_details' element={<UserDetails />} />
          <Route path='/resume_info' element={<ResumeInfo />} />
          <Route path='/resume_upload' element={<ResumeUpload />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
