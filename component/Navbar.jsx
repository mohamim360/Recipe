import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/images/logo.png"
import SignInOut from "./auth/SignOut";
import CustomLink from "./CustomLink";
const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between py-6">
        <Link href="/">
          <Image
            src={logo}
            alt=""
            width={123}
            height={40}
            className="object-cover h-[40px]"
          />
        </Link>

        <ul className="flex gap-4 text-sm text-gray-500">
          <li className="py-2">
            <CustomLink path="/">Home</CustomLink>
          </li>

          <li className="py-2">
            <CustomLink path="/recipe">Recipe</CustomLink>
          </li>

          <li className="py-2">
            <CustomLink path="/about">About us</CustomLink>
          </li>

          <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
            <SignInOut/>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
