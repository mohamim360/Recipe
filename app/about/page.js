/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import logo from "@/app/assets/images/recipes.jpg"
import Contact from '@/component/contact';
const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center justify-center">
          <Image
            src={logo}
						width={300}
						height={300}
            alt="Recipe Logo"
            className="w-30 h-30 mr-4"
          />
          <h1 className="text-3xl font-semibold text-gray-800">About Us</h1>
        </div>
        <p className="text-gray-700 mt-4">
          Welcome to our recipe website! We are passionate about cooking and
          sharing delicious recipes with food enthusiasts like you. Our mission
          is to inspire you to get creative in the kitchen and explore new
          flavors and cuisines.
        </p>
        <p className="text-gray-700 mt-4">
          Our team is comprised of experienced chefs and food bloggers who are
          dedicated to curating the best recipes for you. Whether you're a
          seasoned chef or a beginner, we have something for everyone.
        </p>
        <p className="text-gray-700 mt-4">
          Feel free to browse through our collection of recipes and discover
          your next culinary adventure. Don't forget to check out our blog for
          tips, tricks, and behind-the-scenes stories.
        </p>
        <p className="text-gray-700 mt-4">
          Thank you for being a part of our community. Happy cooking!
        </p>
        <Contact/>
      </div>
      
    </div>
  );
};

export default AboutPage;
