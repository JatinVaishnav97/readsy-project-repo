
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-16 px-6 relative">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* CTA Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 border border-gray-700/50 max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold mb-4 text-white">
              Any questions? Interested in utilizing our services?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Don't hesitate to hit us up!
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all shadow-xl group">
              Email Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              📚 Readsy
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Your vibrant, Rajasthani-themed educational superstore designed specially for students. 
              Making education fun, productive, and organized! ✨
            </p>
            <div className="flex gap-4">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                <Github className="w-4 h-4 mr-2" />
                GitHub Repo
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Store</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Downloads</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blogs</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Forums</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Community</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
            </ul>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <span className="text-white font-semibold">D</span>
          </a>
          <a href="#" className="w-12 h-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <span className="text-white font-semibold">I</span>
          </a>
          <a href="#" className="w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <span className="text-white font-semibold">L</span>
          </a>
          <a href="#" className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <span className="text-white font-semibold">W</span>
          </a>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                All Rights Reserved © 2025 Readsy
              </p>
            </div>
            <div className="flex items-center text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>Always creating something amazing</span>
            </div>
          </div>
          <div className="mt-4 text-gray-500 text-sm">
            <p>🚀 <strong>Tech Stack:</strong> HTML, CSS, JavaScript, Java (Servlets), TailwindCSS, Responsive Design</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
