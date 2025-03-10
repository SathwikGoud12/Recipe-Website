import './App.css';
import { Routes, Route } from 'react-router-dom'; // ✅ No need to import BrowserRouter
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import Details from "./pages/details";

function App() {
  return (
    <div className="app-container"> {/* ✅ Wrapper for global styling */}
      <Navbar />
      <main> {/* ✅ Better semantic structure */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
