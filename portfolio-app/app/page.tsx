import Hero from "@/components/sections/hero/Hero";
import Reviews from "@/components/sections/reviews/Reviews";
import Roadmap from "@/components/sections/roadmap/Roadmap";
import Location from "@/components/sections/location/Location";
import About from "@/components/sections/about/About";
import Contact from "@/components/sections/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Roadmap />
      <About />
      <Reviews />
      <Location />
      <Contact />
    </>
  );
}
