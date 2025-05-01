
import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";

const GroomingHero = () => {
  return (
    <section className="bg-gradient-to-b from-petcare-pink/20 to-white pt-16 pb-12">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="order-2 lg:order-1">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-gray-800">
            <span className="bg-gradient-to-r from-petcare-purple to-petcare-pink bg-clip-text text-transparent">
              Professional Pet Grooming
            </span>{" "}
            Services
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-xl">
            Give your pets the pampering they deserve with our expert grooming
            services. From baths and haircuts to nail trimming and ear cleaning,
            we provide comprehensive care for all breeds.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact">
              <Button className="pet-button text-base px-6 py-5 md:px-8 md:py-6">
                Book Appointment
              </Button>
            </a>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-petcare-blue/30 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-petcare-peach/40 rounded-full blur-xl" />
            <img
              src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Dog being groomed"
              className="rounded-2xl shadow-lg w-full h-auto object-cover relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroomingHero;
