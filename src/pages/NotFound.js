import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Main Text */}
      <h1 className="text-4xl md:text-5xl font-playfair font-bold text-customPlum dark:text-darkText">
        Oops! This kurti seems to be unstitched...
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 font-poppins">
        Looks like the page you're looking for is lost in the embroidery. 
        Let's get you back to something beautiful. 💜
      </p>

      {/* Button to Home */}
      <Link to="/" className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-customPlum dark:bg-darkAccent rounded-full shadow-md hover:bg-customDeepPlum dark:hover:bg-darkSubtle transition">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
