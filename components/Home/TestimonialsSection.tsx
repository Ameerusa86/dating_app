import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sophia",
      message: "This app completely changed my life! I found my soulmate here.",
      image: "/images/avatars/person1.jpg",
    },
    {
      name: "Liam",
      message: "Amazing experience! The matchmaking system is so accurate.",
      image: "/images/avatars/person2.jpg",
    },
    {
      name: "Emma",
      message: "I love how secure and easy to use this app is.",
      image: "/images/avatars/person3.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16 transition-colors duration-300">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-900 dark:text-gray-100">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center transition-colors duration-300"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
                width={80}
                height={80}
              />
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                "{testimonial.message}"
              </p>
              <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
