
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Download, Brain, Newspaper, Users, Sparkles, Zap, Shield, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "📘 Books & Stationery Store",
      description: "Purchase academic books, journals, pens, notebooks & more",
      color: "from-blue-600 to-purple-600",
      delay: "0s"
    },
    {
      icon: Download,
      title: "📂 Download Zone",
      description: "PDFs, handwritten notes, eBooks, and study material at your fingertips",
      color: "from-purple-600 to-pink-600",
      delay: "0.1s"
    },
    {
      icon: Brain,
      title: "🧠 Student Tools",
      description: "Flashcards, resume builder, reading tracker, and productivity boosters",
      color: "from-pink-600 to-orange-600",
      delay: "0.2s"
    },
    {
      icon: Newspaper,
      title: "📰 Knowledge Hub",
      description: "Daily blogs, news, and magazines for learning and awareness",
      color: "from-orange-600 to-yellow-600",
      delay: "0.3s"
    },
    {
      icon: Users,
      title: "🗣️ Student Forums",
      description: "A place to interact, discuss, and grow as a community",
      color: "from-green-600 to-teal-600",
      delay: "0.4s"
    }
  ];

  const highlights = [
    {
      icon: Sparkles,
      title: "🎭 Funky & Youth-Friendly UI",
      description: "Traditional Rajasthani design meets modern aesthetics",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Smartphone,
      title: "📱 Mobile-First Layout",
      description: "Responsive design optimized for all devices",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "⚡ Optimized Performance",
      description: "Fast loading and smooth user experience",
      color: "from-pink-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "🔐 Secure Experience",
      description: "Safe transactions and secure downloads",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-blue-500/15 to-transparent rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/15 to-transparent rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite_1s]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-pink-500/10 to-transparent rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full animate-[float_6s_ease-in-out_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-8 animate-[fade-in-up_1s_ease-out]">
            <Sparkles className="w-4 h-4 text-blue-400 animate-[spin_3s_linear_infinite]" />
            <span className="text-sm font-semibold text-blue-200">Premium Features</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white animate-[fade-in-up_1s_ease-out_0.2s_both]">
            All India Student <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Community</span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 animate-[fade-in-up_1s_ease-out_0.4s_both] font-light">
            Empowering students across India to build, collaborate, and succeed in their academic journey.
          </p>
        </div>
        
        {/* Main features grid with enhanced animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 border border-gray-700/50 bg-gray-800/30 backdrop-blur-xl relative overflow-hidden animate-[fade-in-up_1s_ease-out_both]"
              style={{ animationDelay: feature.delay }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              
              <CardContent className="p-10 relative z-10">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-8 group-hover:scale-125 transition-all duration-500 shadow-2xl relative`}>
                  <feature.icon className="w-10 h-10 text-white" />
                  <div className="absolute inset-0 rounded-3xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights section with enhanced design */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-[fade-in-up_1s_ease-out]">
            Why Choose Readsy?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="border border-gray-700/50 bg-gray-800/20 backdrop-blur-xl hover:bg-gray-800/40 transition-all duration-500 transform hover:-translate-y-3 group animate-[fade-in-up_1s_ease-out_both]"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <CardContent className="p-8 flex items-start space-x-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${highlight.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <highlight.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Enhanced CTA section */}
        <div className="text-center animate-[fade-in-up_1s_ease-out_1.2s_both]">
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-16 border border-gray-700/50 relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6 text-white">Ready to Join the Community?</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-xl leading-relaxed">
                Connect with thousands of students, access premium study materials, and accelerate your academic success.
              </p>
              <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-12 py-4 rounded-full font-bold hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all transform hover:scale-110 shadow-2xl shadow-purple-500/25 text-lg group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center">
                  Join Community
                  <Sparkles className="w-5 h-5 ml-2 animate-[spin_3s_linear_infinite]" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
