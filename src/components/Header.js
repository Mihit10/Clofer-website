import { useState, useEffect } from "react";
import { Search, MessageCircle, X } from "lucide-react";
const logo = "/assets/clofer_textless_logo.png";
const logo_inv = "/assets/clofer_textless_logo_inverted.png";
import { motion, AnimatePresence } from "framer-motion"; // For animations

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [products, setProducts] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Mobile search toggle

  // Load Products from JSON File
  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        const allProducts = Object.values(data).flat();
        setProducts(allProducts);
      })
      .catch((error) => console.error("Error loading product data:", error));
  }, []);

  // Search function
  const handleSearch = (query) => {
    setSearchQuery(query);
    const lowerCaseQuery = query.toLowerCase();

    if (lowerCaseQuery.length > 0) {
      const results = products.filter(
        (item) =>
          item.name.toLowerCase().includes(lowerCaseQuery) ||
          item.tags.some((tag) => tag.toLowerCase().includes(lowerCaseQuery))
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
  };

  // **Fix:** When clicking X, search query should clear properly
  const handleCloseSearch = () => {
    setSearchQuery(""); // Clear text
    setFilteredResults([]); // Remove suggestions
    setIsSearchOpen(false);
  };

  // **Fix:** Selecting a product should not show "No products found"
  const handleSelectProduct = (name) => {
    setSearchQuery(name);
    setFilteredResults([]); // Hide dropdown after selection
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white dark:bg-darkSubtle text-customPlum dark:text-darkText px-6 py-1 flex items-center justify-between shadow-lg border-b border-gray-300 dark:border-gray-700 sticky top-0 z-50">

        
        {/* Left Side - Logo & Brand Name */}
        <div className="flex items-center gap-3">
        <div className="h-16 md:h-18 transition-all duration-300">
          {/* Light Mode Logo */}
            <img
              src={logo}
              alt="Clofer Logo"
              className="h-full block dark:hidden"
            />

            {/* Dark Mode Logo (Inverted) */}
            <img
              src={logo_inv}
              alt="Clofer Logo Dark Mode"
              className="h-full hidden dark:block"
            />
          </div>

          <span className="font-callove text-xl md:text-2xl font-semibold">
            Clofer
          </span>
        </div>

        {/* Right Side - Search Icon & WhatsApp */}
        <div className="flex items-center gap-4">
          {/* Search Icon (Visible Only on Mobile) */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="block md:hidden p-2 rounded-full bg-customPlum dark:bg-darkAccent text-white dark:text-darkBg transition-all duration-300"
          >
            {isSearchOpen ? <X size={20} /> : <Search size={20} />}
          </button>

          {/* Search Bar (Hidden on Mobile, Visible on Desktop) */}
          <div className="relative hidden md:block w-64">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="bg-gray-100 dark:bg-gray-800 text-customPlum dark:text-darkText border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-customPlum w-full"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" size={18} />

            {/* Search Suggestions (Desktop View) */}
            <AnimatePresence>
              {searchQuery && filteredResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-12 left-0 w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-50"
                >
                  {filteredResults.map((item) => (
                    <div
                      key={item.id}
                      className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer text-sm transition-all duration-200"
                      onClick={() => handleSelectProduct(item.name)}
                    >
                      {item.name}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* WhatsApp Icon (With Margin) */}
          <a
            href="https://wa.me/919820380401?text=Hey!%20I'm%20visiting%20your%20website%20and%20have%20a%20query."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-customPlum dark:bg-darkAccent text-white dark:text-darkBg p-2 rounded-full transition-all duration-300 hover:scale-105 mr-3"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </header>

      {/* Search Bar (Visible Only When Clicked on Mobile) */}
      {isSearchOpen && (
        <div className="w-full px-6 py-2 bg-gray-100 dark:bg-darkBg border-b border-gray-300 dark:border-gray-700 shadow-sm">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full bg-white dark:bg-gray-900 text-customPlum dark:text-darkText border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-customPlum"
            />
            
            {/* X Button to Clear Search (Fix: Clears text properly now) */}
            {searchQuery && (
              <button
                onClick={handleCloseSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
              >
                <X size={16} />
              </button>
            )}

            {/* Search Suggestions (Mobile View) */}
            <AnimatePresence>
              {searchQuery && filteredResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-2 w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-50"
                >
                  {filteredResults.map((item) => (
                    <div
                      key={item.id}
                      className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer text-sm transition-all duration-200"
                      onClick={() => handleSelectProduct(item.name)}
                    >
                      {item.name}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
