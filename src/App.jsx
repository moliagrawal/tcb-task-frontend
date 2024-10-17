import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inspiration from './pages/Inspiration';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      {/* <nav className="flex justify-between px-6 py-4 bg-gray-100">
        <Link to="/" className="font-bold text-lg">Home</Link>
        <Link to="/inspiration" className="font-bold text-lg">Inspiration</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inspiration" element={<Inspiration />} />
      </Routes>
    </Router>
  );
}

export default App;