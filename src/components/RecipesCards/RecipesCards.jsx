import Card from "../Card/Card";

const RecipesCards = () => {
  return (
    <div className="w-full lg:[w-55%] grid gap-6 grid-cols-1 md:grid-cols-2">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
};

export default RecipesCards;
