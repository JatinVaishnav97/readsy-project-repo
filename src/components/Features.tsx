
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Download, Brain, Newspaper, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "📘 Books & Stationery Store",
      description: "Purchase academic books, journals, pens, notebooks & more",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: Download,
      title: "📂 Download Zone",
      description: "PDFs, handwritten notes, eBooks, and study material at your fingertips",
      color: "from-pink-400 to-purple-500"
    },
    {
      icon: Brain,
      title: "🧠 Student Tools",
      description: "Flashcards, resume builder, reading tracker, and productivity boosters",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: Newspaper,
      title: "📰 Knowledge Hub",
      description: "Daily blogs, news, and magazines for learning and awareness",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: Users,
      title: "🗣️ Student Forums",
      description: "A place to interact, discuss, and grow as a community",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
            🛍️ Key Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need for your academic journey, designed with love and a touch of Rajasthani charm!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
