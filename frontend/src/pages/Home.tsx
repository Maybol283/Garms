import HomeBg from "../assets/HomePageBG.jpg";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <>
      <main className="snap-y snap-proximity overflow-y-scroll h-screen">
        <Header />
        <section className="snap-start snap-always pt-24 sm:pt-0 h-screen">
          <div className=" h-full w-full flex items-center justify-center relative">
            <Link
              to="Shop"
              className="mt-32 p-4 bg-palette-1 hover:bg-palette-3 hover:text-white rounded absolute text-gray-900"
            >
              THE COLLECTION
            </Link>
            <img
              className="object-cover w-full h-full object-[center_5%]"
              src={HomeBg}
              alt="Home Background"
            />
          </div>
        </section>

        <section
          role="About"
          className="snap-start snap-always pb-32 bg-palette-1"
        >
          <div className="md:min-h-[440px] bg-palette-3 text-center text-white px-2 sm:px-12 lg:px-28">
            <h1 className="pt-10 lg:pt-20 text-4xl font-bold">
              Bringing Your Style
            </h1>
            <p className="mt-10 text-lg font-bold">
              At Garms, we are committed to bringing you quality garments that
              elevate your style and confidence. Our curated collection features
              the latest trends and timeless classics, ensuring there's
              something for every taste and occasion. Whether you're looking for
              casual wear, formal attire, or unique statement pieces, we've got
              you covered.
            </p>
            <Link
              to="Mission"
              reloadDocument={true}
              className="my-10 lg:mt-20 text-2xl font-bold inline-block hover:text-palette-1 group gap-4"
            >
              <p className=" group-hover:text-palette-1 mr-2.5">Learn More</p>
              <ArrowRightCircleIcon className="size-10 inline-block align-[-10px] group-hover:text-palette-1" />
            </Link>
          </div>
        </section>
        <section
          role="Carousel Reviews"
          className="snap-start snap-always h-screen bg-palette-1"
        >
          <h1 className="bold text-3xl text-center">
            Don't Just Take Our Word For It
          </h1>
          <Testimonials styles="mt-10" />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Home;
