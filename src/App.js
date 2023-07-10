import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/footer/Footer';

import Navbar from './component/navbar/Navbar';
import Homepage from './pages/homepage/Homepage';

import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import Rule from './pages/rules/Rule';
import Question from './pages/questionPage/Question';

function App() {
  return (
    <>  
    
    <div className='app-container'>

      <Navbar />

      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/rule" element={<Rule />} />
          <Route path="/question" element={<Question />} />

      </Routes>

      <Footer />
      </div>
    </>
  );
}

export default App;
