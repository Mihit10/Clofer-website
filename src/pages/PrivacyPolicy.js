import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 text-center relative">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-playfair font-semibold tracking-wide text-customPlum dark:text-darkText">
          🔒 Privacy Policy 🔒
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
          "Your Privacy, Our Priority."
        </p>

        <p className="mt-4 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed text-center">
          At <span className="text-customPlum dark:text-darkAccent font-semibold">Clofer</span>, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
        </p>

        {/* Information We Collect */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            📊 Information We Collect
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            We collect personal information when you:
          </p>
          <ul className="list-disc ml-6 mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300">
            <li>Place an order on <span className="font-semibold">www.shopclofer.in</span></li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us for inquiries</li>
            <li>Engage with us on social media</li>
          </ul>
        </div>

        {/* How We Use Your Information */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            🛠️ How We Use Your Information
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            We use your information to:
          </p>
          <ul className="list-disc ml-6 mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300">
            <li>Process and fulfill your orders</li>
            <li>Improve your shopping experience</li>
            <li>Provide customer support</li>
            <li>Send updates, offers, and promotions (only if you opt-in)</li>
          </ul>
        </div>

        {/* Payment Security */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            🔐 Payment Security
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            We do not store your payment details. All transactions are processed securely through trusted payment gateways.
          </p>
        </div>

        {/* Data Sharing & Protection */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            🔄 Data Sharing & Protection
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            We do not sell, trade, or share your personal information with third parties, except when required for order fulfillment or legal obligations.
          </p>
        </div>

        {/* Cookies & Tracking */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            🍪 Cookies & Tracking
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            We use cookies to enhance your browsing experience. You can control cookie settings in your browser.
          </p>
        </div>

        {/* Third-Party Services */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            🌐 Third-Party Services
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            We may use third-party analytics and marketing services that collect browsing data to improve our website experience.
          </p>
        </div>

        {/* Your Rights */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            🛡️ Your Rights
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc ml-6 mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300">
            <li>Request access to your personal data</li>
            <li>Ask for corrections or deletions</li>
            <li>Opt out of promotional emails</li>
          </ul>
        </div>

        {/* Updates to Privacy Policy */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            🔄 Updates to This Policy
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            We may update this Privacy Policy from time to time. Changes will be reflected on this page.
          </p>
        </div>

        {/* Contact Us */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            📞 Contact Us
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            If you have any questions about our Privacy Policy, contact us at:
          </p>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300">
            - <span className="font-semibold">Email:</span> shopclofer@gmail.com <br />
            - <span className="font-semibold">Phone:</span> +91 9820380401
          </p>
        </div>

        {/* Thank You Message */}
        <p className="mt-8 text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent text-center">
          Thank you for trusting Clofer! 💜
        </p>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
