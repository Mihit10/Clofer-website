import { motion } from "framer-motion";
import { FaTruck, FaMapMarkerAlt, FaClock, FaRupeeSign, FaSearchLocation, FaHeadset } from "react-icons/fa";

const ShippingPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 text-center relative">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-playfair font-semibold tracking-wide text-customPlum dark:text-darkText">
          🚚 Shipping Policy 🚚
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
        {/* Shipping Partner */}
        <div className="mt-4">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            <FaTruck className="mr-2" /> Shipping Partner
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            We have partnered with <span className="font-semibold">Shiprocket</span> to ensure reliable and timely delivery of your orders.
          </p>
        </div>

        {/* Shipping Locations */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            <FaMapMarkerAlt className="mr-2" /> Shipping Locations
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            We currently ship across <span className="font-semibold">all locations within India</span>.
          </p>
        </div>

        {/* Shipping Time */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            <FaClock className="mr-2" /> Shipping Time
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            Orders are typically processed within <span className="font-semibold">1-3 business days</span>.
          </p>
          <ul className="mt-2 list-disc list-inside text-gray-800 dark:text-gray-300 text-base md:text-lg font-poppins">
            <li>
              <span className="font-semibold">Metropolitan Cities:</span> 3-5 business days (Thursday & Sunday not included)
            </li>
            <li>
              <span className="font-semibold">Other Regions:</span> 5-7 business days (Thursday & Sunday not included)
            </li>
          </ul>
        </div>

        {/* Shipping Charges */}
        <div className="mt-6">
        <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            <FaRupeeSign className="mr-2" /> Shipping Charges
        </h3>
        <ul className="mt-2 list-disc list-inside text-gray-800 dark:text-gray-300 text-base md:text-lg font-poppins">
            <li>
            <span className="font-semibold">Prepaid Orders:</span> Standard shipping charges will be calculated at checkout based on your location.
            </li>
            <li>
            <span className="font-semibold">Cash on Delivery (COD):</span> We offer COD with a mandatory advance payment of <span className="font-semibold">₹500</span> to confirm your order. The remaining amount must be paid in cash upon delivery.
            </li>
        </ul>
        </div>


        {/* Order Tracking */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            <FaSearchLocation className="mr-2" /> Order Tracking
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            Once your order is dispatched, you will receive a tracking link via <span className="font-semibold">email/SMS</span> to monitor the status of your shipment in real-time.
          </p>
        </div>

        {/* Delays & Issues */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            ⚠️ Delays & Issues
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            While we strive to deliver on time, delays may occur due to unforeseen circumstances such as <span className="font-semibold">weather conditions, strikes, or operational challenges</span>. We appreciate your patience and understanding.
          </p>
        </div>

        {/* Customer Support */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            <FaHeadset className="mr-2" /> Customer Support
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            For any shipping-related queries or concerns, feel free to reach out to us at:
          </p>
          <a
            href="tel:+919820380401"
            className="mt-2 text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent hover:underline block"
          >
            📞 +91 9820380401
          </a>
        </div>

        {/* Thank You Message */}
        <p className="mt-8 text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent text-center">
          Thank you for choosing Clofer! 🎉 <br />
          <span className="text-gray-800 dark:text-gray-300 text-lg">We look forward to serving you! 💜</span>
        </p>
      </motion.div>
    </div>
  );
};

export default ShippingPolicy;
