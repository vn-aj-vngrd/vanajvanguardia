import { HeroParallax } from "@/components/ui/hero-parallax";
import { products } from "@/data";

export default function Home() {
  return (
    <main className="">
      <HeroParallax products={products} />
    </main>
  );
}
