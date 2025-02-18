import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';

const Footer = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 640);
  const [expandedSection, setExpandedSection] = useState(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const MobileAccordion = ({ title, children }) => {
    const isExpanded = expandedSection === title;
    
    return (
      <div className="border-b border-customPlum/10 dark:border-darkText/10">
        <button
          onClick={() => setExpandedSection(isExpanded ? null : title)}
          className="w-full py-3 px-4 flex justify-between items-center text-left"
        >
          <h3 className="text-lg font-semibold text-customDeepPlum dark:text-darkText">{title}</h3>
          <FaChevronDown className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-48' : 'max-h-0'}`}>
          <div className="p-4 pt-0">
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <footer className="bg-customLavender text-customPlum dark:bg-darkBg dark:text-darkText">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {isDesktop ? (
          // Desktop Layout
          <div className="grid grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <h1 className="text-3xl font-callove mb-4">Clofer.in</h1>
              <p className="text-sm text-customDeepPlum dark:text-darkText">Your destination for premium fashion and lifestyle products.</p>
              <div className="flex space-x-4 mt-4">
                <a href="https://chat.whatsapp.com/IRG4rYy87oD7zA4R8Mzorx" target="_blank" rel="noopener noreferrer" 
                  className="text-customPlum hover:text-customDeepPlum dark:text-darkText dark:hover:text-darkAccent transition-colors duration-300">
                  <FaWhatsapp className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/clofer.in?igsh=bWNydDRoa3lmcGZi" target="_blank" rel="noopener noreferrer" 
                  className="text-customPlum hover:text-customDeepPlum dark:text-darkText dark:hover:text-darkAccent transition-colors duration-300">
                  <FaInstagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-customDeepPlum dark:text-darkText">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/our-story" className="hover:text-customDeepPlum dark:hover:text-darkAccent transition-colors duration-300">Our Story</a></li>
                <li><a href="/store-policy" className="hover:text-customDeepPlum dark:hover:text-darkAccent transition-colors duration-300">Store Policy</a></li>
                <li><a href="/contact-us" className="hover:text-customDeepPlum dark:hover:text-darkAccent transition-colors duration-300">Contact Us</a></li>
                <li><a href="/faqs" className="hover:text-customDeepPlum dark:hover:text-darkAccent transition-colors duration-300">FAQs</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-customDeepPlum dark:text-darkText">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="/return-exchange-policy" className="hover:text-customDeepPlum dark:hover:text-darkAccent transition-colors duration-300">Return/Exchange Policy</a></li>
                <li><a href="/international-orders" className="hover:text-customDeepPlum dark:hover:text-darkAccent transition-colors duration-300">International Orders</a></li>
                <li><a href="/shipping-policy" className="hover:text-customDeepPlum dark:hover:text-darkAccent transition-colors duration-300">Shipping Policy</a></li>
                <li><a href="/size-guide" className="hover:text-customDeepPlum dark:hover:text-darkAccent transition-colors duration-300">Size Guide</a></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-customDeepPlum dark:text-darkText">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaPhone className="w-4 h-4" />
                  <span>+91 9820380401</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="w-4 h-4" />
                  <span>shopclofer@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="w-4 h-4" />
                  <span>Mumbai, Maharashtra</span>
                </div>
                <div className="mt-4">
                  <p className="text-sm">Customer Care Hours:</p>
                  <p className="text-sm font-semibold">Mon-Sat 10 AM to 9 PM</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Mobile Layout
          <div className="space-y-2">
            {/* Brand Info */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-callove mb-2">Clofer.in</h1>
              <div className="flex justify-center space-x-6 mt-4">
                <a href="https://chat.whatsapp.com/IRG4rYy87oD7zA4R8Mzorx" target="_blank" rel="noopener noreferrer" 
                  className="text-customPlum hover:text-customDeepPlum dark:text-darkText dark:hover:text-darkAccent">
                  <FaWhatsapp className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/clofer.in?igsh=bWNydDRoa3lmcGZi" target="_blank" rel="noopener noreferrer" 
                  className="text-customPlum hover:text-customDeepPlum dark:text-darkText dark:hover:text-darkAccent">
                  <FaInstagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Accordion Sections */}
            <MobileAccordion title="Quick Links">
              <ul className="space-y-2">
                <li><a href="/our-story">Our Story</a></li>
                <li><a href="/store-policy">Store Policy</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
                <li><a href="/faqs">FAQs</a></li>
              </ul>
            </MobileAccordion>

            <MobileAccordion title="Customer Service">
              <ul className="space-y-2">
                <li><a href="/return-exchange-policy">Return/Exchange Policy</a></li>
                <li><a href="/international-orders">International Orders</a></li>
                <li><a href="/shipping-policy">Shipping Policy</a></li>
                <li><a href="/size-guide">Size Guide</a></li>
              </ul>
            </MobileAccordion>

            <MobileAccordion title="Contact Us">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaPhone className="w-4 h-4" />
                  <span>+91 9820380401</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="w-4 h-4" />
                  <span>shopclofer@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="w-4 h-4" />
                  <span>Mumbai, Maharashtra</span>
                </div>
                <div className="mt-2">
                  <p className="text-sm">Customer Care Hours:</p>
                  <p className="text-sm font-semibold">Mon-Sat 10 AM to 9 PM</p>
                </div>
              </div>
            </MobileAccordion>
          </div>
        )}

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-customPlum/20 dark:border-darkText/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              © {currentYear} Clofer.in.  All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="hover:text-customDeepPlum dark:hover:text-darkAccent transition-colors duration-300">Privacy Policy</a>
              <a href="/terms" className="hover:text-customDeepPlum dark:hover:text-darkAccent transition-colors duration-300">Terms of Service</a>
              <a href="/sitemap" className="hover:text-customDeepPlum dark:hover:text-darkAccent transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Alert */}
      <div className="bg-customDeepPlum/10 dark:bg-darkSubtle py-3">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm">
            Join our WhatsApp group for the latest product updates and exclusive offers! 
            <a href="https://chat.whatsapp.com/IRG4rYy87oD7zA4R8Mzorxx" target="_blank" rel="noopener noreferrer" 
              className="ml-2 inline-flex items-center text-customPlum dark:text-darkAccent hover:opacity-80">
              Join Now <FaWhatsapp className="w-4 h-4 ml-1" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;