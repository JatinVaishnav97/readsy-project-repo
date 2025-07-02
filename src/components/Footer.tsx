
import { Button } from "@/components/ui/button";
import { Heart, Github, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-purple-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              📚 Readsy
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Your vibrant, Rajasthani-themed educational superstore designed specially for students. 
              Making education fun, productive, and organized! ✨
            </p>
            <div className="flex gap-4">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Github className="w-4 h-4 mr-2" />
                Code Repo
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Books & Stationery</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Download Zone</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Student Tools</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Knowledge Hub</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Community</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Student Forums</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Study Groups</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300">
                🚀 <strong>Tech Stack:</strong> HTML, CSS, JavaScript, Java (Servlets), TailwindCSS, Responsive Design
              </p>
            </div>
            <div className="flex items-center text-gray-300">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-2 text-red-500" />
              <span>for students</span>
            </div>
          </div>
          <div className="mt-4 text-gray-400 text-sm">
            <p>© 2024 Readsy - Your Student Superstore. Bringing education and creativity together! 🎧📝</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
