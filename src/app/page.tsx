import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Sumo360 } from "@/components/sections/sumo360";
import { Craftsmanship } from "@/components/sections/craftsmanship";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Sumo360 />
      <Craftsmanship />
      <Contact />
    </>
  );
}
