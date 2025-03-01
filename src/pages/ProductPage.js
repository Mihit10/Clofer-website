import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";

const ProductPage = () => {
  const { id } = useParams();
  console.log("Product ID from URL:", id);
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        const allCategories = [
          "bestsellers",
          "new_arrivals",
          "short_kurti",
          "long_kurti",
          "kurti_set",
          "clofer_luxe",
          "bottoms",
          "clofer_crestline",
        ];
  
        let foundProduct = null;
  
        for (let category of allCategories) {
          if (data[category]) {
            foundProduct = data[category].find((p) => p.id === id);
            if (foundProduct) break; // Stop searching once found
          }
        }
  
        console.log("Found Product:", foundProduct);
  
        if (foundProduct) {
          const mainImage = foundProduct.img_path?.replace("src/assets/", "/assets/") || "";
          const additionalImages =
            foundProduct.additional_images?.map((img) =>
              img.replace("src/assets/", "/assets/")
            ) || [];
          const allImages = [mainImage, ...additionalImages.filter((img) => img !== mainImage)];
  
          setProduct({ ...foundProduct, additional_images: allImages });
          setSelectedImage(mainImage);
          setSelectedColor(foundProduct.colors?.[0] || null);
          setSelectedSize(foundProduct.size?.[0] || null); // Default size if available
        }
  
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading product:", error);
        setLoading(false);
      });
  }, [id]);
  

  if (loading) {
    return <p className="text-center text-lg py-10">Loading product...</p>;
  }

  if (!product) {
    return <p className="text-center text-lg py-10">Product not found</p>;
  }

  // WhatsApp Inquiry
  const whatsappMsg = `${window.location.href}
Hello, I hope you're doing well! 
I am interested in the ${product.name} in the color ${selectedColor} (Size: ${selectedSize}) at Rs. ${product.display_price}.  
I found this on the Clofer website and would love to know more details.`;

  const whatsappURL = `https://wa.me/919820380401?text=${encodeURIComponent(whatsappMsg)}`;

  const handleInstagramInquiry = () => {
    const message = `${window.location.href}
Hello, I hope you're doing well! 
I am interested in the ${product.name} in the color ${selectedColor} (Size: ${selectedSize}) at Rs. ${product.display_price}.  
I found this on the Clofer website and would love to know more details.`;
  
    navigator.clipboard.writeText(message).then(() => {
      alert("Message copied! Now paste it in Instagram chat.");
      window.open("https://www.instagram.com/direct/t/17849702420955391", "_blank");
    });
  };

  return (
    <>
    <Helmet>
      <title>{product.name} - Clofer</title>
      <meta name="description" content={product.description} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={`${product.name} - Clofer`} />
      <meta property="og:description" content={product.description} />
      <meta property="og:image" content={`https://www.shopclofer.in/assets/${product.img_path.replace("src/assets/", "")}`} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="product" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${product.name} - Clofer`} />
      <meta name="twitter:description" content={product.description} />
      <meta name="twitter:image" content={`https://www.shopclofer.in/assets/${product.img_path.replace("src/assets/", "")}`} />
    </Helmet>

    <section className="py-12 md:py-20 bg-white dark:bg-darkBg text-customPlum dark:text-darkText">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Preview Section */}
          <div className="relative lg:ml-10">
            <div className="text-center mb-4 relative w-full md:max-w-md lg:max-w-lg mx-auto">
              <div className="relative">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-auto rounded-lg shadow-lg border-2 border-customDeepPlum dark:border-darkAccent"
                />
              </div>
            </div>
            <div className="mt-3 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 justify-center">
              {product.additional_images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Preview ${i}`}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-lg border 
                              ${selectedImage === img ? "border-customDeepPlum dark:border-darkAccent" : "border-gray-300"}
                              cursor-pointer transition-transform duration-200 hover:scale-105`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">{product.name}</h1>
            <p className="opacity-70 text-lg">{product.description}</p>

            {/* Price Section */}
            <div className="flex items-center space-x-3 my-4">
              <span className="text-2xl font-semibold text-customPlum dark:text-darkAccent">
                Rs. {product.display_price}
              </span>
              <span className="text-xl line-through opacity-60">Rs. {product.og_price}</span>
            </div>

            <p className="opacity-80">{product.product_detail}</p>

            {/* Product Specifications Section */}
            <div className="mt-6 p-6 rounded-lg shadow-lg bg-gray-100 dark:bg-darkSubtle md:mr-4 lg:mr-8">
              <h3 className="text-lg font-semibold mb-3">Product Details</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <p><strong>Fabric:</strong> {product.fabric}</p>
                <p><strong>Sleeves:</strong> {product.sleeves}</p>
                <p><strong>Type:</strong> {product.type}</p>
                {/* <p><strong>Length:</strong> {product.length}</p> */}
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Additional Details:</strong> {product.additional_details}</p>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 italic">
              Colors may slightly vary due to different screen resolutions.
            </p>
            <div className="mt-6">
              <a
                href="/size-guide"
                className="relative text-customPlum dark:text-darkAccent font-medium transition-all duration-300 
                          before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[1.5px] 
                          before:bg-customPlum dark:before:bg-darkAccent before:transition-all before:duration-300 
                          hover:before:w-full hover:text-customDeepPlum dark:hover:text-darkText"
              >
                Size Guide
              </a>
            </div>



            {/* Size Selection */}
            <div className="mt-3">
              <h5 className="font-medium mb-2">Size: {selectedSize}</h5>
              <div className="flex flex-wrap gap-2">
                {product.size.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-full border 
                                ${selectedSize === size ? "border-customDeepPlum dark:border-darkAccent" : "border-gray-300"}
                                text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-darkSubtle`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mt-6">
              <h5 className="font-medium mb-2">Color: {selectedColor}</h5>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-full border 
                                ${selectedColor === color ? "border-customDeepPlum dark:border-darkAccent" : "border-gray-300"}
                                text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-darkSubtle`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* WhatsApp Inquiry, Instagram Inquiry & Share Buttons */}
            <div className="flex flex-col items-center gap-3 my-7 sm:flex-row sm:justify-start sm:gap-4">
              {/* WhatsApp Button */}
              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-customPlum text-white text-sm rounded uppercase hover:bg-opacity-90 px-6 py-3 w-full sm:w-auto text-center"
              >
                Enquire on WhatsApp
              </a>

              {/* Instagram Button */}
              <button
                onClick={handleInstagramInquiry}
                className="bg-customPlum text-white text-sm rounded uppercase hover:bg-opacity-90 px-6 py-3 w-full sm:w-auto text-center"
              >
                Enquire on Instagram
              </button>

              {/* Share Button - Centered on Small Screens */}
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator
                      .share({
                        title: product.name,
                        text: `Check out this amazing product: ${product.name} on Clofer!`,
                        url: window.location.href,
                      })
                      .then(() => console.log("Shared successfully"))
                      .catch((error) => console.error("Error sharing:", error));
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Link copied to clipboard!");
                  }
                }}
                className="hover:bg-customPlum hover:bg-opacity-10 text-customPlum dark:text-darkText px-3 py-2 w-full sm:w-auto text-center mt-2"
              >
                <FontAwesomeIcon icon={faShareAlt} /> Share
              </button>
            </div>


          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ProductPage;
