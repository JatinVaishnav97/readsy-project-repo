
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Users, Brain } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 text-white overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 border-4 border-white transform rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-40 right-40 w-16 h-16 border-4 border-white transform rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
            📚 Readsy
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-semibold">
            Your Student Superstore ✨
          </p>
          <p className="text-lg md:text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            A vibrant, Rajasthani-themed educational platform designed specially for students! 
            Explore, buy, and download essential academic resources — all in one place.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button className="bg-white text-purple-600 hover:bg-orange-100 text-lg px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all">
              🛍️ Start Shopping
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all">
              📂 Download Zone
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <BookOpen className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Books & Stationery</p>
            </div>
            <div className="p-4">
              <Download className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Download Zone</p>
            </div>
            <div className="p-4">
              <Brain className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Student Tools</p>
            </div>
            <div className="p-4">
              <Users className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
