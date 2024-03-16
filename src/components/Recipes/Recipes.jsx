import RecipesCards from "../RecipesCards/RecipesCards";
import RecipesSidebar from "../RecipesSidebar/RecipesSidebar";

const Recipes = () => {
  return (
    <div className="mt-24">
      <div className="text-center space-y-6 px-5 mb-12">
        <h2 className="font-semibold text-dark-full text-[2.5rem]">Our Recipes</h2>
        <p className="text-dark-60 max-w-2xl mx-auto">
          Dive into our varied recipe collection on Recipe Calories. Each dish is carefully crafted for taste and health, with precise calorie counts.
        </p>
      </div>

      <div className="flex gap-6 flex-col lg:flex-row justify-center">
        <RecipesCards></RecipesCards>
        <RecipesSidebar></RecipesSidebar>
      </div>
    </div>
  );
};

export default Recipes;
