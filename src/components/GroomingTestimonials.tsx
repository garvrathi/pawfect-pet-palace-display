
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const GroomingTestimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      pet: "Max, Golden Retriever",
      rating: 5,
      comment:
        "The grooming team is absolutely amazing! My Golden Retriever always comes back looking gorgeous and smelling wonderful. They're so patient with him.",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Rahul Patel",
      pet: "Luna, Persian Cat",
      rating: 5,
      comment:
        "I've tried many groomers for my Persian cat, but none compare to Petcare4sure. They know exactly how to handle her coat and keep her calm during the process.",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Ananya Gupta",
      pet: "Bruno, French Bulldog",
      rating: 5,
      comment:
        "My French Bulldog used to hate grooming sessions until we found Petcare4sure. Now he gets excited when it's grooming day! Amazing service.",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
  ];

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <StarIcon
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Happy Pet Parents</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our clients have to say about our grooming services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.pet}
                      className="w-16 h-16 rounded-full object-cover border-2 border-petcare-purple"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.pet}</p>
                    <div className="flex mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-petcare-purple mb-4">
            Join our growing list of satisfied customers!
          </p>
          <Button className="pet-button">Book Your Pet's Grooming Session Today</Button>
        </div>
      </div>
    </section>
  );
};

export default GroomingTestimonials;
