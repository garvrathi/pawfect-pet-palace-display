
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Heart, Award, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-petcare-purple/10 to-petcare-pink/10 py-16">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">About Petcare4sure</h1>
              <p className="text-lg text-gray-600">
                We're on a mission to make quality pet care accessible to everyone, because your pets deserve the best.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Story Section */}
        <div className="section-container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-petcare-purple/20 text-petcare-purple px-3 py-1 rounded-full text-sm font-medium">
                Our Story
              </span>
              <h2 className="text-3xl font-bold mt-3 mb-4">
                From Pet Lovers to Pet Product Specialists
              </h2>
              <p className="text-gray-600 mb-4">
                Petcare4sure began with a simple idea: all pets deserve high-quality care without the premium price tag. Founded in 2018 by a group of passionate pet owners, we started as a small online store with just a handful of carefully selected products.
              </p>
              <p className="text-gray-600 mb-4">
                Today, we've grown into a trusted source of premium pet products, but our mission remains unchanged. We still personally test and select each product, ensuring they meet our high standards for quality, safety, and value.
              </p>
              <p className="text-gray-600">
                What makes us different is our commitment to education. We believe informed pet owners make better decisions, which is why we provide detailed information about all our products and regularly share useful pet care tips.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1601758124510-52d32b8494e7?q=80&w=500&auto=format&fit=crop"
                alt="Pet store"
                className="rounded-2xl shadow-md h-64 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=500&auto=format&fit=crop"
                alt="Happy customer with dog"
                className="rounded-2xl shadow-md h-64 w-full object-cover transform translate-y-8"
              />
              <img
                src="https://images.unsplash.com/photo-1583511655826-05700a892abd?q=80&w=500&auto=format&fit=crop"
                alt="Dog with toy"
                className="rounded-2xl shadow-md h-64 w-full object-cover transform -translate-y-8"
              />
              <img
                src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=500&auto=format&fit=crop"
                alt="Pet store"
                className="rounded-2xl shadow-md h-64 w-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="bg-gray-50 py-16">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="bg-petcare-purple/20 text-petcare-purple px-3 py-1 rounded-full text-sm font-medium">
                Our Values
              </span>
              <h2 className="text-3xl font-bold mt-3 mb-4">
                What We Stand For
              </h2>
              <p className="text-gray-600">
                These core principles guide everything we do, from product selection to customer service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="bg-petcare-pink/30 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Heart className="h-7 w-7 text-petcare-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Pet Welfare First</h3>
                <p className="text-gray-600">
                  We only sell products that contribute positively to your pet's health, happiness, and wellbeing.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="bg-petcare-green/30 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Award className="h-7 w-7 text-petcare-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Guarantee</h3>
                <p className="text-gray-600">
                  Every product is carefully tested and selected to ensure it meets our high standards for durability and safety.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="bg-petcare-blue/30 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-petcare-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Customer Education</h3>
                <p className="text-gray-600">
                  We believe in empowering pet owners with knowledge to make informed decisions about their pet's care.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="section-container py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="bg-petcare-purple/20 text-petcare-purple px-3 py-1 rounded-full text-sm font-medium">
              Our Team
            </span>
            <h2 className="text-3xl font-bold mt-3 mb-4">
              Meet The Pet Lovers
            </h2>
            <p className="text-gray-600">
              Our team is made up of passionate pet owners who understand your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
                pet: "2 dogs, 1 cat"
              },
              {
                name: "Mike Thompson",
                role: "Product Specialist",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop",
                pet: "1 dog, 2 rabbits"
              },
              {
                name: "Emily Parker",
                role: "Customer Support",
                image: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=500&auto=format&fit=crop",
                pet: "3 cats"
              },
              {
                name: "David Wilson",
                role: "Logistics Manager",
                image: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=500&auto=format&fit=crop",
                pet: "1 dog, 1 parrot"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="h-56 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-petcare-purple font-medium text-sm mb-1">{member.role}</p>
                  <p className="text-gray-500 text-sm">Pet parent to: {member.pet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-petcare-purple/30 to-petcare-pink/30 py-16">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
              <p className="text-lg text-gray-700 mb-8">
                We'd love to hear from you and help you find the perfect products for your pets.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="pet-button gap-2">
                  <Phone className="h-4 w-4" /> Call Us
                </Button>
                <Link to="/contact">
                  <Button variant="outline" className="rounded-full border-petcare-purple/30 text-petcare-purple hover:bg-petcare-purple/10">
                    Contact Form
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default About;
