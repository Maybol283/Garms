import HomeBg from "../assets/HomePageBG.jpg";
import SuitsCard from "../assets/SuitsCard.jpg";
import TrousersCard from "../assets/TrousersCard.jpg";
import ShoesCard from "../assets/ShoesCard.jpg";
import AccessoriesCard from "../assets/AccessoriesCard.jpg";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { Carousel } from "@material-tailwind/react";

("use client");

let cardItems = [
  {
    src: SuitsCard,
    alt: "Shirts",
  },
  {
    src: TrousersCard,
    alt: "Trousers",
  },
  {
    src: ShoesCard,
    alt: "Shoes",
  },
  {
    src: AccessoriesCard,
    alt: "Accessories",
  },
];

export default function Home() {
  return (
    <main className="snap-y snap-mandatory">
      <section className="snap-start snap-always">
        <div className="overflow-hidden h-[100vh] w-full flex items-center justify-center">
          <button className="mt-32 text p-4 bg-palette-1 hover:bg-palette-2 rounded absolute text-gray-900">
            THE COLLECTION
          </button>
          <img
            className="object-cover w-full h-full object-[center_5%]"
            src={HomeBg}
          />
        </div>
      </section>
      <section className="h-screen bg-palette-1 flex gap-4 flex-row justify-center items-center px-4 snap-start">
        {cardItems.map((item) => (
          <div className="bg-white shadow-sm h-2/3 w-1/3 text-center saturate-50 hover:shadow-none shadow-black  hover:saturate-100 hover:scale-95 hover:contrast-125 transition ease-in-out flex justify-center place-items-center ">
            <p className="absolute text text-white font-bold mb-20">
              {item.alt}
            </p>
            <img src={item.src} className="object-cover size-full " />
          </div>
        ))}
      </section>
      <section className="h-screen bg-palette-1">
        <div className="sm:min-h-[330px] md:min-h-[440px] bg-palette-3 text-center text-white px-2 sm:px-12 lg:px-28">
          <h1 className="pt-10 lg:pt-20 text-4xl font-bold">
            Bringing Your Style
          </h1>
          <p className="mt-10 text-lg font-bold">
            At Garms, we are committed to bringing you quality garments that
            elevate your style and confidence. Our curated collection features
            the latest trends and timeless classics, ensuring there's something
            for every taste and occasion. Whether you're looking for casual
            wear, formal attire, or unique statement pieces, we've got you
            covered.
          </p>
          <div className="my-10 lg:mt-20 pl-10 text-2xl font-bold inline-block hover:text-palette-1 group gap-4">
            <p className="inline-block group-hover:text-palette-1 mr-2.5">
              Learn More
            </p>
            <ArrowRightCircleIcon className="size-10 inline-block align-[-10px] group-hover:text-palette-1" />
          </div>
        </div>
      </section>
      <section className="h-screen bg-palette-1">
        <div className="">
          <Carousel
            className="rounded-xl h-[60vh] w-[80vw] mx-auto"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div>
      </section>
    </main>
  );
}
