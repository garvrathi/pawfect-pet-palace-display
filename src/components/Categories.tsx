
import { Link } from "react-router-dom";
import { Bone, Heart, Baby, Medal } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      name: "Pet Food",
      description: "Nutritious and delicious food for all types of pets",
      icon: <Bone className="h-8 w-8 text-petcare-purple" />,
      color: "bg-petcare-green/30",
      link: "/products/food",
    },
    {
      name: "Pet Toys",
      description: "Fun and engaging toys to keep your pets entertained",
      icon: <Baby className="h-8 w-8 text-petcare-purple" />,
      color: "bg-petcare-pink/30",
      link: "/products/toys",
    },
    {
      name: "Accessories",
      description: "Stylish and functional accessories for your furry friends",
      icon: <Medal className="h-8 w-8 text-petcare-purple" />,
      color: "bg-petcare-blue/30",
      link: "/products/accessories",
    },
    {
      name: "Health & Care",
      description: "Products to keep your pets healthy and happy",
      icon: <Heart className="h-8 w-8 text-petcare-purple" />,
      color: "bg-petcare-peach/30",
      link: "/products/health",
    },
  ];

  return (
    <section className="bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our wide range of pet care products designed to provide comfort, joy, and well-being to your beloved companions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="block group"
            >
              <div className={`rounded-2xl ${category.color} p-6 h-full transition-transform duration-300 group-hover:-translate-y-2`}>
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
