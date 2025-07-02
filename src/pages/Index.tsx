
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DownloadSection from "@/components/DownloadSection";
import StudentTools from "@/components/StudentTools";
import KnowledgeHub from "@/components/KnowledgeHub";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      <Hero />
      <Features />
      <DownloadSection />
      <StudentTools />
      <KnowledgeHub />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
