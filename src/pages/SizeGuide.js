import { motion } from "framer-motion";

const SizeGuide = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-16 text-center relative">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-playfair font-semibold tracking-wide text-customPlum dark:text-darkText">
          📏 Size Guide 📏
        </h2>
        {/* Decorative Underline */}
        <div className="w-24 mx-auto mt-2 border-b-4 border-customPlum dark:border-darkAccent"></div>
      </div>

      {/* Size Chart */}
      <motion.div
        className="border border-customPlum dark:border-darkAccent bg-customLavender dark:bg-darkBg p-6 md:p-8 rounded-2xl shadow-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-customPlum dark:border-darkAccent">
            <table className="w-full border-collapse rounded-2xl">
            <thead>
              <tr className="bg-customPlum text-white dark:bg-darkAccent text-lg">
                <th className="border border-customDeepPlum dark:border-darkAccent dark:border-r-darkSubtle p-3">Size</th>
                <th className="border border-customDeepPlum dark:border-darkAccent dark:border-r-darkSubtle p-3">Chest</th>
                <th className="border border-customDeepPlum dark:border-darkAccent dark:border-r-darkSubtle p-3">Waist</th>
                <th className="border border-customDeepPlum dark:border-darkAccent p-3">Hip</th>
              </tr>
            </thead>
            <tbody className="text-customPlum dark:text-darkText font-poppins">
              <tr>
                <td className="border border-customDeepPlum dark:border-darkAccent p-3">S</td>
                <td className="border border-customDeepPlum dark:border-darkAccent p-3">36</td>
                <td className="border border-customDeepPlum dark:border-darkAccent p-3">32</td>
                <td className="border border-customDeepPlum dark:border-darkAccent p-3">39</td>
              </tr>
              <tr>
                <td className="border border-customDeepPlum dark:border-darkAccent p-3">M</td>
                <td className="border border-customDeepPlum dark:border-darkAccent p-3">38</td>
                <td className="border border-customDeepPlum dark:border-darkAccent p-3">34</td>
                <td className="border border-customDeepPlum dark:border-darkAccent p-3">41</td>
              </tr>
              <tr>
                <td className="border border-customDeepPlum dark:border-darkAccent p-3">L</td>
                <td className="border border-customDeepPlum dark:border-darkAccent p-3">40</td>
                <td className="border border-customDeepPlum dark:border-darkAccent p-3">36</td>
                <td className="border border-customDeepPlum dark:border-darkAccent p-3">43</td>
              </tr>
              <tr>
                <td className="border border-customDeepPlum dark:border-darkAccent p-3">XL</td>
                <td className="border border-customDeepPlum dark:border-darkAccent p-3">42</td>
                <td className="border border-customDeepPlum dark:border-darkAccent p-3">38</td>
                <td className="border border-customDeepPlum dark:border-darkAccent p-3">45</td>
              </tr>
              <tr>
                <td className="border border-customDeepPlum dark:border-darkAccent p-3">XXL</td>
                <td className="border border-customDeepPlum dark:border-darkAccent p-3">44</td>
                <td className="border border-customDeepPlum dark:border-darkAccent p-3">40</td>
                <td className="border border-customDeepPlum dark:border-darkAccent p-3">47</td>
              </tr>
              <tr>
                <td className="border border-customDeepPlum dark:border-darkAccent p-3 font-semibold">
                  Plus Sizes
                </td>
                <td className="border border-customDeepPlum dark:border-darkAccent p-3" colSpan="3">
                  46, 48, 50, 52
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Size Disclaimer */}
      <motion.div
        className="mt-8 border border-customPlum dark:border-darkAccent bg-customLavender dark:bg-darkBg p-6 md:p-8 rounded-2xl shadow-md text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h3 className="text-lg md:text-xl font-semibold text-customPlum dark:text-darkAccent text-center">
          ⚠️ Please Note ⚠️
        </h3>
        <p className="mt-4 text-base md:text-lg font-poppins text-gray-800 dark:text-gray-300 leading-relaxed text-center">
          We are a <span className="font-semibold">small business</span> and <span className="font-semibold">do not accept exchanges/returns for size issues</span>.  
          Please order the <span className="font-semibold">same size</span> or <span className="font-semibold">one size up</span> (you can alter it later) for a better fit.  
          <br />
          <span className="italic">Thank you for understanding! 🙏</span>
        </p>
      </motion.div>
    </div>
  );
};

export default SizeGuide;
