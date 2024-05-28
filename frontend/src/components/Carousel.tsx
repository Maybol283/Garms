import { useState, useEffect, ReactNode } from "react";

interface CarouselProps {
  items: (ReactNode | string)[];
  styles?: string;
}

const Carousel: React.FC<CarouselProps> = ({ items, styles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const changeSlide = (newIndex: number) => {
    setCurrentIndex(newIndex);
  };

  const handlePrevClick = () => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    changeSlide(newIndex);
    pauseAutoScroll();
  };

  const handleNextClick = () => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    changeSlide(newIndex);
    pauseAutoScroll();
  };

  const handleLineClick = (index: number) => {
    changeSlide(index);
    pauseAutoScroll();
  };

  const pauseAutoScroll = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); // Resume auto-scroll after 10 seconds
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval); // Clean up interval on unmount
    }
  }, [isPaused, items.length]);

  return (
    <div className={`relative w-full max-w-2xl mx-auto ${styles}`}>
      <div className="relative flex flex-row items-center gap-24 w-full max-w-2xl mx-auto">
        <button
          className="hidden md:inline-block absolute -left-10 hover:bg-palette-3 hover:text-white focus:outline-none bg-gray-800 text-white p-2 rounded-full z-9"
          onClick={handlePrevClick}
        >
          &lt;
        </button>
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div key={index} className="min-w-full box-border">
                {typeof item === "string" ? (
                  <img
                    src={item}
                    alt={`Slide ${index}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  item
                )}
              </div>
            ))}
          </div>
        </div>
        <button
          className="hidden md:inline-block absolute -right-10 hover:bg-palette-3 hover:text-white focus:outline-none bg-gray-800 text-white p-2 rounded-full z-9"
          onClick={handleNextClick}
        >
          &gt;
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {items.map((_, index) => (
          <span
            key={index}
            className={`block h-1 cursor-pointer rounded-2xl mx-1 transition-all content-[''] ${
              currentIndex === index ? "w-8 bg-gray-800" : "w-4 bg-gray-400"
            }`}
            onClick={() => handleLineClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
