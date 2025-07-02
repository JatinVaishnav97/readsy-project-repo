
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden">
      {/* Animated background layers */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/30 via-purple-500/20 to-transparent animate-pulse"></div>
        
        {/* Floating orbs with parallax effect */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-40 right-32 w-96 h-96 bg-gradient-to-l from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute bottom-32 left-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl animate-[float_7s_ease-in-out_infinite]"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px] animate-[grid-move_20s_linear_infinite]"></div>
        </div>
      </div>
      
      {/* Premium geometric shapes with enhanced animations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-24 left-24 w-32 h-32 border-2 border-blue-400/40 rounded-full animate-[spin_20s_linear_infinite] before:content-[''] before:absolute before:inset-4 before:border before:border-blue-300/30 before:rounded-full before:animate-[spin_15s_linear_infinite_reverse]"></div>
        <div className="absolute top-48 right-40 w-24 h-24 bg-gradient-to-r from-purple-400/30 to-pink-400/30 transform rotate-45 rounded-2xl animate-[bounce_3s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-40 left-40 w-28 h-28 border-2 border-yellow-400/40 rounded-full animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-32 right-32 w-20 h-20 bg-gradient-to-r from-green-400/30 to-teal-400/30 transform rotate-12 rounded-2xl animate-[wiggle_6s_ease-in-out_infinite]"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Premium floating badge with glow effect */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-500/30 rounded-full px-8 py-3 mb-12 shadow-2xl shadow-blue-500/20 animate-[fade-in-up_1s_ease-out]">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
            <Sparkles className="w-4 h-4 text-blue-300 animate-[spin_3s_linear_infinite]" />
            <span className="text-sm font-semibold text-blue-200 tracking-wide">Student Superstore Platform</span>
            <Star className="w-4 h-4 text-yellow-400 animate-pulse" />
          </div>
          
          {/* Main title with enhanced typography */}
          <h1 className="text-7xl md:text-9xl font-black mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight animate-[fade-in-up_1s_ease-out_0.2s_both] drop-shadow-2xl">
            📚 Readsy
          </h1>
          
          {/* Subtitle with premium styling */}
          <p className="text-3xl md:text-4xl mb-6 font-light text-gray-200 animate-[fade-in-up_1s_ease-out_0.4s_both]">
            Your <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">Student</span> Superstore
          </p>
          
          {/* Description with enhanced readability */}
          <p className="text-xl md:text-2xl mb-16 text-gray-300 max-w-4xl mx-auto leading-relaxed animate-[fade-in-up_1s_ease-out_0.6s_both] font-light">
            Turning boring study material into a vibe! 🎧📝 <br />
            <span className="text-lg text-gray-400 mt-2 block">Experience the perfect blend of traditional Rajasthani design with modern educational technology.</span>
          </p>
          
          {/* Premium CTA button */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-20 animate-[fade-in-up_1s_ease-out_0.8s_both]">
            <Button className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white text-xl px-12 py-6 rounded-full font-bold transform hover:scale-110 transition-all duration-500 shadow-2xl shadow-purple-500/30 group overflow-hidden">
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <span className="relative z-10 flex items-center">
                Explore Now
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </div>
          
          {/* Enhanced stats section with animations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-[fade-in-up_1s_ease-out_1s_both]">
            <div className="group cursor-pointer transform hover:scale-110 transition-all duration-500">
              <div className="relative">
                <div className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3 animate-[count-up_2s_ease-out_1.2s_both]">
                  10K+
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-30"></div>
              </div>
              <p className="text-base font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">Study Materials</p>
            </div>
            
            <div className="group cursor-pointer transform hover:scale-110 transition-all duration-500">
              <div className="relative">
                <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 animate-[count-up_2s_ease-out_1.4s_both]">
                  5K+
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-30"></div>
              </div>
              <p className="text-base font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">Active Students</p>
            </div>
            
            <div className="group cursor-pointer transform hover:scale-110 transition-all duration-500">
              <div className="relative">
                <div className="text-5xl font-black bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-3 animate-[count-up_2s_ease-out_1.6s_both]">
                  500+
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-400 rounded-full animate-ping opacity-30"></div>
              </div>
              <p className="text-base font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">Daily Downloads</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
