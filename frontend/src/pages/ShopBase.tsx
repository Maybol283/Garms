import SuitsCard from "../assets/SuitsCard.jpg";
import TrousersCard from "../assets/TrousersCard.jpg";
import ShoesCard from "../assets/ShoesCard.jpg";
import AccessoriesCard from "../assets/AccessoriesCard.jpg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

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

function ShopBase() {
  return (
    <>
      <section className="md:h-screen h-fit bg-palette-1 grid grid-cols-2 md:flex gap-x-2 md:flex-row justify-center items-center px-4 sm:py-48 md:py-12 gap-4 md:mt-20 md:space-y-0">
        {cardItems.map((item, index) => (
          <Link
            to={item.alt}
            key={index}
            className=" relative bg-white shadow-sm w-full h-80 md:h-[80vh] md:w-1/3 text-center saturate-50 hover:shadow-none shadow-black hover:saturate-100 focus:scale-95 hover:contrast-125 transition ease-in-out flex justify-center items-center"
          >
            <p className="absolute text text-white font-bold mb-20">
              {item.alt}
            </p>
            <img
              src={item.src}
              className="object-cover size-full"
              alt={item.alt}
            />
          </Link>
        ))}
      </section>
      <Footer />
    </>
  );
}

export default ShopBase;
