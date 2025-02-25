import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 text-center relative">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-playfair font-semibold tracking-wide text-customPlum dark:text-darkText">
          📞 Contact Us 📞
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
        {/* Contact Info */}
        <div className="text-center">
          <p className="text-lg md:text-xl font-playfair italic text-customPlum dark:text-darkAccent">
            "We’re here to help!"
          </p>
          <p className="mt-4 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed">
            Have questions about our products? Need assistance with an order? Reach out to us through the following channels:
          </p>
        </div>

        {/* Contact Methods */}
        <div className="mt-6 space-y-6">
          {/* WhatsApp & Call */}
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-customPlum dark:text-darkAccent text-2xl" />
            <a
              href="tel:+919820380401"
              className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent hover:underline"
            >
              +91 9820380401
            </a>
            <span className="text-gray-800 dark:text-gray-300">(WhatsApp / Call)</span>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-customPlum dark:text-darkAccent text-2xl" />
            <a
              href="mailto:shopclofer@gmail.com"
              className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent hover:underline"
            >
              shopclofer@gmail.com
            </a>
          </div>

          {/* Instagram */}
          <div className="flex items-center space-x-3">
            <FaInstagram className="text-customPlum dark:text-darkAccent text-2xl" />
            <a
              href="https://www.instagram.com/clofer.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent hover:underline"
            >
              @clofer.in
            </a>
          </div>
        </div>

        {/* Optional Business Hours */}
        <div className="mt-8 text-center">
          <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent">
            🕒 Business Hours
          </h3>
          <p className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300">
            Monday - Saturday: 10 AM - 9 PM  
            <br /> Sunday: Closed  
          </p>
        </div>

        {/* Thank You Message */}
        <p className="mt-8 text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent text-center">
          Thank you for choosing Clofer! 💜
        </p>
      </motion.div>
    </div>
  );
};

export default ContactUs;
