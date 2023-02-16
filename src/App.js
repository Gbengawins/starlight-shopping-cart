import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import Cart from './pages/cart/Cart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
