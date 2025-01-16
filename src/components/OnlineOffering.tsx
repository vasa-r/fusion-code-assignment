import { useEffect, useRef } from "react";
import video from "../assets/videos/online-offering.mp4";

const OnlineOffering = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);
  return (
    <section className="flex md:flex-row pt-[150px] z-50">
      <div className="w-full md:w-[41.67%] mt-8 md:mt-0">
        <div className="w-full max-w-[480px] mx-auto px-[20px] md:px-[30px] lg:px-[60px]">
          <span className="block text-[12px] md:text-[13px] lg:text-[14px] tracking-[.4px] font-bold mb-[15px] md:mb-[20px] text-[#333333]">
            Festive giving
          </span>

          <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-light leading-[1.2] mb-[15px] md:mb-[20px] tracking-[-0.5px] text-[#333333]">
            A complimentary <br /> sleeve for your gifts
          </h2>

          <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.7] mb-[25px] md:mb-[30px] text-[#333333]">
            Inspired by the verve of the season, a specially designed gift
            sleeve will swaddle your purchases when you select the ‘gift
            packaging’ option at checkout. Exclusions apply.
          </p>

          <div className="w-[300px] cursor-pointer flex items-center justify-between p-4 border border-btn-border group hover:bg-dark-bg">
            <p className="font-bold transition duration-300 text text-dark-bg group-hover:text-white">
              Explore Gifts
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-gray-800 transition duration-300 size-4 group-hover:text-white"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[58.33%] relative h-[400px]">
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            className="absolute inset-0 object-cover w-full h-full"
            loop
            muted
            playsInline
            poster="/images/noteworthy-gifts.jpg"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default OnlineOffering;
