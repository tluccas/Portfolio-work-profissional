import Hero from "@/components/sections/hero/Hero";
import Reviews from "@/components/sections/reviews/Reviews";
import Roadmap from "@/components/sections/roadmap/Roadmap";
import Location from "@/components/sections/location/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <Roadmap />
      <Reviews />
      <Location />
    </>
  );
}
