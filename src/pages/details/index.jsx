import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";
import "./Details.css"; // Import CSS file

export default function Details() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favoritesList,
    handleAddToFavorite,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    }

    getRecipeDetails();
  }, [id, setRecipeDetailsData]);

  const isFavorite =
    favoritesList && favoritesList.some((item) => item.id === recipeDetailsData?.recipe?.id);

  return (
    <div className="details-container">
      <div className="details-image">
        <img src={recipeDetailsData?.recipe?.image_url} alt="Recipe" />
      </div>

      <div className="details-content">
        <span className="recipe-publisher">{recipeDetailsData?.recipe?.publisher}</span>
        <h3 className="recipe-title">{recipeDetailsData?.recipe?.title}</h3>

        <button
          onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
          className={`favorite-button ${isFavorite ? "remove" : "add"}`}
        >
          {isFavorite ? "Remove from favorites" : "Add to favorites"}
        </button>

        <div className="ingredients-section">
          <span className="ingredients-title">Ingredients:</span>
          <ul className="ingredients-list">
            {recipeDetailsData?.recipe?.ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient-item">
                <span className="ingredient-quantity">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="ingredient-description">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
