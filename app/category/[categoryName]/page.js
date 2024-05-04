import { getRecipeByCategory } from "@/db/queries";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { categoryName } = params;

  return {
    title: categoryName,
  };
}

const categoryPage = async ({ params: { categoryName } }) => {
  console.log(categoryName);
  if (categoryName == "Breakfast%26Brunch") {
    categoryName = "Breakfast & Brunch";
  }
  const categoryInfo = await getRecipeByCategory(categoryName);
  console.log(categoryInfo);
  return (
    <main>
      <section class="container py-8">
        <div>
          <h3 class="font-semibold text-xl">{categoryName}</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
            {categoryInfo.map((info) => (
              <Link key={info.id} href={`/details/${info.id}`}>
                {" "}
                <div className="card">
                  {/* Use correct attribute names */}
                  <Image
                    src={info?.thumbnail}
                    width={300}
                    height={160}
                    className="rounded-md"
                    alt=""
                  />
                  <h4 className="my-2">{info.name}</h4>
                  <div className="py-2 flex justify-between text-xs text-gray-500">
                    <span>⭐️ {info.rating}</span>
                    <span>By: {info.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default categoryPage;
