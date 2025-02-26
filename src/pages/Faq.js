import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "What is Clofer?",
    answer: "Clofer is a small business based in Mumbai that specializes in selling chikankari clothing.",
  },
  {
    question: "Where is Clofer located?",
    answer: "Clofer is based in Mumbai, India. However, all orders are shipped from Lucknow, the heart of authentic chikankari craftsmanship.",
  },
  {
    question: "What type of products does Clofer offer?",
    answer: "We offer a variety of chikankari clothing, known for its elegant and intricate embroidery.",
  },
  {
    question: "How can I place an order?",
    answer: "You can place an order by visiting our Instagram page or contacting us directly through WhatsApp. Simply browse our collection, choose your preferred design, and reach out to us with your order details.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we offer international shipping for select products. For international orders, please contact us directly on WhatsApp at +91 9820380401.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods, including UPI, bank transfers, and other digital payment options for a seamless and secure transaction experience.",
  },
  {
    question: "Which delivery service does Clofer use?",
    answer: "We ship all our orders using Shiprocket, ensuring timely and reliable delivery to your location.",
  },
  {
    question: "How long does delivery take?",
    answer: "Delivery typically takes 5-10 business days within India, excluding Thursdays and Sundays. Please note that these days are not counted in the delivery timeline.",
  },
  {
    question: "What is your return and exchange policy?",
    answer: "We are a small business, and hence, we do not offer exchanges or returns. However, if there is a manufacturing defect, we require a 360° video of the unboxing with the docket number clearly visible. This is necessary for us to process any claims.",
  },
  {
    question: "How can I contact Clofer for customer support?",
    answer: "You can reach out to us through our Instagram page or via WhatsApp at +91 9820380401 for any queries or assistance.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 text-center">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-playfair font-semibold tracking-wide text-customPlum dark:text-darkText">
          ❓ Frequently Asked Questions ❓
        </h2>
        {/* Decorative Underline */}
        <div className="w-24 mx-auto mt-2 border-b-4 border-customPlum dark:border-darkAccent"></div>
      </div>

      {/* FAQ Section */}
      <div className="mt-6 space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-customPlum dark:border-darkAccent bg-customLavender dark:bg-darkBg p-4 md:p-6 rounded-2xl shadow-md text-left"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center text-customPlum dark:text-darkAccent font-semibold text-lg md:text-xl"
            >
              {item.question}
              {openIndex === index ? (
                <FaChevronUp className="text-customPlum dark:text-darkAccent" />
              ) : (
                <FaChevronDown className="text-customPlum dark:text-darkAccent" />
              )}
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  className="mt-2 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
