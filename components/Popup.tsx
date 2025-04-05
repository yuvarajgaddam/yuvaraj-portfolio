import React from "react";
import Image from "next/image";

type PopupProps = {
  isVisible: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode; // Optional children prop
};

const Popup: React.FC<PopupProps> = ({ isVisible, onClose, title, children }) => {
  if (!isVisible) return null;

  const email = "yuvaraj.gaddam@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/yuvaraj-gaddam-bba64817a/";
  const whatsappNumber = "+916302567158";

  const handleWhatsAppClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappUrl = isMobile
      ? `https://wa.me/${whatsappNumber}`
      : `https://web.whatsapp.com/send?phone=${whatsappNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleEmailClick = () => {
    window.open(`mailto:${email}`, "_self");
  };

  const handleLinkedInClick = () => {
    window.open(linkedinUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-[#1B2731] p-6 rounded-lg relative max-w-md w-full shadow-lg">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 text-center text-marrsyellow dark:text-carriyellow">
          Get in Touch with Me!
        </h3>

        {/* Content */}
        <div className="flex flex-col gap-6">
          {/* Email */}
          <button
            onClick={handleEmailClick}
            className="flex items-center gap-3 text-lg hover:text-marrsyellow dark:hover:text-carriyellow"
          >
            <Image
              src="https://www.svgrepo.com/show/349378/gmail.svg"
              alt="Gmail"
              className="w-8 h-8"
            />
            <span className="text-gray-700 dark:text-gray-300">{email}</span>
          </button>

          {/* LinkedIn */}
          <button
            onClick={handleLinkedInClick}
            className="flex items-center gap-3 text-lg hover:text-marrsyellow dark:hover:text-carriyellow"
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/128/174/174857.png"
              alt="LinkedIn"
              className="w-8 h-8"
            />
            <span className="text-gray-700 dark:text-gray-300">LinkedIn</span>
          </button>

          {/* WhatsApp */}
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-3 text-lg hover:text-marrsyellow dark:hover:text-carriyellow"
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/128/733/733585.png"
              alt="WhatsApp"
              className="w-8 h-8"
            />
            <span className="text-gray-700 dark:text-gray-300">WhatsApp</span>
          </button>
        </div>

        <div className="mt-6 text-center text-gray-300 dark:text-gray-400 text-lg">
          May the <span className="text-[#FFFF00] font-bold drop-shadow-lg">force</span> be with us
        </div>
      </div>
    </div>
  );
};

export default Popup;