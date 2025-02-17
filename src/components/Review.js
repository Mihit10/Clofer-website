import { cn } from "../lib/utils"; // Correct relative path

 import { Marquee } from "./magicui/marquee"; // Correct relative path


// Dummy review data (replace with real reviews later)
const reviews = [
  {
    name: "Anita",
    username: "@anita",
    body: "The intricate chickankari detailing is mesmerizing – truly a work of art.",
    img: "https://avatar.vercel.sh/anita",
  },
  {
    name: "Rekha",
    username: "@rekha",
    body: "A perfect blend of tradition and contemporary elegance. I love it!",
    img: "https://avatar.vercel.sh/rekha",
  },
  {
    name: "Priya",
    username: "@priya",
    body: "The quality is exquisite, and the designs are timeless.",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Sunita",
    username: "@sunita",
    body: "Absolutely elegant – a must-have for every wardrobe.",
    img: "https://avatar.vercel.sh/sunita",
  },
  {
    name: "Meena",
    username: "@meena",
    body: "I adore the delicate chickankari work. It's simply stunning!",
    img: "https://avatar.vercel.sh/meena",
  },
  {
    name: "Kiran",
    username: "@kiran",
    body: "Traditional craftsmanship meets modern style perfectly.",
    img: "https://avatar.vercel.sh/kiran",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
    return (
      <figure
        className={cn(
          "relative h-full w-64 md:w-80 lg:w-96 cursor-pointer overflow-hidden rounded-xl border p-4 md:p-6 lg:p-8",
          // Light mode styles
          "border-customPlum bg-white hover:bg-customLavender",
          // Dark mode styles
          "dark:border-darkAccent dark:bg-darkSubtle dark:hover:bg-darkBg"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full"
            width="32"
            height="32"
            alt={name}
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-darkText">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-darkText/70">
              {username}
            </p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm text-customPlum dark:text-darkText">
          {body}
        </blockquote>
      </figure>
    );
  };
  

const Review = () => {
  return (
    <>
    <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-playfair font-semibold tracking-wide text-customPlum dark:text-darkText">
        ✨ What Our Customers Are Saying ✨
        </h2>
        <div className="w-24 mx-auto mt-2 border-b-4 border-customPlum dark:border-darkAccent"></div>
    </div>
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* Gradient overlays on sides */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-darkBg"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-darkBg"></div>
    </div>
    </>
  );
};
export default Review;
