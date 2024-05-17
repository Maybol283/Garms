import HomeBg from "../assets/HomePageBG.jpg";
import SuitsCard from "../assets/SuitsCard.jpg";
import TrousersCard from "../assets/TrousersCard.jpg";
import ShoesCard from "../assets/ShoesCard.jpg";
import AccessoriesCard from "../assets/AccessoriesCard.jpg";

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
        <div className="overflow-hidden h-[87.5vh] w-full flex items-center justify-center">
          <button className="text p-4 bg-palette-1 hover:bg-palette-2 rounded absolute text-gray-900">
            THE COLLECTION
          </button>
          <img
            className="object-cover w-full h-full object-[center_15%]"
            src={HomeBg}
          />
        </div>
      </section>
      <section className="h-screen bg-palette-1 flex gap-4 flex-row justify-center items-center px-4 snap-start">
        {cardItems.map((item) => (
          <div className="bg-white  shadow-xl h-2/3 w-1/3 text-center hover:scale-95 hover:contrast-125 transition ease-in-out flex justify-center place-items-center ">
            <p className="absolute  text text-white">{item.alt}</p>
            <img src={item.src} className="object-cover size-full " />
          </div>
        ))}
      </section>
    </main>
  );
}
