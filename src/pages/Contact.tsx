
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    toast.success("Thank you for your message! We'll get back to you soon.");
    
    // Reset form
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-petcare-purple/10 to-petcare-pink/10 py-16">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-gray-600">
                We'd love to hear from you! Reach out with any questions, concerns, or if you need help picking the right product for your furry friend.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Info + Form */}
        <div className="section-container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-petcare-purple/10 rounded-full p-3">
                    <Phone className="h-6 w-6 text-petcare-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-gray-600 mt-1">(123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-petcare-purple/10 rounded-full p-3">
                    <Mail className="h-6 w-6 text-petcare-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-600 mt-1">info@petcare4sure.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-petcare-purple/10 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-petcare-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-gray-600 mt-1">123 Pet Street, Pawville, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-petcare-purple/10 rounded-full p-3">
                    <Clock className="h-6 w-6 text-petcare-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold">Business Hours</h3>
                    <div className="text-gray-600 mt-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="mt-8 rounded-2xl overflow-hidden h-64 bg-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203615233!2d-118.38426538495896!3d34.0771857251494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b930d8b95591%3A0x37686e0ae0e0d606!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1651247840348!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                />
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="What's this regarding?"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    rows={5}
                  />
                </div>
                
                <Button type="submit" className="pet-button w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-gray-50 py-16">
          <div className="section-container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find quick answers to common questions about our products and services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  question: "How do I place an order?",
                  answer: "Currently, you can place an order by calling our customer service number or sending us an email with your product selection. We'll get back to you to confirm your order details."
                },
                {
                  question: "What are your shipping options?",
                  answer: "We offer standard shipping which typically takes 3-5 business days. For local customers, we also provide next-day delivery options. Please contact us for specific shipping details."
                },
                {
                  question: "Do you have a return policy?",
                  answer: "Yes, we offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, please contact us to arrange a return or exchange."
                },
                {
                  question: "How can I track my order?",
                  answer: "Once your order is shipped, we'll send you an email with tracking information so you can monitor your delivery."
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm">
                  <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
