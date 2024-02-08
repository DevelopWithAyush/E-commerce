import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Product from './Pages/Product/Product';
import Error from './Pages/Error/Error';
import Navbar from './Components/Navbar/Navbar';
import Alert from './Components/Alert/Alert';
import AlertState from './Context/Alertcontext/AlertState';
import Login from './Pages/Login/Login';
import Footer from './Components/Footer/Footer';
import Email from './Components/Email/Email';
function App() {
  return (<div className="app">

    <Router>
      <AlertState>
      <Navbar></Navbar>
      <Alert/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/about' element= {<About/>}/>
        <Route path='/contact' element= {<Contact/>}/>
        <Route path='/product' element= {<Product/>}/>
        <Route path='/loginsignup' element= {<Login/>}/>
        <Route path='*' element= {<Error/>}/>
      </Routes>
      <Email></Email>
      <Footer></Footer>
      </AlertState>
    </Router>
    </div>

   
  );
}

export default App;
