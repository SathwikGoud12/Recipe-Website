import { Link } from "react-router-dom";
import "./Recipeitem.css"; // Import the CSS file

export default function RecipeItem({ item }) {
  return (
    <div className="recipe-card">
      {/* Image Section */}
      <div className="recipe-image">
        <img src={item?.image_url} alt={item?.title} loading="lazy" />
      </div>

      {/* Info Section */}
      <div className="recipe-info">
        <span className="recipe-publisher">By {item?.publisher}</span>
        <h3 className="recipe-title">{item?.title}</h3>

        {/* Link Button */}
        <Link to={`/recipe-item/${item?.id}`} className="recipe-button">
          Recipe Details
        </Link>
      </div>
    </div>
  );
}
