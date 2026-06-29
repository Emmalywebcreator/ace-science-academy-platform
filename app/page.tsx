import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/landing/Hero';
import Subjects from "@/components/landing/Subjects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Subjects />
      </main>
    </>
  );
}