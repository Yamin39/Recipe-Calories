import "./RecipesSidebar.css";

const RecipesSidebar = () => {
  return (
    <div className="w-full lg:w-[45%] h-fit py-8 border border-[#28282833] rounded-2xl">
      {/* Want to cook */}
      <div>
        <h4 className="text-2xl font-semibold text-dark-two text-center pb-4 border-b border-[#28282826] w-[70%] mx-auto">Want to cook: 01</h4>

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
              <tr>
                <th>1</th>
                <td>Chicken Caesar Salad</td>
                <td>20 minutes</td>
                <td>400 calories</td>
                <td>
                  <button className="btn min-h-8 py-2 h-auto px-4 rounded-[3.125rem] bg-primary-green hover:bg-primary-green hover:brightness-95 border-none font-medium text-dark-full">
                    Preparing
                  </button>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Chicken Caesar Salad</td>
                <td>20 minutes</td>
                <td>400 calories</td>
                <td>
                  <button className="btn min-h-8 py-2 h-auto px-4 rounded-[3.125rem] bg-primary-green hover:bg-primary-green hover:brightness-95 border-none font-medium text-dark-full">
                    Preparing
                  </button>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Chicken Caesar Salad</td>
                <td>20 minutes</td>
                <td>400 calories</td>
                <td>
                  <button className="btn min-h-8 py-2 h-auto px-4 rounded-[3.125rem] bg-primary-green hover:bg-primary-green hover:brightness-95 border-none font-medium text-dark-full">
                    Preparing
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Currently cooking */}
      <div className="mt-8">
        <h4 className="text-2xl font-semibold text-dark-two text-center pb-4 border-b border-[#28282826] w-[70%] mx-auto">Currently cooking: 02</h4>

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
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Spaghetti Bolognese</td>
                <td>30 minutes</td>
                <td>600 calories</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Spaghetti Bolognese</td>
                <td>30 minutes</td>
                <td>600 calories</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecipesSidebar;
