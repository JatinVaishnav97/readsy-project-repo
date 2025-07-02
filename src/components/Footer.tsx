
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white py-24 px-6 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl animate-[pulse_6s_ease-in-out_infinite_2s]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-pink-500/5 to-transparent rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
      </div>
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px] animate-[grid-move_25s_linear_infinite]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Premium CTA Section */}
        <div className="text-center mb-20 animate-[fade-in-up_1s_ease-out]">
          <div className="inline-block bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-16 border border-gray-700/50 max-w-5xl mx-auto relative overflow-hidden group">
            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-[shimmer_3s_linear_infinite]"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-blue-400 animate-[spin_4s_linear_infinite] mr-3" />
                <h3 className="text-5xl font-black text-white">
                  Any questions? Interested in utilizing our services?
                </h3>
                <Sparkles className="w-8 h-8 text-purple-400 animate-[spin_4s_linear_infinite] ml-3" />
              </div>
              <p className="text-2xl text-gray-300 mb-10 font-light">
                Don't hesitate to hit us up!
              </p>
              <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-full font-bold transform hover:scale-110 transition-all duration-500 shadow-2xl shadow-purple-500/25 text-xl group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center">
                  Email Us
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content with enhanced styling */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 animate-[fade-in-up_1s_ease-out_0.2s_both]">
            <h3 className="text-4xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              📚 Readsy
            </h3>
            <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed font-light">
              Your vibrant, Rajasthani-themed educational superstore designed specially for students. 
              Making education fun, productive, and organized! ✨
            </p>
            <div className="flex gap-6">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-blue-400 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                <Github className="w-5 h-5 mr-2" />
                GitHub Repo
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-purple-400 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </Button>
            </div>
          </div>
          
          <div className="animate-[fade-in-up_1s_ease-out_0.4s_both]">
            <h4 className="text-xl font-bold mb-6 text-blue-400 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full mr-3"></div>
              Quick Links
            </h4>
            <ul className="space-y-4 text-gray-300">
              {['Home', 'Store', 'Downloads', 'Blogs', 'Forums'].map((link, index) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="hover:text-blue-400 transition-all duration-300 text-lg font-medium hover:translate-x-2 transform inline-block"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-[fade-in-up_1s_ease-out_0.6s_both]">
            <h4 className="text-xl font-bold mb-6 text-purple-400 flex items-center">
              <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full mr-3"></div>
              Community
            </h4>
            <ul className="space-y-4 text-gray-300">
              {['Contact', 'Support', 'Success Stories', 'Help Center'].map((link, index) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="hover:text-purple-400 transition-all duration-300 text-lg font-medium hover:translate-x-2 transform inline-block"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Premium Social Media Icons */}
        <div className="flex justify-center gap-8 mb-12 animate-[fade-in-up_1s_ease-out_1s_both]">
          {[
            { letter: 'D', color: 'from-blue-600 to-blue-700', hover: 'hover:from-blue-500 hover:to-blue-600' },
            { letter: 'I', color: 'from-pink-600 to-rose-600', hover: 'hover:from-pink-500 hover:to-rose-500' },
            { letter: 'L', color: 'from-blue-700 to-blue-800', hover: 'hover:from-blue-600 hover:to-blue-700' },
            { letter: 'W', color: 'from-green-600 to-green-700', hover: 'hover:from-green-500 hover:to-green-600' }
          ].map((social, index) => (
            <a 
              key={social.letter}
              href="#" 
              className={`w-16 h-16 bg-gradient-to-r ${social.color} ${social.hover} rounded-full flex items-center justify-center transform hover:scale-125 transition-all duration-500 shadow-xl group relative overflow-hidden`}
              style={{ animationDelay: `${1.2 + index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              <span className="text-white font-black text-xl relative z-10">{social.letter}</span>
            </a>
          ))}
        </div>
        
        {/* Enhanced Footer Bottom */}
        <div className="border-t border-gray-700/50 pt-12 animate-[fade-in-up_1s_ease-out_1.4s_both]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-lg">
                All Rights Reserved © 2025 Readsy
              </p>
            </div>
            <div className="flex items-center text-gray-400">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-3 animate-pulse shadow-lg shadow-green-400/50"></div>
              <span className="text-lg font-medium">Always creating something amazing</span>
            </div>
          </div>
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700/50">
              <span className="text-gray-400 text-sm">🚀 </span>
              <span className="text-gray-500 text-sm font-medium">
                <strong className="text-white">Tech Stack:</strong> HTML, CSS, JavaScript, Java (Servlets), TailwindCSS, Responsive Design
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
