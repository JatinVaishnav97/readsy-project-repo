
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, FileText, Calendar, Target } from "lucide-react";

const StudentTools = () => {
  const tools = [
    {
      icon: Brain,
      title: "🧠 Flashcards",
      description: "Create and study with smart flashcards",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: FileText,
      title: "📄 Resume Builder",
      description: "Build professional resumes easily",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: Calendar,
      title: "📅 Reading Tracker",
      description: "Track your reading progress and goals",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Target,
      title: "🎯 Productivity Tools",
      description: "Boost your study efficiency",
      color: "from-orange-400 to-red-500"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            🧠 Student Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful tools to enhance your learning experience and boost productivity!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">{tool.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                <Button variant="outline" className="rounded-full border-gray-300 hover:bg-gray-50 text-sm">
                  Try Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-lg px-8 py-3 rounded-full hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all">
            🔧 Access All Tools
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudentTools;
