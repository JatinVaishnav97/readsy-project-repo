
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Download, Brain, Newspaper, Users, Crown, Star, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Premium Books & Stationery",
      description: "Curated collection of academic excellence with exclusive materials from top publishers",
      color: "from-orange-400 to-red-500",
      badge: "Premium",
      stats: "10K+ Items"
    },
    {
      icon: Download,
      title: "Instant Download Hub",
      description: "Lightning-fast access to premium PDFs, notes, and study materials with cloud sync",
      color: "from-pink-400 to-purple-500",
      badge: "Pro",
      stats: "50K+ Downloads"
    },
    {
      icon: Brain,
      title: "AI-Powered Study Tools",
      description: "Next-generation flashcards, smart resume builder, and intelligent productivity suite",
      color: "from-blue-400 to-indigo-500",
      badge: "AI",
      stats: "15+ Tools"
    },
    {
      icon: Newspaper,
      title: "Elite Knowledge Hub",
      description: "Expert-curated content, industry insights, and premium educational resources",
      color: "from-green-400 to-teal-500",
      badge: "Elite",
      stats: "Daily Updates"
    },
    {
      icon: Users,
      title: "Exclusive Community",
      description: "Connect with top performers, industry leaders, and academic excellence seekers",
      color: "from-yellow-400 to-orange-500",
      badge: "VIP",
      stats: "100K+ Members"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-orange-100/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-100/50 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full px-6 py-2 mb-6">
            <Crown className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-800">Premium Features</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-orange-600 to-pink-600 bg-clip-text text-transparent">
            Unlock Excellence
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the pinnacle of educational technology with our premium suite of tools, 
            designed for students who demand nothing but the best.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white/80 backdrop-blur-sm relative overflow-hidden">
              {/* Premium gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200/50 via-pink-200/50 to-purple-200/50 rounded-lg p-[1px]">
                <div className="bg-white rounded-lg h-full w-full"></div>
              </div>
              
              <CardContent className="p-8 relative z-10">
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {feature.badge}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-orange-600">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold">{feature.stats}</span>
                  </div>
                  <Zap className="w-5 h-5 text-yellow-500 group-hover:text-yellow-400 transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Premium CTA section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Experience Premium?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join thousands of successful students who have transformed their academic journey with our premium platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-xl">
                  Start Premium Trial
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all">
                  View All Features
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
