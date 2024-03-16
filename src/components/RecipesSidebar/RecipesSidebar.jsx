import PropTypes from "prop-types";
import "./RecipesSidebar.css";

const RecipesSidebar = ({ recipes, wantToCook, handlePreparing, currentlyCooking }) => {
  return (
    <div className="w-full lg:w-[45%] h-fit py-8 border border-[#28282833] rounded-2xl">
      {/* Want to cook */}
      <div>
        <h4 className="text-2xl font-semibold text-dark-two text-center pb-4 border-b border-[#28282826] w-[70%] mx-auto">Want to cook: {wantToCook.length}</h4>

        <div className="overflow-x-auto">
          <table className="table table-zebra table-container font-fira-sans">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {wantToCook.map((id, i) => {
                const { recipe_id, recipe_name, preparing_time, calories } = recipes.find((recipe) => recipe.recipe_id === id);
                return (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{recipe_name}</td>
                    <td>{preparing_time}</td>
                    <td>{calories}</td>
                    <td>
                      <button
                        onClick={() => handlePreparing(recipe_id)}
                        className="btn min-h-8 py-2 h-auto px-4 rounded-[3.125rem] bg-primary-green hover:bg-primary-green hover:brightness-95 border-none font-medium text-dark-full"
                      >
                        Preparing
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Currently cooking */}
      <div className="mt-8">
        <h4 className="text-2xl font-semibold text-dark-two text-center pb-4 border-b border-[#28282826] w-[70%] mx-auto">
          Currently cooking: {currentlyCooking.length}
        </h4>

        <div className="overflow-x-auto">
          <table className="table table-zebra table-container font-fira-sans">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {currentlyCooking.map((item, i) => {
                const { recipe_name, preparing_time, calories } = recipes.find((recipe) => recipe.recipe_id === item);
                return (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{recipe_name}</td>
                    <td>{preparing_time}</td>
                    <td>{calories}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

RecipesSidebar.propTypes = {
  recipes: PropTypes.array,
  wantToCook: PropTypes.array,
  handlePreparing: PropTypes.func,
  currentlyCooking: PropTypes.array,
};

export default RecipesSidebar;
