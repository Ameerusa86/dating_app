import { FaHeart, FaLock, FaMagic } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaHeart className="text-pink-500 w-10 h-10" />,
      title: "Smart Matchmaking",
      description: "Our algorithm finds your most compatible matches.",
    },
    {
      icon: <FaLock className="text-blue-500 w-10 h-10" />,
      title: "Privacy First",
      description: "We prioritize your safety and keep your data secure.",
    },
    {
      icon: <FaMagic className="text-yellow-500 w-10 h-10" />,
      title: "Easy to Use",
      description: "A user-friendly experience designed for everyone.",
    },
  ];

  return (
    <section className="bg-white py-16 text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              {feature.icon}
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
