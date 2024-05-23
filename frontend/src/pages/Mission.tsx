import AboutImg1 from "../assets/About-1.jpg";
import AboutImg2 from "../assets/About-2.jpg";
import AboutImg3 from "../assets/About-3.jpg";

const sections = [
  {
    id: 1,
    paragraph: `Whether you're on the hunt for casual wear that combines comfort
and style, formal attire that exudes professionalism and elegance,
or unique statement pieces that make you stand out in a crowd,
we've got you covered. Each item in our collection is selected
with the utmost attention to detail and quality, ensuring that you
look and feel your best every time you step out.`,
    image: AboutImg1,
  },
  {
    id: 2,
    paragraph: `At Garms, we are dedicated to bringing you high-quality garments
that not only enhance your style but also boost your confidence.
Our carefully curated collection is designed to feature the latest
fashion trends as well as timeless classics, ensuring that there
is something to suit every individual's taste and occasion.`,
    image: AboutImg2,
  },
  {
    id: 3,
    paragraph: `Our goal is to provide you with a wardrobe that reflects your
personal style and meets your needs, no matter the event or
setting. From everyday essentials to special occasion outfits,
Garms is your go-to destination for fashion that inspires
confidence and makes a lasting impression.`,
    image: AboutImg3,
  },
];

export default function Mission() {
  return (
    <section className="bg-palette-1 text-palette-3">
      <div className="h-screen text-center flex items-center justify-center">
        <h1 className="title-text bold text-palette-1 bg-palette-3 py-20 w-screen">
          Our Mission
        </h1>
      </div>
      <div className="text-sm sm:text">
        {sections.map((section) =>
          window.innerWidth <= 720 || section.id % 2 == 1 ? (
            <div
              key={section.id}
              className="h-screen grid grid-rows-2 md:grid-rows-none md:grid-cols-2 items-center font-semibold"
            >
              <div className="flex justify-center">
                <div className="w-5/6  ">
                  <img src={section.image} alt="Suits on a rack" />
                </div>
              </div>
              <div className="px-20 sm:px-5">
                <p>{section.paragraph}</p>
              </div>
            </div>
          ) : (
            <div
              key={section.id}
              className="h-screen -gap-y-4 grid grid-rows-2 md:grid-rows-none md:grid-cols-2 items-center font-semibold"
            >
              <div className="px-20 sm:px-5">
                <p>{section.paragraph}</p>
              </div>
              <div className="flex justify-center">
                <div className="w-5/6">
                  <img src={section.image} alt="Suits on a rack" />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
