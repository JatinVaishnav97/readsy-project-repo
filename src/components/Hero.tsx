
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-500/10 to-transparent rounded-full blur-2xl"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-pink-400/20 transform rotate-45 rounded-lg animate-bounce"></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 border-2 border-yellow-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-40 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-purple-400/20 transform rotate-12 rounded-lg animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-blue-200">Student Superstore Platform</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
            📚 Readsy
          </h1>
          
          <p className="text-2xl md:text-3xl mb-4 font-light text-gray-200">
            Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">Student</span> Superstore
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Turning boring study material into a vibe! 🎧📝 Experience the perfect blend of traditional Rajasthani design with modern educational technology.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-10 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/25 group">
              <span>Explore Now</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Study Materials</p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                5K+
              </div>
              <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Active Students</p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Daily Downloads</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
