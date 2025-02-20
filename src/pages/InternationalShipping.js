import { motion } from "framer-motion";

const InternationalShipping = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 text-center relative">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-playfair font-semibold tracking-wide text-customPlum dark:text-darkText">
          🌍 Clofer International Shipping ✨
        </h2>
        {/* Decorative Underline */}
        <div className="w-24 mx-auto mt-2 border-b-4 border-customPlum dark:border-darkAccent"></div>
      </div>

      {/* Content Box */}
      <motion.div
        className="border border-customPlum dark:border-darkAccent bg-customLavender dark:bg-darkBg p-6 md:p-8 rounded-2xl shadow-md text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Intro Text */}
        <p className="text-lg md:text-xl font-playfair italic text-customPlum dark:text-darkAccent text-center">
          "Bringing timeless elegance to every corner of the world."
        </p>

        <p className="mt-4 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed text-center">
          Great news! Clofer now ships our exquisite <strong>Chikankari</strong> pieces worldwide. No matter where you are, you can experience the elegance and craftsmanship of our collections.
        </p>

        {/* Shipping Details */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center justify-center">
            📦 How to Place an International Order?
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed text-center">
            For shipping details, pricing, and delivery timelines, reach out to us on WhatsApp.
          </p>
          <p className="mt-3 text-lg md:text-xl font-semibold text-center">
            📲 <a href="https://wa.me/919820380401?text=Hello!%20I%27m%20interested%20in%20your%20Chikankari%20pieces%20and%20would%20like%20to%20know%20more%20about%20international%20shipping%20options.%20Thank%20you!" target="_blank" rel="noreferrer" className="text-customPlum dark:text-darkAccent underline">+91 9820380401</a>
          </p>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed text-center">
            Our team is happy to assist you and ensure a smooth shopping experience.
          </p>
        </div>

        {/* Closing Note */}
        <p className="mt-8 text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent text-center">
          We look forward to bringing a touch of tradition and elegance to your wardrobe, no matter where you are in the world! ✨
        </p>
      </motion.div>
    </div>
  );
};

export default InternationalShipping;
