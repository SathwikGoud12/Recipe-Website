import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";
import "./Home.css";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) {
    return (
      <div className="loading-container">
        <p className="loading-text">Loading... Please wait!</p>
      </div>
    );
  }

  return (
    <div className="py-8 container mx-auto">
      {recipeList?.length > 0 ? (
        <div className="recipe-list">
          {recipeList.map((item) => (
            <RecipeItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No recipes found! Try searching something else.</p>
        </div>
      )}
    </div>
  );
}
