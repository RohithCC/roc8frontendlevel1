import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Destination from './MainComponents/Destination'
import HomeMain from './MainComponents/HomeMain';
import Reports from './MainComponents/Reports';
import Detailspage from './MainComponents/Detailspage';

function App() {
  return (
    <div>
     <Header />
     <Router>
          <Routes>
          <Route path='/*' element={<HomeMain />} />
                <Route path='/home' element={<HomeMain />} />
                <Route path='/destination' element={<Destination />} />
                <Route path='/reports' element={<Reports />} />
                <Route path='/destination/:id' element={<Detailspage />} />
          </Routes>
      </Router>
     <Footer />
    </div>
  );
}

export default App;
