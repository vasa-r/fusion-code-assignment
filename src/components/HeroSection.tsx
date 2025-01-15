import { heroContents } from "../lib/constants";
import RedCard from "../assets/red-card.png";
import Logo from "../assets/logo.png";
import Previous from "../assets/chevron-left.svg";
import Next from "../assets/chevron-right.svg";
import Play from "../assets/play.svg";
import Pause from "../assets/resume.svg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let interval: number;

    if (isPlaying) {
      interval = window.setInterval(() => {
        handleNext();
      }, 3500);
    }

    return () => window.clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrIndex((prev) => (prev >= heroContents.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrIndex((prev) => (prev === 0 ? heroContents.length - 1 : prev - 1));
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="flex flex-col items-center">
      <div className="relative flex flex-col w-full gap-4 transition-all duration-300 md:flex-row md:h-hero-height bg-hero-bg">
        <img
          src={Logo}
          alt="Logo"
          className="absolute hidden md:block left-8 top-20"
        />
        <div className="px-3 md:basis-auto md:w-hero-data md:pt-[110px] md:pb-[180px] md:ml-hero-margin-left md:mr-auto">
          <p className="mb-[15px]">{heroContents[currIndex].topSubTitle}</p>
          <h1 className="text-[30px] text-text mb-[15px] font-medium">
            {heroContents[currIndex].mainTitle}
          </h1>
          <p className="text-text text-lg text-bold leading-[1.5] mb-[30px]">
            {heroContents[currIndex].body}
          </p>
          <div className="w-full">
            <div className="w-[300px] cursor-pointer flex items-center justify-between p-4 border border-btn-border group hover:bg-dark-bg">
              <p className="font-bold transition duration-300 text text-dark-bg group-hover:text-white">
                {heroContents[currIndex].button}
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
        <div className="relative basis-1/2">
          <picture className="relative h-full">
            <img
              src={heroContents[currIndex].image}
              alt="bg image"
              className="object-cover w-full h-full"
            />
          </picture>
          {currIndex === 0 && (
            <img
              src={RedCard}
              alt="red overlay card"
              className="absolute size-40 md:size-[350px] -bottom-8 right-0"
            />
          )}
        </div>
      </div>

      <div className="flex items-center h-10 gap-4">
        <img
          src={Previous}
          alt="previos"
          className="cursor-pointer size-5"
          onClick={handlePrev}
        />
        <div>
          {currIndex + 1} / {heroContents.length}
        </div>
        <img
          src={Next}
          alt="previos"
          className="cursor-pointer size-5"
          onClick={handleNext}
        />
        <img
          src={isPlaying ? Pause : Play}
          alt="previos"
          className="cursor-pointer size-5"
          onClick={handlePlayPause}
        />
      </div>
    </section>
  );
};

export default HeroSection;
