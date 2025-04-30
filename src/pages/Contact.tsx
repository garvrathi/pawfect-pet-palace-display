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
                We'd love to hear from you! Reach out with any questions,
                concerns, or if you need help picking the right product for your
                furry friend.
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
                    <p className="text-gray-600 mt-1">+91 8287718294</p>
                    <p className="text-gray-600 mt-1">+91 8700650039</p>
                  </div>
                </div>
                {/* Instagram Contact - Added this new section */}
                <div className="flex items-start space-x-4">
                  <div className="bg-petcare-purple/10 rounded-full p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-petcare-purple"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Instagram</h3>
                    <p className="text-gray-600 mt-1">@petcare4sure</p>
                    <a
                      href="https://www.instagram.com/petcare4sure26/profilecard/?igsh=MTRwYzI3a3ZqZmNreg=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-petcare-purple hover:underline mt-1 inline-block"
                    >
                      Visit our profile
                    </a>
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
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
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
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find quick answers to common questions about our products and
                services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  question: "How do I place an order?",
                  answer:
                    "Currently, you can place an order by calling our customer service number or sending us an email with your product selection. We'll get back to you to confirm your order details.",
                },
                {
                  question: "What are your shipping options?",
                  answer:
                    "We offer standard shipping which typically takes 3-5 business days. For local customers, we also provide next-day delivery options. Please contact us for specific shipping details.",
                },
                {
                  question: "Do you have a return policy?",
                  answer:
                    "Yes, we offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, please contact us to arrange a return or exchange.",
                },
                {
                  question: "How can I track my order?",
                  answer:
                    "Once your order is shipped, we'll send you an email with tracking information so you can monitor your delivery.",
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
