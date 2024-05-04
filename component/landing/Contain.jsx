import { getAllRecipes } from "@/db/queries";
import Category from "./Category";
import Recipe from "./Recipe";

const Contain = async() => {
  const allRecipes = await getAllRecipes();
  return (
    <section className="container py-8">
      <div className="grid grid-cols-12 py-4">
        <Category />
				<Recipe allRecipes={allRecipes}/>
      </div>
    </section>
  );
};

export default Contain;
