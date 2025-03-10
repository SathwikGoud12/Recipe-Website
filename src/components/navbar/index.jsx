import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context";
import "./Navbar.css";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);
  const navigate = useNavigate(); // ✅ Moved useNavigate inside the component

  function handleFormSubmit(event) {
    event.preventDefault();
    if (searchParam.trim()) {
      handleSubmit(event, navigate); // ✅ Pass navigate to handleSubmit
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>FoodRecipe</h2>
      </div>
      <form onSubmit={handleFormSubmit} className="navbar-search">
        <input
          type="text"
          name="search"
          placeholder="Search recipes..."
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
