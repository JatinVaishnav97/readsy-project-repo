
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Users, Brain, ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-500/10 to-transparent rounded-full blur-2xl"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 border border-gradient-to-r from-orange-400 to-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 transform rotate-45 rounded-lg animate-bounce"></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 border-2 border-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-40 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 transform rotate-12 rounded-lg animate-bounce"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-orange-200">Premium Student Platform</span>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-orange-200 via-pink-200 to-purple-200 bg-clip-text text-transparent leading-tight">
            Readsy
          </h1>
          
          <p className="text-3xl md:text-4xl mb-4 font-light text-gray-200">
            Your <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent font-semibold">Premium</span> Student Superstore
          </p>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of education with our premium platform — where traditional Rajasthani elegance meets cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white text-lg px-10 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl shadow-orange-500/25 group">
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-10 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 group">
              <Play className="w-5 h-5 mr-2" />
              <span>Watch Demo</span>
            </Button>
          </div>
          
          {/* Premium feature highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Premium Books</p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Download className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Instant Downloads</p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">AI-Powered Tools</p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Elite Community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
