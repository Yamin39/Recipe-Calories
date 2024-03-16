import PropTypes from "prop-types";

const Card = () /* (props) */ => {
  const url = "https://i0.wp.com/mindclassic.com/wp-content/uploads/2024/01/National-Spaghetti-Day.jpg?fit=856%2C482&ssl=1";
  return (
    <div className="p-6 border border-[#28282833] rounded-2xl">
      {/* part-1 */}
      <img className="rounded-2xl" src={url} alt="" />

      {/* part-2 */}
      <div className="mt-6 pb-4 border-b border-[#2828281A] space-y-4">
        <h4 className="text-xl font-semibold text-dark-two">Spaghetti Bolognese</h4>
        <p className="font-fira-sans text-dark-six">Classic Italian pasta dish with savory meat sauce.</p>
      </div>

      {/* part-3 */}
      <div className="mt-6 space-y-4 pb-4 border-b border-[#2828281A]">
        <h6 className="font-medium text-lg text-dark-two">Ingredients: 6</h6>
        <ul className="text-lg font-fira-sans text-dark-six list-disc list-inside">
          <li>500g ground beef</li>
          <li>1 onion, chopped</li>
          <li>2 cloves garlic, minced</li>
        </ul>
      </div>

      {/* part-4 */}
      <div className="font-fira-sans text-dark-80 my-6 flex gap-4">
        <div className="flex gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <p>30 minutes</p>
        </div>
        <div className="flex gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
            />
          </svg>
          <p>600 calories</p>
        </div>
      </div>
      <button className="btn h-auto py-3 px-6 rounded-[3.125rem] bg-primary-green hover:bg-primary-green hover:brightness-95 border-none font-medium text-lg text-dark-full">
        Want to Cook
      </button>
    </div>
  );
};

Card.propTypes = {
  prop: PropTypes.object,
};

export default Card;
