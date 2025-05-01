
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GroomingServices from "@/components/GroomingServices";
import GroomingTestimonials from "@/components/GroomingTestimonials";
import GroomingHero from "@/components/GroomingHero";

const Grooming = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <GroomingHero />
        <GroomingServices />
        <GroomingTestimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Grooming;
