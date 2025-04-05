import { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import LinkButton from "../components/LinkButton";
import Popup from "../components/Popup";

import profilePhoto from "../public/profilePhoto.png";
import laptop from "../public/laptop-illustration.webp";

const HeroSection: React.FC = () => {

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };


  return (
    <section className="relative py-16 px-4 sm:px-8 md:px-20 max-w-8xl mx-auto min-h-[769px] flex flex-col lg:flex-row items-center justify-center overflow-hidden">
      {/* Decorative background text - spans full width behind content */}
      <span
        aria-hidden="true"
        className="bg-text absolute top-1/4 rotate-12 text-gray-100 dark:text-[#1f2e3a] text-9xl scale-150 tracking-wide font-bold select-none pointer-events-none text-center z-0 w-full opacity-50 flex flex-col items-center"
      >
        <span>PASSIONATE</span>
        <span>PROGRAMMER</span>
        <span>GAMER</span>
        <span>DEVELOPER</span>
      </span>

      {/* Main content row with margins */}
      <div className="w-full flex flex-col lg:flex-row px-4 md:px-8 lg:px-12 xl:px-16">
        {/* Left Column - Content (2/3 width) */}
        <div className="lg:basis-2/3 z-20 relative pr-0 lg:pr-12">
          <span className="text-marrsyellow lg:text-lg font-medium dark:text-carriyellow">
            Hi my name is
          </span>
          <div className="overflow-hidden">
            <h1 className="text-animation text-4xl md:text-5xl lg:text-7xl md:my-2 font-semibold my-1">
              Yuvaraj Gaddam
            </h1>
          </div>
          <div className="overflow-hidden">
            <span className="text-animation text-2xl md:text-3xl lg:text-5xl block md:my-3 text-marrsyellow dark:text-carriyellow font-medium">
              A Full-stack Developer
            </span>
          </div>
          <div className="mt-2 my-4 md:mb-8">
            <p className="mb-1">
              I am a Full-Stack Developer with a passion for delivering
              exceptional results.
            </p>
            <p>
              Full-stack developer specializing in React, Next.js, Spring Boot,
              Node.js, and AWS. I build scalable, high-performance web applications
              with end-to-end expertise.
            </p>
          </div>
          <div className="flex justify-start"> {/* Left-aligned button with margin */}
            <LinkButton
              href="#"
              className="ml-0 mr-4"  // Adjust horizontal margins as needed
              onClick={(e) => {
                e.preventDefault();
                handleOpenPopup();
              }}
            >
              Contact me!
            </LinkButton>
          </div>
        </div>

        {/* Right Column - Image (1/3 width) */}
        <div className="lg:basis-1/3 z-20 relative mt-8 lg:mt-0 pl-0 lg:pl-4">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#FFFF00] dark:border-[#FFFF00] shadow-lg mx-auto lg:mx-0">
            <Image
              src={profilePhoto}
              width={1177}
              height={1374}
              loading="lazy"
              id="character-illustration"
              aria-label="Sat Naing character illustration levitating with a Macbook"
              alt="Sat Naing character illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Popup */}
      <Popup isVisible={isPopupVisible} onClose={handleClosePopup} title="Popup Title">
        <p>This is the content of the popup. You can add any information here.</p>
      </Popup>
    </section>
  );
};

export default HeroSection;
