
import Hero from "@/components/Hero";
import PopulerCountries from "@/components/PopulerCountries";
import TopValies from "@/components/TopValies";
import TourCard from "@/components/TourCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero/>
      <TopValies/>
      <PopulerCountries/>
      <Button>Click Me</Button>
      <TourCard/>
    </main>
  );
}
