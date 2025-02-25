import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 text-center relative">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-playfair font-semibold tracking-wide text-customPlum dark:text-darkText">
          📜 Terms of Service 📜
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
        {/* Introduction */}
        <p className="text-lg md:text-xl font-playfair italic text-customPlum dark:text-darkAccent text-center">
          "Your Trust, Our Commitment."
        </p>

        <p className="mt-4 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed text-center">
          Welcome to <span className="text-customPlum dark:text-darkAccent font-semibold">Clofer</span>. By using our website{" "}
          <span className="font-semibold">www.shopclofer.in</span> and placing an order, you agree to our Terms of Service.
        </p>

        {/* Eligibility */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            🎂 Eligibility
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            You must be at least <span className="font-semibold">18 years old</span> to make a purchase.
          </p>
        </div>

        {/* Products & Pricing */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            🛍️ Products & Pricing
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            We specialize in <span className="font-semibold">Chikankari clothing</span>. All prices are displayed in{" "}
            <span className="font-semibold">Indian Rupees (INR)</span> and are subject to change.
          </p>
        </div>

        {/* Orders & Payment */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            💳 Orders & Payment
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            Payments can be made via <span className="font-semibold">UPI</span> or <span className="font-semibold">Cash on Delivery (COD)</span>. Orders are confirmed based on availability.
          </p>
        </div>

        {/* Shipping & Delivery */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            🚚 Shipping & Delivery
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            We ship across India with <span className="font-semibold">Delhivery One</span>, covering{" "}
            <span className="font-semibold">18,600+ pin codes</span>. Shipping costs and estimated times will be shown at checkout.
          </p>
        </div>

        {/* Returns & Exchanges */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            ↩️ Returns & Exchanges
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            We do not accept returns. Please refer to our{" "}
            <a href="/return-exchange-policy" className="text-customPlum dark:text-darkAccent font-semibold">
              Return & Exchange Policy
            </a>
            .
          </p>
        </div>

        {/* Cancellations */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            ❌ Cancellations
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            Orders can be cancelled within <span className="font-semibold">6 hours</span> of placing them. Once shipped, cancellation is not possible.
          </p>
        </div>

        {/* Intellectual Property */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            📜 Intellectual Property
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            All content, logos, and images on <span className="font-semibold">Clofer</span> are protected under intellectual property laws. Unauthorized use is prohibited.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            ⚖️ Limitation of Liability
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            Clofer is not responsible for any direct, indirect, or incidental damages resulting from website use or purchases.
          </p>
        </div>

        {/* Privacy Policy */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            🔒 Privacy Policy
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            Your data is protected under our{" "}
            <a href="/privacy-policy" className="text-customPlum dark:text-darkAccent font-semibold">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        {/* Governing Law */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            ⚖️ Governing Law
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            These terms are governed by the laws of <span className="font-semibold">Mumbai, India</span>.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            📞 Contact Us
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            - <span className="font-semibold">Email:</span> shopclofer@gmail.com <br />
            - <span className="font-semibold">Phone:</span> +91 9820380401
          </p>
        </div>

        {/* Thank You Message */}
        <p className="mt-8 text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent text-center">
          Thank you for choosing Clofer! 🎉
        </p>
      </motion.div>
    </div>
  );
};

export default TermsOfService;
