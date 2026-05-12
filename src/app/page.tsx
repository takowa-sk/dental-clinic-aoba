import { Hero } from "@/components/sections/Hero";
import { Concept } from "@/components/sections/Concept";
import { TreatmentsList } from "@/components/sections/TreatmentsList";
import { DoctorShort } from "@/components/sections/DoctorShort";
import { Features } from "@/components/sections/Features";
import { FirstVisitBanner } from "@/components/sections/FirstVisitBanner";
import { NewsList } from "@/components/sections/NewsList";
import { AccessOverview } from "@/components/sections/AccessOverview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Concept />
      <TreatmentsList />
      <DoctorShort />
      <Features />
      <FirstVisitBanner />
      <NewsList />
      <AccessOverview />
    </>
  );
}
