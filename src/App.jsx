import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/Navbar.jsx';
import HomeRoute from './pages/HomeRoute.jsx';
import ProductsRoute from './pages/ProductsRoute.jsx';
import Footer from './components/Footer.jsx';
import { BASE_URL } from './utils/config.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Router basename={BASE_URL}>
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<HomeRoute />} />
            <Route path='/products' element={<ProductsRoute />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
