
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GroomingServices from "@/components/GroomingServices";
import GroomingHero from "@/components/GroomingHero";

const Grooming = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full overflow-x-hidden">
        <GroomingHero />
        <GroomingServices />
      </main>
      <Footer />
    </div>
  );
};

export default Grooming;
