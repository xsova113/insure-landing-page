import {
  FeaturesSection,
  HeroSection,
  HowWeWorkSection,
} from "./components/section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HowWeWorkSection />
    </main>
  );
}
