import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="bg-yellow-300 py-16 text-center">
      <h2 className="text-3xl font-extrabold mb-4 text-pink-700">
        Ready to Find Love?
      </h2>
      <p className="text-gray-800 mb-8">
        Join now and start your journey towards a meaningful connection.
      </p>
      <Button className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600">
        Get Started
      </Button>
    </section>
  );
}
