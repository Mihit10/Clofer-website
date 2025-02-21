import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

const ProductPage = () => {
  const { id } = useParams();
  console.log("Product ID from URL:", id);
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch products from JSON (search in bestsellers or newArrivals if needed)
  useEffect(() => {
    fetch("/data/products.json")
      .then((response) => response.json())
      .then((data) => {
        // First try bestsellers, then newArrivals
        let foundProduct =
          data.bestsellers.find((p) => p.id === Number(id)) ||
          (data.new_arrivals && data.new_arrivals.find((p) => p.id === Number(id)));
        console.log("Found Product:", foundProduct);

        if (foundProduct) {
          // Fix the image paths
          const mainImage = foundProduct.img_path.replace("src/assets/", "/assets/");
          const additionalImages =
            foundProduct.additional_images?.map((img) =>
              img.replace("src/assets/", "/assets/")
            ) || [];
          // Create a union of images (ensure mainImage appears only once)
          const allImages = [mainImage, ...additionalImages.filter((img) => img !== mainImage)];

          setProduct({ ...foundProduct, additional_images: allImages });
          setSelectedImage(mainImage);
          setSelectedColor(foundProduct.colors[0]);
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
  const whatsappMsg = `Hello, I hope you're doing well! 
I am interested in the ${product.name} in the color ${selectedColor} at Rs. ${product.display_price}.  
I found this on the Clofer website and would love to know more details.`;

  const whatsappURL = `https://wa.me/919820380401?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section className="py-12 md:py-20 bg-white dark:bg-darkBg text-customPlum dark:text-darkText">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Preview Section */}
            <div className="relative lg:ml-10">
                <div className="text-center mb-4 relative w-full md:max-w-md lg:max-w-lg mx-auto">
                {/* Main Image Wrapper (Ensures Buttons Stay Inside) */}
                <div className="relative">
                    {/* Main Image */}
                    <img
                    src={selectedImage}
                    alt={product.name}
                    className="w-full h-auto rounded-lg shadow-lg border-2 border-customDeepPlum dark:border-darkAccent"
                    />

                    {/* Left Button - Fixed 6px Inside */}
                    <button
                    className="absolute left-[6px] top-1/2 transform -translate-y-1/2 
                                bg-gray-100/70 dark:bg-darkSubtle/70 p-2 md:p-3 rounded-full shadow-md 
                                text-customPlum dark:text-darkText hover:bg-gray-200/90 dark:hover:bg-darkAccent/90 
                                transition focus:outline-none"
                    onClick={() => {
                        const currentIndex = product.additional_images.indexOf(selectedImage);
                        if (currentIndex > 0) {
                        setSelectedImage(product.additional_images[currentIndex - 1]);
                        }
                    }}
                    disabled={selectedImage === product.additional_images[0]}
                    >
                    ◀
                    </button>

                    {/* Right Button - Fixed 6px Inside */}
                    <button
                    className="absolute right-[6px] top-1/2 transform -translate-y-1/2 
                                bg-gray-100/70 dark:bg-darkSubtle/70 p-2 md:p-3 rounded-full shadow-md 
                                text-customPlum dark:text-darkText hover:bg-gray-200/90 dark:hover:bg-darkAccent/90 
                                transition focus:outline-none"
                    onClick={() => {
                        const currentIndex = product.additional_images.indexOf(selectedImage);
                        if (currentIndex < product.additional_images.length - 1) {
                        setSelectedImage(product.additional_images[currentIndex + 1]);
                        }
                    }}
                    disabled={selectedImage === product.additional_images[product.additional_images.length - 1]}
                    >
                    ▶
                    </button>
                </div>
                </div>

                {/* Elegant Thumbnail Grid (Auto Wraps into Rows if Needed) */}
                <div className="mt-3 grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 justify-center">
                {product.additional_images.map((img, i) => (
                    <img
                    key={i}
                    src={img}
                    alt={`Preview ${i}`}
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-lg border 
                                ${
                                selectedImage === img
                                    ? "border-customDeepPlum dark:border-darkAccent"
                                    : "border-gray-300"
                                } cursor-pointer transition-transform duration-200 hover:scale-105`}
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

                {/* Color Variants */}
                <div className="mt-6">
                <h5 className="font-medium mb-2">Color: {selectedColor}</h5>
                <div className="flex gap-2">
                    {product.colors.map((color, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-full border ${
                        selectedColor === color ? "border-customDeepPlum dark:border-darkAccent" : "border-gray-300"
                        } text-sm cursor-pointer hover:bg-gray-200 dark:hover:bg-darkSubtle`}
                    >
                        {color}
                    </button>
                    ))}
                </div>
                </div>

                {/* WhatsApp Inquiry & Share Buttons */}
                <div className="flex items-center my-7">
                <a
                    href={whatsappURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-customPlum text-white text-sm rounded uppercase hover:bg-opacity-90 px-6 py-2.5"
                >
                    Enquire on WhatsApp
                </a>
                <button
                    onClick={() => {
                    if (navigator.share) {
                        navigator.share({
                        title: product.name,
                        text: `Check out this amazing product: ${product.name} on Clofer!`,
                        url: window.location.href,
                        })
                        .then(() => console.log("Shared successfully"))
                        .catch((error) => console.error("Error sharing:", error));
                    } else {
                        // Fallback: Copy link to clipboard
                        navigator.clipboard.writeText(window.location.href);
                        alert("Link copied to clipboard!");
                    }
                    }}
                    className="hover:bg-customPlum hover:bg-opacity-10 text-customPlum dark:text-darkText px-3 py-2 ml-4"
                >
                    <FontAwesomeIcon icon={faShareAlt} /> Share
                </button>
                </div>
            </div>
            </div>
        </div>
        </section>

  );
  
};

export default ProductPage;
