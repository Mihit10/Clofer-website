import { motion } from "framer-motion";

const ReturnExchange = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 text-center relative">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-playfair font-semibold tracking-wide text-customPlum dark:text-darkText">
          🔄 CLOFER RETURN & EXCHANGE POLICY 🔄
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
          "Ensuring quality, respecting craftsmanship."
        </p>

        <p className="mt-4 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed text-center">
          At Clofer, we take great care in maintaining the quality of our products. However, if you receive a product with a <strong>manufacturing defect</strong>, we offer a return or exchange under the following conditions:
        </p>

        {/* Eligibility for Return/Exchange */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            ✅ Eligibility for Return/Exchange
          </h3>
          <ul className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed list-disc list-inside">
            <li><strong>Manufacturing Defects Only</strong> – Returns/exchanges are accepted <strong>strictly</strong> for manufacturing defects. We do <strong>not</strong> accept returns for <strong>size issues, color variations, or buyer’s remorse</strong>.</li>
            <li><strong>No Damage Due to Usage</strong> – The product must be <strong>unused, unwashed, and in its original condition</strong> with all tags intact.</li>
          </ul>
        </div>

        {/* Mandatory Requirements */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            📜 Proof Required for Returns/Exchanges
          </h3>
          <ul className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed list-disc list-inside">
            <li><strong>Full Unboxing Video</strong> – A <strong>clear, unedited video</strong> of the product being unboxed is required as proof of defect. It must start from opening the package, showing the <strong>docket number</strong>, and capturing the issue clearly.</li>
            <li><strong>Docket Number</strong> – The <strong>shipping docket number must be visible</strong> in the video for verification.</li>
            <li><strong>Timely Reporting</strong> – Report any defect <strong>within 24 hours of delivery</strong> via email at <a href="mailto:shopclofer@gmail.com" className="text-customPlum dark:text-darkAccent font-semibold">shopclofer@gmail.com</a> or WhatsApp at <a href="tel:+919820380401" className="text-customPlum dark:text-darkAccent font-semibold">+91 9820380401</a> with the required proof.</li>
          </ul>
        </div>

        {/* Non-Eligibility */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            ❌ Non-Eligible Returns/Exchanges
          </h3>
          <ul className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed list-disc list-inside">
            <li>Minor variations in <strong>embroidery, color, or design</strong> due to the handmade nature of Chikankari products.</li>
            <li>Damage caused by <strong>improper handling, washing, or wear and tear</strong>.</li>
            <li>Incorrect size selection by the customer.</li>
          </ul>
        </div>

        {/* Process for Return/Exchange */}
        <div className="mt-6">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent flex items-center">
            🔄 Return & Exchange Process
          </h3>
          <ul className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed list-decimal list-inside">
            <li><strong>Submit Request</strong> – Contact us via <strong>email or WhatsApp</strong> with the full <strong>unboxing video and docket number</strong> within <strong>24 hours</strong> of delivery.</li>
            <li><strong>Verification</strong> – Our team will review the proof and confirm if the return/exchange is approved.</li>
            <li><strong>Return Shipping</strong> – If approved, you must ship the product back using a <strong>trackable courier service</strong>. The <strong>return shipping cost is borne by the customer</strong>.</li>
            <li><strong>Exchange/Refund</strong> – Once received and inspected, we will process an <strong>exchange or refund</strong>. Refunds are <strong>initiated within 5-7 business days</strong> after approval.</li>
          </ul>
        </div>

        {/* Contact & Final Note */}
        <p className="mt-6 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed text-center">
          For any queries, feel free to reach out to us at <a href="tel:+919820380401" className="text-customPlum dark:text-darkAccent font-semibold">+91 9820380401</a>.
        </p>

        {/* Thank You Message */}
        <p className="mt-8 text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent text-center">
          Thank you for choosing Clofer! ✨ <br /> <span className="text-gray-800 dark:text-gray-300 text-lg">We appreciate your trust. 💖</span>
        </p>
      </motion.div>
    </div>
  );
};

export default ReturnExchange;
