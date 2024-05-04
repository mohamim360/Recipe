import Recipe from '@/component/landing/Recipe'
import { getAllRecipes } from '@/db/queries';
import React from 'react'
export const metadata = {
  title: "Recipes",
};
const page = async() => {
	const allRecipes = await getAllRecipes();
	return (
	<Recipe allRecipes={allRecipes}/>
	)
}

export default page