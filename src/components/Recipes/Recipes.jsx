import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RecipesCards from "../RecipesCards/RecipesCards";
import RecipesSidebar from "../RecipesSidebar/RecipesSidebar";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  const [wantToCook, setWantToCook] = useState([]);

  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const notify = () =>
    toast.warn("This recipe is already selected!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleWantToCook = (id) => {
    if (wantToCook.includes(id) === false) {
      setWantToCook([...wantToCook, id]);
    } else {
      notify();
    }
  };

  const handlePreparing = (id) => {
    const remaining = wantToCook.filter((recipeId) => recipeId !== id);
    setWantToCook(remaining);
    setCurrentlyCooking([...currentlyCooking, id]);
  };

  return (
    <div className="mt-24">
      <div className="text-center space-y-6 px-5 mb-12">
        <h2 className="font-semibold text-dark-full text-[2.5rem]">Our Recipes</h2>
        <p className="text-dark-60 max-w-2xl mx-auto">
          Dive into our varied recipe collection on Recipe Calories. Each dish is carefully crafted for taste and health, with precise calorie counts.
        </p>
      </div>

      <div className="flex gap-6 flex-col lg:flex-row justify-center">
        <RecipesCards recipes={recipes} handleWantToCook={handleWantToCook}></RecipesCards>
        <RecipesSidebar recipes={recipes} wantToCook={wantToCook} handlePreparing={handlePreparing} currentlyCooking={currentlyCooking}></RecipesSidebar>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Recipes;
