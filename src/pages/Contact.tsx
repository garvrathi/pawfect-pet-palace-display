import { Phone, Mail, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
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

        {/* Contact Information */}
        <div className="section-container py-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Get In Touch
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phone */}
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-petcare-purple/10 rounded-full p-3 w-fit mx-auto mb-4">
                  <Phone className="h-6 w-6 text-petcare-purple" />
                </div>
                <h3 className="font-bold text-lg text-center mb-2">Call Us</h3>
                <div className="text-center space-y-1">
                  <p className="text-gray-600">+91 8287718294</p>
                  <p className="text-gray-600">+91 8700650039</p>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-petcare-purple/10 rounded-full p-3 w-fit mx-auto mb-4">
                  <Mail className="h-6 w-6 text-petcare-purple" />
                </div>
                <h3 className="font-bold text-lg text-center mb-2">Email Us</h3>
                <div className="text-center">
                  <a
                    href="mailto:info@petcare4sure.com"
                    className="text-petcare-purple hover:underline break-all px-2 inline-block"
                  >
                    info@petcare4sure.com
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-petcare-purple/10 rounded-full p-3 w-fit mx-auto mb-4">
                  <Instagram className="h-6 w-6 text-petcare-purple" />
                </div>
                <h3 className="font-bold text-lg text-center mb-2">DM Us</h3>
                <div className="text-center">
                  <a
                    href="https://www.instagram.com/petcare4sure26/profilecard/?igsh=MTRwYzI3a3ZqZmNreg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-petcare-purple hover:underline"
                  >
                    @petcare4sure
                  </a>
                </div>
              </div>
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
