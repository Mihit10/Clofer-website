import { motion } from "framer-motion";

const OurStory = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 text-center relative">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-playfair font-semibold tracking-wide text-customPlum dark:text-darkText">
          ✨ Our Story ✨
        </h2>
        {/* Decorative Underline */}
        <div className="w-24 mx-auto mt-2 border-b-4 border-customPlum dark:border-darkAccent"></div>
      </div>

      {/* Content Box with Border & Shadow */}
      <motion.div
        className="border border-customPlum dark:border-darkAccent bg-customLavender dark:bg-darkBg p-6 md:p-8 rounded-2xl shadow-md text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p className="text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed tracking-wide">
          Clofer wasn’t born in a boardroom or as a business strategy—it started with a feeling. A feeling of awe, respect, and admiration for{" "}
          <span className="text-customPlum dark:text-darkAccent font-semibold">Chikankari</span>, 
          a craft passed down through generations, with each stitch carrying whispers of history.
        </p>

        <p className="mt-4 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
          For <span className="text-customPlum dark:text-darkAccent font-semibold">Stuti Desai</span>, 
          it all began the moment she held an authentic Chikankari piece in her hands. 
          The embroidery was unlike anything else—delicate yet intricate, soft yet deeply expressive. 
          It wasn’t just fabric; it was art. It was culture. It was a story.
        </p>

        <p className="mt-4 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
          But as she explored more, she saw a painful reality.{" "}
          <span className="text-customPlum dark:text-darkAccent font-semibold">Machine-made replicas </span> 
          had flooded the market, erasing the soul of true craftsmanship. The artisans—who had spent{" "}
          <span className="text-customPlum dark:text-darkAccent font-semibold">years mastering the delicate hand-embroidery</span>—were being overlooked.
        </p>

        <p className="mt-4 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
          This wasn’t just about fashion. It was about{" "}
          <span className="text-customPlum dark:text-darkAccent font-semibold">preserving an art form</span>, 
          <span className="text-customPlum dark:text-darkAccent font-semibold"> honoring the artisans</span>, and{" "}
          <span className="text-customPlum dark:text-darkAccent font-semibold">ensuring that true craftsmanship finds its way to those who cherish it</span>.
        </p>

        <p className="mt-4 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
          That’s why <span className="text-customPlum dark:text-darkAccent font-semibold">Clofer</span> was born. 
          With a commitment to{" "}
          <span className="text-customPlum dark:text-darkAccent font-semibold">authenticity and elegance</span>, 
          Stuti carefully curated handcrafted pieces—each one carrying the legacy of skilled artisans, woven with tradition and love.
        </p>

        {/* Elegant Quote */}
        <p className="mt-6 text-lg md:text-xl font-playfair italic text-customPlum dark:text-darkAccent text-center">
          "Every piece has a story, every design has meaning, and every stitch carries the warmth of human touch."
        </p>

        {/* Pulsating Final Line */}
        <p className="mt-4 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed text-center">
          For Stuti, <span className="text-customPlum dark:text-darkAccent font-semibold">Clofer</span> isn’t just a brand—it’s a promise. 
          A promise to cherish, protect, and celebrate the timeless beauty of Chikankari,{" "}
          <motion.span 
            className="text-customPlum dark:text-darkAccent font-semibold"
            animate={{ textShadow: ["0px 0px 5px #d8b4fe", "0px 0px 15px #d8b4fe", "0px 0px 5px #d8b4fe"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            one exquisite outfit at a time.
          </motion.span>
        </p>
      </motion.div>
    </div>
  );
};

export default OurStory;
