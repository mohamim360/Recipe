import { recipeModel } from "@/models/recipe-models";
import { userModel } from "@/models/user-models";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-util";

async function getAllRecipes() {
  const allRecipes = await recipeModel.find().lean();
  return replaceMongoIdInArray(allRecipes);
}

async function getRecipeById(RecipeId) {
  const recipe = await recipeModel.findById(RecipeId).lean();
  return replaceMongoIdInObject(recipe);
}

async function getRecipeByCategory(RecipeCategory) {
  const recipes = await recipeModel.find({ category: RecipeCategory }).lean();
  return replaceMongoIdInArray(recipes);
}

async function createUser(user) {
  return await userModel.create(user);
}

async function findUserByCredentials(credentials) {
  const user = await userModel.findOne(credentials).lean();

  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
}

async function findUserById(id) {
  const user = await userModel.findOne(id).lean();

  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
}


async function updateFavourites(recipeId, authId) {

	const user = await userModel.findById(authId);

	if (user) {
			const foundFavourites = user.favourites.find(id => id === recipeId);

			if(foundFavourites) {
					user.favourites.pull(recipeId);
			} else {
					user.favourites.push(recipeId);
			}

			user.save();
	}

}

export {
  getAllRecipes,
  getRecipeById,
  getRecipeByCategory,
  createUser,
  findUserByCredentials,
	updateFavourites,
	findUserById
};
