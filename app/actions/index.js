"use server";
import { revalidatePath } from 'next/cache'
const {
  createUser,
  findUserByCredentials,
  updateFavourites,
} = require("@/db/queries");
const { redirect } = require("next/navigation");

async function registerUser(formData) {
  console.log(formData);
  const user = Object.fromEntries(formData);

  const created = await createUser(user);
  redirect("/login");
}

async function performLogin(formData) {
  try {
    const credential = {};
    credential.email = formData.get("email");
    credential.password = formData.get("password");
    const found = await findUserByCredentials(credential);
    return found;
  } catch (error) {
    throw error;
  }
}

async function addFavouritesRecipe(recipeId, authId) {
  try {
    await updateFavourites(recipeId, authId);
  } catch (error) {
    throw error;
  }
  revalidatePath("/");
}

export { registerUser, performLogin, addFavouritesRecipe };
