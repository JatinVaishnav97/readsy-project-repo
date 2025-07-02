
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Newspaper, BookOpen, TrendingUp } from "lucide-react";

const KnowledgeHub = () => {
  const articles = [
    {
      title: "Top 10 Study Techniques for Better Results",
      category: "Study Tips",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400"
    },
    {
      title: "Career Guidance for Engineering Students",
      category: "Career",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      title: "Latest Education Technology Trends",
      category: "Tech News",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
            📰 Knowledge Hub
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with daily blogs, news, and magazines for continuous learning!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors">
                  {article.title}
                </h3>
                <Button variant="outline" className="rounded-full border-orange-300 text-orange-600 hover:bg-orange-50">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            <Newspaper className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Daily News</h3>
            <p className="mb-4">Latest educational updates</p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Read News
            </Button>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-to-br from-green-500 to-teal-600 text-white">
            <BookOpen className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Study Blogs</h3>
            <p className="mb-4">Expert tips and guides</p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
              Browse Blogs
            </Button>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-to-br from-pink-500 to-rose-600 text-white">
            <TrendingUp className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Trending Topics</h3>
            <p className="mb-4">What's hot in education</p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-rose-600">
              Explore Trends
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;
