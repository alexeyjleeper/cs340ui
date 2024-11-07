import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage.js';
// import PageName from './pages/page.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            {/* <Route path="/create" element={ <createPage />}></Route> */}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
