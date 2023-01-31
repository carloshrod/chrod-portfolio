import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Portfolio, ResumeEn, ResumeEs } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Portfolio />} />
          <Route path="/resume-en" element={<ResumeEn />} />
          <Route path="/resume-es" element={<ResumeEs />} />
        </Routes>
      </Router>
      <ToastContainer
        className="my-toast-container"
        toastClassName="my-toast"
        position="top-center"
        newestOnTop
        theme="dark"
      />
    </>
  )
}

export default App
