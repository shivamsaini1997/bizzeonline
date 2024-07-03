import { BrowserRouter as Router, Route, Link, Routes }  from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';


import Home from './pages/Home';
import Home2 from "./pages/Home2";


function App() {
  
  return (

       <Router>
          <Routes>
              <Route path="/"  element={<Home />} />
              <Route path="Home2"  element={<Home2 />} />
          </Routes>
        </Router>
  
  );
}

export default App;
