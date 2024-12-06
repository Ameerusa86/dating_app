import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 text-center">
      <h2 className="text-3xl font-extrabold mb-4 text-pink-700 dark:text-pink-400">
        Ready to Find Love?
      </h2>
      <p className="text-gray-800 dark:text-gray-300 mb-8">
        Join now and start your journey towards a meaningful connection.
      </p>
      <Button className="bg-pink-500 dark:bg-pink-600 text-white dark:text-gray-200 px-8 py-3 rounded-lg hover:bg-pink-600 dark:hover:bg-pink-700">
        Get Started
      </Button>
    </section>
  );
}
