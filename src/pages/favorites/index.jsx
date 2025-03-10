import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";
import "./Favorites.css"; // Import the new CSS

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="favorites-wrapper">
      <h2 className="favorites-title">Your Favorite Recipes</h2>
      {favoritesList && favoritesList.length > 0 ? (
        <div className="favorites-container">
          {favoritesList.map((item) => (
            <RecipeItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="favorites-empty">Nothing is added to favorites.</p>
      )}
    </div>
  );
}
