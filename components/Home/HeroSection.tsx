import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative pt-20 -mt-20 md:pt-24 bg-gradient-to-r from-rose-500 via-pink-400 to-red-400 text-white">
      {/* Background */}
      <Image
        src="/images/avatars/person1.jpg"
        alt="Dating App Background"
        fill
        className="object-cover opacity-60"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-5rem)] space-y-8 text-center px-4">
        <h1 className="text-5xl font-extrabold drop-shadow-md">
          Discover <span className="text-yellow-300">Your Love</span> Today
        </h1>
        <p className="text-xl max-w-2xl drop-shadow-sm">
          Join a vibrant community of singles and build meaningful connections.
        </p>
        <Button className="bg-yellow-300 text-red-800 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
          Get Started
        </Button>
      </div>
    </section>
  );
}
