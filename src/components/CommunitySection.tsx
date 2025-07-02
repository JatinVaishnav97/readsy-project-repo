
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, MessageCircle, Heart, Star } from "lucide-react";

const CommunitySection = () => {
  const stats = [
    { icon: Users, label: "Active Students", value: "50K+" },
    { icon: MessageCircle, label: "Discussions", value: "10K+" },
    { icon: Heart, label: "Helpful Answers", value: "25K+" },
    { icon: Star, label: "Success Stories", value: "5K+" }
  ];

  const forums = [
    {
      title: "📚 Study Groups",
      description: "Join study groups for your subjects",
      members: "12.5K members",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "💼 Career Guidance",
      description: "Get advice from seniors and experts",
      members: "8.2K members",
      color: "from-green-400 to-green-600"
    },
    {
      title: "🎯 Exam Preparation",
      description: "Share tips and strategies",
      members: "15.3K members",
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "🌟 Success Stories",
      description: "Celebrate achievements together",
      members: "6.8K members",
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            🗣️ Student Community
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect, collaborate, and grow with fellow students from across the country!
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 border-0 bg-white/80 backdrop-blur-sm">
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-purple-600" />
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {forums.map((forum, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${forum.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">{forum.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{forum.description}</p>
                <p className="text-xs text-gray-500 mb-4">{forum.members}</p>
                <Button variant="outline" className="w-full rounded-full border-purple-300 text-purple-600 hover:bg-purple-50">
                  Join Forum
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg px-8 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all">
            🚀 Join Our Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
