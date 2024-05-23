import { useState, useEffect, ReactNode } from "react";

interface CarouselProps {
  items: ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleLineClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [items.length]);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative flex flex-row items-center gap-24 w-full max-w-2xl mx-auto">
        <button
          className="absolute -left-10 hover:bg-palette-3 hover:text-white focus:outline-none bg-gray-800 text-white p-2 rounded-full z-10"
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
                {item}
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute -right-10 hover:bg-palette-3 hover:text-white focus:outline-none bg-gray-800 text-white p-2 rounded-full z-10"
          onClick={handleNextClick}
        >
          &gt;
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {new Array(items.length).fill("").map((_, index) => (
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
