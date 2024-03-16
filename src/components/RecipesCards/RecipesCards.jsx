import PropTypes from "prop-types";
import Card from "../Card/Card";

const RecipesCards = ({ recipes }) => {
  console.log(recipes);
  return (
    <div className="w-full lg:[w-55%] grid gap-6 grid-cols-1 md:grid-cols-2">
      {recipes.map((recipe) => (
        <Card key={recipe.recipe_id} recipe={recipe}></Card>
      ))}
    </div>
  );
};

RecipesCards.propTypes = {
  recipes: PropTypes.array,
};

export default RecipesCards;
