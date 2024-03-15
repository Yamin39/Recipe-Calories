import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container text-white text-center md:py-32 rounded-3xl p-10 mt-12">
      <h1 className="font-bold text-[3.25rem] max-w-3xl mx-auto">Delicious Recipes to Savor, Healthy Calories Counted!</h1>
      <p className="text-lg mt-6 mb-10 mx-auto max-w-3xl">
        Welcome to Recipe Calories, your ultimate destination for mouthwatering recipes meticulously crafted with health in mind. Discover flavorful dishes with
        precise calorie counts!
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <button className="btn rounded-[3.125rem] h-auto py-4 px-7 font-semibold text-xl text-dark-full bg-primary-green border-none hover:bg-primary-green hover:opacity-90">
          Explore Now
        </button>
        <button className="btn rounded-[3.125rem] h-auto py-4 px-7 font-semibold text-xl text-white bg-transparent hover:bg-[#ffffff2f]">Our Feedback</button>
      </div>
    </div>
  );
};

export default Banner;
