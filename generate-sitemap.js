const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const fs = require("fs");
const path = require("path");

// Base URL of your website
const BASE_URL = "https://www.shopclofer.in";

(async () => {
  // List of static pages
  const staticPages = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/home", changefreq: "daily", priority: 1.0 },
    { url: "/our-story", changefreq: "monthly", priority: 0.8 },
    { url: "/store-policy", changefreq: "monthly", priority: 0.6 },
    { url: "/return-exchange-policy", changefreq: "monthly", priority: 0.6 },
    { url: "/international-orders", changefreq: "monthly", priority: 0.7 },
    { url: "/contact-us", changefreq: "monthly", priority: 0.7 },
    { url: "/shipping-policy", changefreq: "monthly", priority: 0.6 },
    { url: "/size-guide", changefreq: "monthly", priority: 0.5 },
    { url: "/terms-of-service", changefreq: "monthly", priority: 0.6 },
    { url: "/privacy-policy", changefreq: "monthly", priority: 0.6 },
    { url: "/faqs", changefreq: "monthly", priority: 0.6 },
  ];

  // List of category pages
  const categoryPages = [
    { url: "/short-kurti", changefreq: "weekly", priority: 0.9 },
    { url: "/long-kurti", changefreq: "weekly", priority: 0.9 },
    { url: "/kurti-set", changefreq: "weekly", priority: 0.9 },
    { url: "/clofer-luxe", changefreq: "weekly", priority: 0.8 },
    { url: "/bottoms", changefreq: "weekly", priority: 0.8 },
    { url: "/clofer-crestline", changefreq: "weekly", priority: 0.8 },
  ];

  // Read products.json to generate dynamic product pages
  const productPages = [];
  const productsPath = path.join(__dirname, "public", "data", "products.json");

  if (fs.existsSync(productsPath)) {
    const products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));

    const productCategories = [
      "bestsellers",
      "new_arrivals",
      "short_kurti",
      "long_kurti",
      "kurti_set",
      "clofer_luxe",
      "bottoms",
      "clofer_crestline",
    ];

    productCategories.forEach((category) => {
      if (products[category]) {
        products[category].forEach((product) => {
          productPages.push({
            url: `/${category.replace("_", "-")}/product/${product.id}`,
            changefreq: "weekly",
            priority: 0.9,
          });
        });
      }
    });
  }

  // Combine all pages
  const allPages = [...staticPages, ...categoryPages, ...productPages];

  // Generate sitemap
  const sitemapStream = new SitemapStream({ hostname: BASE_URL });
  const writeStream = createWriteStream("public/sitemap.xml");

  sitemapStream.pipe(writeStream);
  allPages.forEach((page) => sitemapStream.write(page));
  sitemapStream.end();

  await streamToPromise(sitemapStream);
  console.log("✅ Sitemap generated successfully!");
})();
