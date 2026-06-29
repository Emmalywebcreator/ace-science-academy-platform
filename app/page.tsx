import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/landing/Hero';
import Subjects from "@/components/landing/Subjects";
import Pricing from "@/components/landing/Pricing";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Subjects />
        <Pricing />
      </main>
    </>
  );
}