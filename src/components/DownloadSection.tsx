
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, BookOpen, PenTool, Download } from "lucide-react";

const DownloadSection = () => {
  const downloadItems = [
    {
      icon: FileText,
      title: "Study Notes",
      description: "Handwritten notes and PDFs",
      count: "2000+",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      icon: BookOpen,
      title: "eBooks",
      description: "Digital textbooks and guides",
      count: "500+",
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      icon: PenTool,
      title: "Practice Papers",
      description: "Mock tests and question banks",
      count: "1000+",
      color: "bg-gradient-to-r from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            📂 Download Zone
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access thousands of study materials, notes, and resources instantly!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {downloadItems.map((item, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <CardContent className="p-6 text-center">
                <div className={`w-20 h-20 rounded-full ${item.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{item.count}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 rounded-full">
                  <Download className="w-4 h-4 mr-2" />
                  Browse Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg px-8 py-3 rounded-full hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all">
            🚀 Explore All Downloads
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
