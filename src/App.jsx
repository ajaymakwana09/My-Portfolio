import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import Credentails from './components/Credentails';

function App() {
  return (
    <Router>
       <ToastContainer />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/credentails" element={<Credentails />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
