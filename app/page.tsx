
import Feature01 from "@/components/Feature01";
import Feature02 from "@/components/Feature02";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
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
      <Feature01/>
      <PopulerCountries/>
      <Feature02/>
      <Newsletter/>
    </main>
  );
}
