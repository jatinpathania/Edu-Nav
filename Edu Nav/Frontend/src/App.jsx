import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp'; 
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/signup" element={<SignUp />} />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;