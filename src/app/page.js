// Components
import Hero from "@/components/template/Hero/Hero";
import Cards from "@/components/template/Cards/Cards";
import Help from "@/components/template/Help/Help";
import PriceBox from "@/components/template/PriceBox/PriceBox";
import News from "@/components/template/News/News";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Help />
      <Cards />
      <PriceBox />
      <News />
    </main>
  );
}
