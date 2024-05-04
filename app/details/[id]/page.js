import HeroSection from "@/component/details/HeroSection";
import RecipeDetails from "@/component/details/RecipeDetails";
import { getRecipeById } from "@/db/queries";

export async function generateMetadata({ params }) {

  const { id } = params;

  const recipeInfo = await getRecipeById(id);

  return {
    title: recipeInfo.name,
  };
}

const page = async ({ params: { id } }) => {
  const recipeInfo = await getRecipeById(id);
	
  return (
    <main>
      <HeroSection recipeInfo={recipeInfo} />
      <RecipeDetails recipeInfo={recipeInfo} />
    </main>
  );
};

export default page;
