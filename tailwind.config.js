/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // Enables manual dark mode toggling
  theme: {
    extend: {
      fontFamily: {
        blackjack: ["Blackjack", "cursive"],
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
        callove: ["Callove", "cursive"],
      },
      colors: {
        // Light Mode Colors (Primary Theme)
        customLavender: "#D6CDEA",
        customPlum: "#5D3A6B",
        customDeepPlum: "#4A235A",

        // Refined Dark Mode Colors (Luxury Dark Mode)
        darkBg: "#2B1B37", // Deep Plum-Gray for background
        darkText: "#F3E8FF", // Soft Off-White text
        darkAccent: "#C8A06C", // Gold Accent for highlights
        darkSubtle: "#4E2A6E", // Deep Lavender for subtle contrast
      },
      keyframes: {
        marquee: {
          from: {
            transform: 'translateX(0)'
          },
          to: {
            transform: 'translateX(calc(-100% - var(--gap)))'
          }
        },
        marqueeSlow: { // New slower marquee effect
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" }
        },
        'marquee-vertical': {
          from: {
            transform: 'translateY(0)'
          },
          to: {
            transform: 'translateY(calc(-100% - var(--gap)))'
          }
        },
        // Add these new keyframes for the announcement bar
        marqueeAnnouncement: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        marqueeAnnouncement2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      },
      animation: {
        marquee: 'marquee var(--duration) infinite linear',
        marqueeSlow: "marqueeSlow 40s linear infinite", // Slower scrolling
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        // Add these new animations for the announcement bar
        marquee: 'marqueeAnnouncement 25s linear infinite',
        marquee2: 'marqueeAnnouncement2 25s linear infinite'
      }
    },
  },
  plugins: [],
};