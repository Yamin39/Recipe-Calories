import "./App.css";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";

function App() {
  return (
    <div className="w-10/12 mx-auto max-w-[1440px] mt-6 md:mt-12 mb-24 font-lexend">
      <Header></Header>
      <main>
        <Recipes></Recipes>
      </main>
    </div>
  );
}

export default App;
