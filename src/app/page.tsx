import Header from "@/components/Header";
import Hero from "@/components/Hero"
import Cards from "@/components/Cards";
import Image from "next/image";
import Clients from "@/components/Clients";
import OfferSection from "@/components/OfferSection";
import Approach from "@/components/Approach";
import ThreeImages from "@/components/ThreeImages";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <OfferSection/>
    <Cards/>
    <Clients/>
    <ThreeImages/>
    <Approach/>
    </>
  );
}
