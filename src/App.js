import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends.jsx';
import About from './components/About/About.jsx';
import NotFound from './components/NotFound/NotFound.jsx';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my fancy Routing website!!!</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
