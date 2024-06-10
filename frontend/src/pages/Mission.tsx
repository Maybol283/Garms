import AboutImg1 from "../assets/About-1.jpg";
import AboutImg2 from "../assets/About-2.jpg";
import AboutImg3 from "../assets/About-3.jpg";
import { animated, useInView, useSpring } from "@react-spring/web";

const sections = [
  {
    id: 1,
    heading: "Bringing Your Style",
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
    heading: "Quality Over Excess",
    paragraph: `At Garms, we are dedicated to bringing you high-quality garments
that not only enhance your style but also boost your confidence.
Our carefully curated collection is designed to feature the latest
fashion trends as well as timeless classics, ensuring that there
is something to suit every individual's taste and occasion.`,
    image: AboutImg2,
  },
  {
    id: 3,
    heading: "Meeting Your Needs",
    paragraph: `Our goal is to provide you with a wardrobe that reflects your
personal style and meets your needs, no matter the event or
setting. From everyday essentials to special occasion outfits,
Garms is your go-to destination for fashion that inspires
confidence and makes a lasting impression.`,
    image: AboutImg3,
  },
];

function MissionImage({ image }: { image: string }) {
  const [slideUpRef, slideUp] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "0% 0%",
      once: true,
    }
  );
  return (
    <animated.div style={slideUp} ref={slideUpRef}>
      <div className="w-5/6 m-auto">
        <img className="rounded-md " src={image} alt="Suits on a rack" />
      </div>
    </animated.div>
  );
}

function MissionContent({
  heading,
  paragraph,
}: {
  heading: string;
  paragraph: string;
}) {
  const [slideDownRef, slideDown] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: -100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
    {
      rootMargin: "-40% 0%",
      once: true,
    }
  );
  return (
    <animated.div
      style={slideDown}
      ref={slideDownRef}
      className=" px-5 text-align-center"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl pb-8">{heading}</h1>
      <p className="">{paragraph}</p>
    </animated.div>
  );
}

export default function Mission() {
  const opacity = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
  });

  return (
    <section className="bg-palette-1 text-palette-3 2xl:pb-10">
      <animated.div
        style={opacity}
        className="h-screen text-center flex items-center justify-center"
      >
        <animated.h1
          style={opacity}
          className="opacity-1 title-text bold text-palette-1 bg-palette-3 py-20 w-screen"
        >
          Our Mission
        </animated.h1>
      </animated.div>
      <div className="text-sm sm:text">
        {sections.map((section) =>
          window.innerWidth <= 1020 || section.id % 2 == 1 ? (
            <div
              key={section.id}
              className="snap-y snap-mandatory h-screen xl:h-fit grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 items-center font-semibold"
            >
              <MissionContent
                heading={section.heading}
                paragraph={section.paragraph}
              />
              <MissionImage image={section.image} />
            </div>
          ) : (
            <div
              key={section.id}
              className="h-screen grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 items-center font-semibold"
            >
              <MissionImage image={section.image} />
              <MissionContent
                heading={section.heading}
                paragraph={section.paragraph}
              />
            </div>
          )
        )}
      </div>
    </section>
  );
}
