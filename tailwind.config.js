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
		'marquee-vertical': {
			from: {
				transform: 'translateY(0)'
			},
			to: {
				transform: 'translateY(calc(-100% - var(--gap)))'
			}
		}
	},
	animation: {
		marquee: 'marquee var(--duration) infinite linear',
		'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
	}
    },
  },
  plugins: [],
};
