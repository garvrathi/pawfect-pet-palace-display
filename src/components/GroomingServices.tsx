
import { Scissors, ShowerHead, Brush, Trim } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GroomingServices = () => {
  const services = [
    {
      title: "Full Grooming",
      description: "Complete service including bath, haircut, nail trimming, ear cleaning, and more.",
      icon: <Scissors className="h-10 w-10 text-petcare-purple" />,
      price: "Rs. 1500 - 3000",
    },
    {
      title: "Bath & Brush",
      description: "Thorough bath with premium shampoo and conditioner, followed by a complete brush-out.",
      icon: <ShowerHead className="h-10 w-10 text-petcare-purple" />,
      price: "Rs. 800 - 1800",
    },
    {
      title: "Nail Trimming",
      description: "Careful trimming of your pet's nails to keep them comfortable and prevent issues.",
      icon: <Trim className="h-10 w-10 text-petcare-purple" />,
      price: "Rs. 400 - 600",
    },
    {
      title: "De-shedding Treatment",
      description: "Specialized treatment to reduce shedding and remove loose fur from your pet's coat.",
      icon: <Brush className="h-10 w-10 text-petcare-purple" />,
      price: "Rs. 800 - 1500",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Grooming Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a range of professional grooming services tailored to meet your pet's specific needs, ensuring they look and feel their best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 hover:border-petcare-purple/30 transition-all duration-300 hover:shadow-md">
              <CardHeader>
                <div className="bg-petcare-pink/20 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="font-semibold text-lg text-petcare-purple">
                  {service.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Prices may vary based on pet size, coat condition, and specific breed requirements.
            Please contact us for an accurate quote.
          </p>
          <Button className="pet-button">Schedule an Appointment</Button>
        </div>
      </div>
    </section>
  );
};

export default GroomingServices;
