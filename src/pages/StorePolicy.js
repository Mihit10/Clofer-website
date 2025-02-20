import { motion } from "framer-motion";

const StorePolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 text-center relative">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-playfair font-semibold tracking-wide text-customPlum dark:text-darkText">
          📜 Store Policy 📜
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
        {/* Tagline */}
        <p className="text-lg md:text-xl font-playfair italic text-customPlum dark:text-darkAccent text-center">
          "Where Tradition Meets Contemporary Elegance"
        </p>

        <p className="mt-4 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed text-center">
          Experience the exquisite artistry of{" "}
          <span className="text-customPlum dark:text-darkAccent font-semibold">Indian Chikankari Fashion</span> at Clofer. 
          Where 'Tradition meets Contemporary Elegance.'
        </p>

        {/* Order Confirmation */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            🛍️ Order Confirmation & Availability
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            Ask about product availability after confirming your order. Please forward the description along with a pic to book your order.
          </p>
        </div>

        {/* Payment Mode */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            💳 Payment Mode
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            Orders are booked upon payment via <span className="font-semibold">UPI</span> or <span className="font-semibold">bank transfer</span>.
          </p>
        </div>

        {/* Order Processing & Delivery */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            🚚 Order Processing & Delivery
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            After payment, expect <span className="font-semibold">2 days</span> for processing and <span className="font-semibold">6-7 business days</span> for delivery. Current situations may cause delays.
          </p>
        </div>

        {/* Returns & Exchanges */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            ↩️ Returns & Exchanges
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            We accept exchanges for <span className="font-semibold">defects only</span>. Create a <span className="font-semibold">360° opening video</span> with the docket number for exchanges. No sharp objects, please.
          </p>
        </div>

        {/* Color Variation */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            🎨 Color Variation
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            Due to monitor differences, colors may slightly vary. <span className="font-semibold">We do not exchange for color differences.</span>
          </p>
        </div>

        {/* Handloom & Uniqueness */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            ✨ Handloom & Uniqueness
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            Minor flaws and misprints are unique characteristics of handloom products. We do not accept complaints for removable stains.
          </p>
        </div>

        {/* Thank You Message */}
        <p className="mt-8 text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent text-center">
          Thank you for choosing Clofer! 🎉 <br /> <span className="text-gray-800 dark:text-gray-300 text-lg">HAPPY SHOPPING 🥳</span>
        </p>
      </motion.div>
    </div>
  );
};

export default StorePolicy;
