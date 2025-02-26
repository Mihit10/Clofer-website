import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

const CategoryNavbar = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for dark mode on component mount and when theme changes
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    // Check initial state
    checkDarkMode();
    
    // Set up a mutation observer to detect dark mode changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  // Categories with support for different icons in dark mode
  const categories = [
    { 
      id: '', 
      name: 'Home', 
      icon: null, 
      isHome: true 
    },
    { 
      id: 'short-kurti', 
      name: 'Short Kurti', 
      icon: '/assets/clofer_navigation_icon/short_kurti.png',
      darkIcon: '/assets/clofer_navigation_icon/dark_short_kurti.png'
    },
    { 
      id: 'long-kurti', 
      name: 'Long Kurti', 
      icon: '/assets/clofer_navigation_icon/long_kurti.png',
      darkIcon: '/assets/clofer_navigation_icon/dark_long_kurti.png'
    },
    { 
      id: 'kurti-set', 
      name: 'Kurti Sets', 
      icon: '/assets/clofer_navigation_icon/kurti_set.png',
      darkIcon: '/assets/clofer_navigation_icon/dark_kurti_set.png'
    },
    { 
      id: 'clofer-luxe', 
      name: 'Clofer Luxe', 
      icon: '/assets/clofer_navigation_icon/clofer_luxe.png',
      darkIcon: '/assets/clofer_navigation_icon/dark_clofer_luxe.png'
    },
    // { 
    //   id: 'bottoms', 
    //   name: 'Bottoms', 
    //   icon: '/assets/clofer_navigation_icon/bottoms.png',
    //   darkIcon: '/assets/clofer_navigation_icon/dark_bottoms.png'
    // },
    // { 
    //   id: 'clofer-crestline', 
    //   name: 'Clofer Crestline', 
    //   icon: '/assets/clofer_navigation_icon/clofer_crestline.png',
    //   darkIcon: '/assets/clofer_navigation_icon/dark_clofer_crestline.png'
    // },
  ];

  // Check scroll position to determine if arrows should be visible
  const checkScrollPosition = () => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      
      // Show left arrow if not at the start
      setShowLeftArrow(scrollLeft > 10); // Add small threshold to prevent flickering
      
      // Show right arrow if not at the end
      // Add small buffer (10px) to account for rounding errors
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      // Initial check
      checkScrollPosition();
      
      // Check on resize as well
      window.addEventListener('resize', checkScrollPosition);
      
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, []);

  // Scroll functions with improved distance calculation
  const scrollLeft = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const firstVisibleItem = Array.from(container.children[0].children)
        .find(child => {
          const rect = child.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          return rect.left >= containerRect.left;
        });
      
      // Scroll to previous item or use fixed distance if can't determine
      if (firstVisibleItem?.previousElementSibling) {
        firstVisibleItem.previousElementSibling.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        container.scrollBy({ left: -250, behavior: 'smooth' });
      }
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const visibleItems = Array.from(container.children[0].children)
        .filter(child => {
          const rect = child.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          return rect.left >= containerRect.left && rect.right <= containerRect.right;
        });
      
      // Get the first non-visible item to the right
      if (visibleItems.length > 0) {
        const lastVisibleIndex = Array.from(container.children[0].children).indexOf(visibleItems[visibleItems.length - 1]);
        const nextItem = container.children[0].children[lastVisibleIndex + 1];
        if (nextItem) {
          nextItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          return;
        }
      }
      // Fallback to fixed distance
      container.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full bg-customLavender dark:bg-darkBg py-5 lg:py-5 shadow-md">
      {/* Left scroll button - improved positioning and visibility control */}
      {showLeftArrow && (
        <button 
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 hidden md:flex items-center justify-center h-10 w-10 bg-white/90 dark:bg-darkSubtle/90 rounded-full shadow-md text-customPlum dark:text-darkText hover:bg-white dark:hover:bg-darkSubtle transition-all"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>
      )}
      
      {/* Scrollable container - same for all screen sizes now */}
      <div 
        ref={scrollRef}
        className="flex items-start overflow-x-auto px-6 md:px-14 scrollbar-hide snap-x"
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {/* Single responsive layout for both mobile and desktop */}
        <div className="flex space-x-6 md:space-x-8 lg:space-x-12 mx-auto lg:justify-center w-full">
          {categories.map((category) => (
            <a 
              key={category.id}
              href={`/${category.id}`}
              className="flex flex-col items-center min-w-max snap-start transition-transform hover:scale-105"
            >
              {/* Icon container with no hover shadow */}
              <div className="flex items-center justify-center mb-2">
                {category.isHome ? (
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 rounded-full bg-white dark:bg-darkSubtle flex items-center justify-center shadow-md">
                    <Home size={24} className="text-customPlum dark:text-darkAccent lg:w-14 lg:h-14" />
                  </div>
                ) : (
                  <img 
                    src={isDarkMode && category.darkIcon ? category.darkIcon : category.icon} 
                    alt={category.name}
                    className="w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 object-contain" 
                  />
                )}
              </div>
              
              {/* Category Name - positioned closer to icon */}
              <span className="text-xs md:text-sm lg:text-base font-poppins font-medium text-customDeepPlum dark:text-darkText text-center whitespace-nowrap mt-1">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
      
      {/* Right scroll button - improved positioning and visibility control */}
      {showRightArrow && (
        <button 
          onClick={scrollRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 hidden md:flex items-center justify-center h-10 w-10 bg-white/90 dark:bg-darkSubtle/90 rounded-full shadow-md text-customPlum dark:text-darkText hover:bg-white dark:hover:bg-darkSubtle transition-all"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      )}
      
      {/* Custom styles to hide scrollbar but keep functionality */}
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CategoryNavbar;