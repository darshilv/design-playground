import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Example component
import ExperimentOne from './pages/ExperimentOne'; // Example component
import './App.css'

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experimentone" element={<ExperimentOne />} />
          {/* Add more routes as needed */}
        </Routes>
    </>
  )
}

export default App
