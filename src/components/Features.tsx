
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Download, Brain, Newspaper, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "📘 Books & Stationery Store",
      description: "Purchase academic books, journals, pens, notebooks & more",
      color: "from-blue-600 to-purple-600"
    },
    {
      icon: Download,
      title: "📂 Download Zone",
      description: "PDFs, handwritten notes, eBooks, and study material at your fingertips",
      color: "from-purple-600 to-pink-600"
    },
    {
      icon: Brain,
      title: "🧠 Student Tools",
      description: "Flashcards, resume builder, reading tracker, and productivity boosters",
      color: "from-pink-600 to-orange-600"
    },
    {
      icon: Newspaper,
      title: "📰 Knowledge Hub",
      description: "Daily blogs, news, and magazines for learning and awareness",
      color: "from-orange-600 to-yellow-600"
    },
    {
      icon: Users,
      title: "🗣️ Student Forums",
      description: "A place to interact, discuss, and grow as a community",
      color: "from-green-600 to-teal-600"
    }
  ];

  const highlights = [
    {
      title: "🎭 Funky & Youth-Friendly UI",
      description: "Traditional Rajasthani design meets modern aesthetics"
    },
    {
      title: "📱 Mobile-First Layout",
      description: "Responsive design optimized for all devices"
    },
    {
      title: "⚡ Optimized Performance",
      description: "Fast loading and smooth user experience"
    },
    {
      title: "🔐 Secure Experience",
      description: "Safe transactions and secure downloads"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            All India Student <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Community</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Empowering students across India to build, collaborate, and succeed in their academic journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-700/50 bg-gray-800/50 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-8 relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-lg font-bold mb-3 text-white">{highlight.title}</h3>
                <p className="text-gray-300">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 border border-gray-700/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-white">Ready to Join the Community?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Connect with thousands of students, access premium study materials, and accelerate your academic success.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-xl">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
