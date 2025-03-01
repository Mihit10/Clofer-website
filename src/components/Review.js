import { cn } from "../lib/utils"; // Correct relative path

 import { Marquee } from "./magicui/marquee"; // Correct relative path


// Dummy review data (replace with real reviews later)
const reviews = [
  {
    name: "Tanvi Thakkar",
    username: "@Tanvi",
    body: "Clofer is the best brand for chikankari😍😍 and the material is also pure.❤Clofer can be trusted blindly and I'm really very much glad to see Clofer with new update everyday👀 I am very sure this efforts will turn into some big achievement #cloferisbest💗🧿",
    img: "https://avatar.vercel.sh/anita",
  },
  {
    name: "Anjali Parmar",
    username: "@anjali",
    body: "Love your kurta sets! The designs and quality are amazing. I've been searching for the perfect kurta set for ages, and yours exceeded my expectations. The embroidery/details on your kurta sets are exquisite. I look forward to shopping with you again. ❤️✨🫶",
    img: "https://avatar.vercel.sh/rekha",
  },
  {
    name: "Pallavi",
    username: "@pallavi",
    body: "I brought a kurti from Clofer. I love the attention to packaging😍 it was an experience unboxing the product and the quality of kurti was very good. Love clofer🫶🫶❤️❤️",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Illa",
    username: "@illa",
    body: "I brought kurti form Clofer. Delivery is on time. Cloth material is super. Packing is extraordinary with a free gift. I am very happy with the product.🥰🥰",
    img: "https://avatar.vercel.sh/sunita",
  },
  {
    name: "Priyanshi",
    username: "@Priyanshi",
    body: "I am really loving your efforts for the business❤❤ Truly it is inspiring to see the kind of heardwork and dedication you are putting into it. The consistancy behind it is something that i am definately including in my life❤. More power to you and your business.🥰 ",
    img: "https://avatar.vercel.sh/meena",
  },
  {
    name: "Aarushi",
    username: "@Aarushi",
    body: "Clofer is my go to brand for all my chikankari needs. The quality of the fabric is amazing and the designs are so unique. I love the fact that they have a wide range of products to choose from. I would highly recommend Clofer to everyone.🥰🥰",
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
            {/* <p className="text-xs font-medium dark:text-darkText/70">
              {username}
            </p> */}
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
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mb-12">
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
