import Footer from "@/components/Footer";
import GaleriPreview from "@/components/GaleriPreview";
import GotoQuiz from "@/components/Goto-quiz";
import Hero from "@/components/Hero";
import PesanSection from "@/components/PesanSection";
import SuratSection from "@/components/SuratSection";
import TimelineSection from "@/components/TimelineSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <GaleriPreview />
      <TimelineSection />
      <PesanSection />
      <GotoQuiz />
      <SuratSection />
      <Footer />
    </main>
  );
}
