const Announcement = () => {
    return (
        <div className="bg-customLavender dark:bg-darkBg text-customPlum dark:text-darkText py-2 border-b border-gray-300 dark:border-gray-700 overflow-hidden">
            <div className="relative flex w-full overflow-hidden">
                {/* Marquee wrapper */}
                <div className="animate-marquee whitespace-nowrap flex items-center space-x-8">
                    <p className="text-sm md:text-base font-medium tracking-wide inline-block">
                        Love Our Collection? There's More! 💖
                    </p>
                    <p className="text-sm md:text-base font-medium tracking-wide inline-block">
                        WhatsApp Us at 
                        <a 
                            href="https://wa.me/919820380401?text=Hey!%20I'm%20interested%20in%20your%20exclusive%20designs!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-customPlum dark:text-darkAccent font-semibold hover:underline"
                        >
                            {" "}+91 9820380401
                        </a> 
                        {" "}for Exclusive Designs
                    </p>
                    <p className="text-sm md:text-base font-medium tracking-wide inline-block">
                        | COD Now Available (T&C Apply) 🛍✨
                    </p>
                </div>

                {/* Duplicate content for seamless effect */}
                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center space-x-8">
                    <p className="text-sm md:text-base font-medium tracking-wide inline-block">
                        Love Our Collection? There's More! 💖
                    </p>
                    <p className="text-sm md:text-base font-medium tracking-wide inline-block">
                        WhatsApp Us at 
                        <a 
                            href="https://wa.me/919820380401?text=Hey!%20I'm%20interested%20in%20your%20exclusive%20designs!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-customPlum dark:text-darkAccent font-semibold hover:underline"
                        >
                            {" "}+91 9820380401
                        </a> 
                        {" "}for Exclusive Designs
                    </p>
                    <p className="text-sm md:text-base font-medium tracking-wide inline-block">
                        | COD Now Available (T&C Apply) 🛍✨
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Announcement;