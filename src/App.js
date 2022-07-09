import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
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
  );
}

export default App;
