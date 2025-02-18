import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { div } from "framer-motion/client";

// ✅ Placeholder image path (must exist in public/assets/)
const placeholderImg = "/assets/placeholder.jpg";

const NewArrival = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8); // ✅ Start with 8 products
  const itemsPerLoad = 8; // ✅ Load 8 more each time
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 640);

  // ✅ Detect screen size for mobile vs desktop
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Load JSON from Public Folder
  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        if (data.new_arrivals) {
          setNewArrivals(data.new_arrivals);
        }
      })
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  return (
    <section className="px-4 py-10 md:px-8 lg:px-16">
        
      

      {/* ✅ Desktop View (NO CHANGES) */}
      {isDesktop ? (
      <div>
        {/* ✅ Section Heading */}
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-playfair font-semibold tracking-wide text-customPlum dark:text-darkText">
        ✨ Fresh New Arrivals, Discover the Latest Designs ✨
        </h2>
        <div className="w-24 mx-auto mt-2 border-b-4 border-customPlum dark:border-darkAccent"></div>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {newArrivals.slice(0, visibleCount).map((product) => {
            const imgSrc = product.img_path
              ? product.img_path.replace("src/assets/", "/assets/")
              : placeholderImg;

            return (
              <motion.div
                key={product.id}
                className="relative overflow-hidden bg-white dark:bg-darkSubtle rounded-lg shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* ✅ Best Seller Badge - Shimmer Effect */}
                <motion.span
                  className="absolute top-2 left-2 text-xs px-3 py-1 rounded-full shadow-md text-customPlum font-semibold"
                  style={{
                    backgroundImage: "linear-gradient(45deg, #FFD700, #FFA500, #FFD700)",
                    backgroundSize: "400% 400%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  New
                </motion.span>

                {/* ✅ Product Image */}
                <div className="cursor-pointer">
                  <img
                    src={imgSrc}
                    alt={product.name}
                    className="w-full h-48 sm:h-64 object-cover transition-all duration-300"
                    onError={(e) => {
                      console.error(`Error loading image for ${product.name}:`, e);
                      e.target.src = placeholderImg;
                    }}
                  />
                </div>

                {/* ✅ Product Info */}
                <div className="p-4">
                  <h3 className="text-sm sm:text-md md:text-lg font-semibold dark:text-darkText">{product.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    {product.description}
                  </p>

                  {/* ✅ Price Section (Desktop) */}
                  <div className="mt-1 sm:mt-2 flex items-center space-x-1 sm:space-x-2">
                    <span className="text-md sm:text-lg font-bold text-customPlum dark:text-darkAccent">
                      ₹{product.display_price}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500 line-through">
                      ₹{product.og_price}
                    </span>
                    <span className="text-[10px] bg-red-500 text-white px-2 py-1 rounded-full">
                      {Math.round(((product.og_price - product.display_price) / product.og_price) * 100)}% OFF
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      ) : (
        /* ✅ Mobile View (Strict Pattern: 2 Cards Side-by-Side + 1 Wide Card) */
        <div>
          {/* ✅ Section Heading */}
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-playfair font-semibold tracking-wide text-customPlum dark:text-darkText">
          ✨ Fresh New Arrivals ✨<br />✨ Discover the Latest Designs ✨
        </h2>
        <div className="w-24 mx-auto mt-2 border-b-4 border-customPlum dark:border-darkAccent"></div>
      </div>
        

        <div className="grid grid-cols-2 gap-5">
          {newArrivals.slice(0, visibleCount).map((product, index) => {
            const imgSrc = product.img_path
              ? product.img_path.replace("src/assets/", "/assets/")
              : placeholderImg;

            const isWideCard = index % 3 === 2; // Every 3rd card is full-width horizontal

            return (
              <motion.div
                key={product.id}
                className={`relative overflow-hidden bg-white dark:bg-darkSubtle rounded-lg shadow-lg flex ${
                  isWideCard ? "col-span-2 flex-row h-40" : "flex-col h-auto"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* ✅ Best Seller Badge - Optimized for Mobile */}
                <motion.span
                  className="absolute top-1.5 left-1.5 text-[10px] sm:text-xs px-2 py-0.5 rounded-full shadow-md text-customPlum font-semibold"
                  style={{
                    backgroundImage: "linear-gradient(45deg, #FFD700, #FFA500, #FFD700)",
                    backgroundSize: "400% 400%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  New
                </motion.span>


                {/* ✅ Product Image */}
                <div className={`${isWideCard ? "w-2/5 h-full" : "w-full"} max-h-40`}>
                  <img
                    src={imgSrc}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg transition-all duration-300"
                    onError={(e) => {
                      console.error(`Error loading image for ${product.name}:`, e);
                      e.target.src = placeholderImg;
                    }}
                  />
                </div>

                {/* ✅ Product Info */}
                <div className={`p-3 flex flex-col justify-between ${isWideCard ? "w-3/5" : ""}`}>
                  <h3 className="text-xs font-semibold dark:text-darkText">{product.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {product.description}
                  </p>

                  {/* ✅ Price Section (MOBILE) */}
                  <div className="mt-1 flex items-center space-x-1">
                    <span className="text-sm font-bold text-customPlum dark:text-darkAccent">
                      ₹{product.display_price}
                    </span>
                    <span className="text-xs text-gray-500 line-through">
                      ₹{product.og_price}
                    </span>
                    <span className="text-[9px] bg-red-500 text-white px-1.5 py-0.5 rounded-full">
                      {Math.round(((product.og_price - product.display_price) / product.og_price) * 100)}% OFF
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        </div>
      )}

      {/* ✅ View More Button */}
      {visibleCount < newArrivals.length && (
        <div className="text-center mt-6">
          <button
            onClick={() => setVisibleCount((prev) => prev + itemsPerLoad)}
            className="bg-customPlum dark:bg-darkAccent text-white px-6 py-2 text-md font-semibold rounded-lg shadow-md transition-all duration-300 hover:scale-105"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
};

export default NewArrival;
