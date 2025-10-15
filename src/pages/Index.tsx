import Hero from "../components/Hero";
import DatasetOverview from "../components/DatasetOverview";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <DatasetOverview />
    </div>
  );
};

export default Index;
