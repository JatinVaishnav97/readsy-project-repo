
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, BookOpen, PenTool, Download, Shield, Zap, Clock } from "lucide-react";

const DownloadSection = () => {
  const downloadItems = [
    {
      icon: FileText,
      title: "Premium Study Notes",
      description: "Expertly crafted handwritten notes and comprehensive PDFs from top educators",
      count: "5,000+",
      color: "bg-gradient-to-r from-blue-600 to-cyan-600",
      features: ["HD Quality", "Searchable", "Offline Access"]
    },
    {
      icon: BookOpen,
      title: "Elite eBook Collection",
      description: "Exclusive digital textbooks and premium guides from leading publishers",
      count: "2,500+",
      color: "bg-gradient-to-r from-purple-600 to-pink-600",
      features: ["Interactive", "Annotatable", "Multi-format"]
    },
    {
      icon: PenTool,
      title: "Advanced Practice Papers",
      description: "AI-generated mock tests and expertly designed question banks",
      count: "3,000+",
      color: "bg-gradient-to-r from-green-600 to-teal-600",
      features: ["Auto-graded", "Analytics", "Adaptive"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-l from-purple-200/30 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-6">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-800">Premium Downloads</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Instant Access Library
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Download premium study materials instantly with our cloud-powered delivery system. 
            Quality guaranteed, always available.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {downloadItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white/90 backdrop-blur-sm relative overflow-hidden">
              {/* Premium glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 via-purple-200/20 to-pink-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-8 text-center relative z-10">
                <div className={`w-20 h-20 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                  {item.count}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {item.features.map((feature, idx) => (
                    <span key={idx} className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-full px-6 py-2 font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg group">
                  <Download className="w-4 h-4 mr-2" />
                  Access Now
                  <Zap className="w-4 h-4 ml-2 group-hover:text-yellow-300 transition-colors" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Premium stats section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <Clock className="w-8 h-8 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold mb-2">24/7</div>
                <p className="text-gray-300">Instant Downloads</p>
              </div>
              <div className="group">
                <Shield className="w-8 h-8 mx-auto mb-4 text-green-400 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <p className="text-gray-300">Uptime Guarantee</p>
              </div>
              <div className="group">
                <Zap className="w-8 h-8 mx-auto mb-4 text-yellow-400 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold mb-2">2M+</div>
                <p className="text-gray-300">Downloads Served</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl px-12 py-4 rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-2xl font-semibold">
            Explore Premium Library
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
