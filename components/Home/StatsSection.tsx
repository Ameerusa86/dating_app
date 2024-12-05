export default function StatsSection() {
  const stats = [
    { value: "5M+", label: "Happy Users" },
    { value: "10M+", label: "Matches Made" },
    { value: "50+", label: "Countries Served" },
  ];

  return (
    <section className="bg-gradient-to-r from-pink-500 to-red-500 text-white py-16">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-4xl font-extrabold">{stat.value}</h3>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
