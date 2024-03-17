import PropTypes from "prop-types";
import Card from "../Card/Card";

const RecipesCards = ({ recipes, handleWantToCook }) => {
  return (
    <div className="w-full lg:[w-55%] h-fit grid gap-6 grid-cols-1 md:grid-cols-2">
      {recipes.map((recipe) => (
        <Card key={recipe.recipe_id} recipe={recipe} handleWantToCook={handleWantToCook}></Card>
      ))}
    </div>
  );
};

RecipesCards.propTypes = {
  recipes: PropTypes.array,
  handleWantToCook: PropTypes.func,
};

export default RecipesCards;
