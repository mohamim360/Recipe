const { default: Link } = require("next/link");

const Category = () => {
  return (
      <div className="col-span-12 md:col-span-3">
        <h3 className="font-bold text-xl">Recipes</h3>
        <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
          <li>
            <Link href="/category/Breakfast&Brunch">Breakfast & Brunch</Link>
          </li>
          <li>
            <Link href="/category/Dessert">Dessert</Link>
          </li>
        </ul>
      </div>

  );
};

export default Category;
