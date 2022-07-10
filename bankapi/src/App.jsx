import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
//import Login from './pages/Login/Login';
//import Profile from './pages/profile/Profile';
//import ProgressPage from './pages/Progress/ProgressPage';
import Footer from './components/Footer/index';
import Header from './components/Header/index';

import './sass/main.scss';


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;




/*
<Route path="/login" element={<Login />} />
<Route path="/profile" element={<Profile />} />
<Route path="/transaction" element={<ProgressPage />} />
*/


