import React, { useState } from "react";
import LinkButton from "@/components/LinkButton";
import Popup from "../components/Popup";

const ContactSection: React.FC = () => {

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div
      className="about-panel bg-white dark:bg-[#1B2731] relative"
    >
      <section
        id="contact"
        className="contact-section text-center"
      >
        <div className="text-center">
          <h2 className="text-3xl inline-block my-6 font-medium dark:text-carriyellow">Contact</h2>
        </div>
        <div className="mt-8 mb-20">
          <h3 className="font-medium text-lg mb-2 md:text-3xl">
            Let's Build Something Awesome Together!
          </h3>
          <p className="mb-6 mx-auto max-w-lg md:mb-10 lg:leading-loose">
            I'm a passionate developer who thrives on solving problems and
            taking on new challenges. Whether it's joining a dynamic team
            or contributing to an exciting project, I'm always open to
            opportunities that let me grow and create meaningful impact.
          </p>
          <LinkButton
            className="font-medium transition duration-300 hover:shadow-[0_4px_15px_rgba(255,223,0,0.6)] hover:no-underline"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleOpenPopup();
            }}
          >
            Join Forces!
          </LinkButton>
          <p className="mb-6 mx-auto max-w-lg my-6 md:mb-10 lg:leading-loose">
            Let's connect and make something amazing together!
          </p>
        </div>
        {/* Popup */}
        <Popup isVisible={isPopupVisible} onClose={handleClosePopup} title="Popup Title">
          <p>This is the content of the popup. You can add any information here.</p>
        </Popup>
      </section>

    </div>
  );
};

export default ContactSection;
