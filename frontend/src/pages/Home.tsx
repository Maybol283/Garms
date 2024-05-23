import HomeBg from "../assets/HomePageBG.jpg";
import SuitsCard from "../assets/SuitsCard.jpg";
import TrousersCard from "../assets/TrousersCard.jpg";
import ShoesCard from "../assets/ShoesCard.jpg";
import AccessoriesCard from "../assets/AccessoriesCard.jpg";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Testimonials from "../components/Testimonials";

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

const Home: React.FC = () => {
  return (
    <main className="snap-y snap-mandatory">
      <section className="snap-start snap-always h-screen relative">
        <div className="overflow-hidden h-full w-full flex items-center justify-center">
          <button className="mt-32 p-4 bg-palette-1 hover:bg-palette-3 hover:text-white rounded absolute text-gray-900">
            THE COLLECTION
          </button>
          <img
            className="object-cover w-full h-full object-[center_5%]"
            src={HomeBg}
            alt="Home Background"
          />
        </div>
      </section>
      <section className="snap-start h-screen bg-palette-1 flex gap-4 flex-row justify-center items-center px-4">
        {cardItems.map((item, index) => (
          <div
            key={index}
            className="relative bg-white shadow-sm h-2/3 w-1/3 text-center saturate-50 hover:shadow-none shadow-black hover:saturate-100 hover:scale-95 hover:contrast-125 transition ease-in-out flex justify-center items-center"
          >
            <p className="absolute text text-white font-bold mb-20">
              {item.alt}
            </p>
            <img
              src={item.src}
              className="object-cover size-full"
              alt={item.alt}
            />
          </div>
        ))}
      </section>
      <section role="About" className="snap-start pb-32 bg-palette-1">
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
      <section
        role="Carousel Reviews"
        className="snap-start h-screen bg-palette-1"
      >
        <h1 className="bold text-3xl text-center">
          Don't Just Take Our Word For It
        </h1>
        <Testimonials styles="mt-10" />
      </section>
    </main>
  );
};

export default Home;
