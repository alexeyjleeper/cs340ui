import './App.css';
import Navigation from './components/Navigation.jsx';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Employees from './pages/Employees.jsx';
import GolfCarts from './pages/GolfCarts.jsx';
import Vendors from './pages/Vendors.jsx';
import Events from './pages/Events.jsx';
import Roles from './pages/Roles.jsx';
import NextShifts from './pages/NextShifts.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/employees" element={<Employees/>}></Route>
            <Route path="/golfcarts" element={<GolfCarts/>}></Route>
            <Route path="/vendors" element={<Vendors/>}></Route>
            <Route path="/events" element={<Events/>}></Route>
            <Route path="/roles" element={<Roles/>}></Route>
            <Route path="/nextshifts" element={<NextShifts/>}></Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
