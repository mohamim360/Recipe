import Image from "next/image";
import Link from "next/link";

const Recipe = ({ allRecipes }) => {
  return (
    <div className="col-span-12 md:col-span-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
        {allRecipes.map((recipe) => (
          <Link key={recipe.id} href={`/details/${recipe.id}`}>
            {" "}
            <div className="card">
              <Image
                src={recipe?.thumbnail || recipe?.image}
                width={300}
                height={160}
                className="rounded-md"
                alt=""
              />

              <h4 className="my-2">{recipe.name}</h4>

              <div className="py-2 flex justify-between text-xs text-gray-500">
                <span>⭐️ {recipe.rating}</span>
                <span>By: {recipe.author}</span>
              </div>
            </div>{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
