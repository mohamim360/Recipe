import Recipe from '@/component/landing/Recipe'
import { getAllRecipes } from '@/db/queries';
import React from 'react'
export const metadata = {
  title: "Recipes",
};
const page = async() => {
	const allRecipes = await getAllRecipes();
	const recipePage = 1;
	return (
	<Recipe allRecipes={allRecipes} recipePage={recipePage}/>
	)
}

export default page