import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
import Navbar from './components/Navbar.jsx';
import HomeRoute from './pages/HomeRoute.jsx';
import Footer from './components/Footer.jsx';
import { BASE_URL } from './utils/config.jsx';

function App() {
  return (
    <Router basename={BASE_URL}>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomeRoute />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
