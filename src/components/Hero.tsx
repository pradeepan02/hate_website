import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  BarChart3,
  Brain,
  Shield,
  TrendingUp,
  Sparkles,
  Zap,
  Activity,
} from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glowIntensity, setGlowIntensity] = useState(0.5);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const glowInterval = setInterval(() => {
      setGlowIntensity(0.3 + Math.sin(Date.now() * 0.002) * 0.3);
    }, 50);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(glowInterval);
    };
  }, []);

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Revolutionary Layered Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900" />
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-blue-600/20 to-purple-600/15" />
      <div className="absolute inset-0 bg-gradient-to-bl from-emerald-400/5 via-transparent to-pink-500/10" />

      {/* Dynamic Mesh Gradient Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${
            mousePosition.y
          }px, 
            rgba(59, 130, 246, ${glowIntensity}), 
            rgba(147, 51, 234, ${glowIntensity * 0.8}), 
            rgba(16, 185, 129, ${glowIntensity * 0.6}), 
            transparent 50%)`,
        }}
      />

      {/* Animated Geometric Shapes */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-l from-purple-500/25 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-gradient-to-br from-emerald-400/20 to-green-500/15 rounded-full blur-2xl animate-pulse delay-500" />
      <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-gradient-to-tr from-amber-400/15 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-700" />

      {/* Floating Neon Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 rounded-full animate-bounce ${
              i % 4 === 0
                ? "bg-cyan-400/60 shadow-lg shadow-cyan-400/50"
                : i % 4 === 1
                ? "bg-purple-400/60 shadow-lg shadow-purple-400/50"
                : i % 4 === 2
                ? "bg-emerald-400/60 shadow-lg shadow-emerald-400/50"
                : "bg-pink-400/60 shadow-lg shadow-pink-400/50"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            animation: "grid-move 20s linear infinite",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
        {/* Revolutionary Main Heading */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
            <span className="block mb-4 relative">
              Offensive Language
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping" />
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x relative inline-block">
              Detection Research
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-40 h-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full opacity-80 blur-sm animate-pulse"></div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full"></div>
            </span>
          </h1>
        </div>

        {/* Enhanced Glassmorphism Description */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl"></div>
          <div className="relative p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              A comprehensive comparative analysis of{" "}
              <strong className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-bold">
                Machine Learning
              </strong>{" "}
              and{" "}
              <strong className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text font-bold">
                Deep Learning
              </strong>{" "}
              methods for detecting offensive language in tweets. Features
              evaluation metrics, visualizations, preprocessing techniques, and
              an{" "}
              <strong className="text-transparent bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text font-bold">
                interactive text classifier
              </strong>
              .
            </p>
          </div>
        </div>

        {/* Revolutionary Stats Card */}
        <Card className="max-w-5xl mx-auto mb-20 shadow-2xl bg-black/40 backdrop-blur-2xl border border-white/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 via-emerald-500/5 to-pink-500/5 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:via-emerald-500/10 group-hover:to-pink-500/10 transition-all duration-700"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 via-emerald-400 to-pink-500 animate-gradient-x"></div>

          <CardContent className="p-10 relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
              <div className="group/stat hover:scale-110 transition-all duration-500 hover:rotate-3">
                <div className="text-5xl font-black bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3 relative">
                  35.7K
                  <Activity className="absolute -top-2 -right-6 w-6 h-6 text-cyan-400 animate-pulse" />
                </div>
                <div className="text-sm text-gray-300 font-semibold flex items-center justify-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                  <BarChart3 className="w-4 h-4 text-cyan-400" />
                  Tweets Analyzed
                </div>
              </div>
              <div className="group/stat hover:scale-110 transition-all duration-500 hover:rotate-3">
                <div className="text-5xl font-black bg-gradient-to-br from-emerald-400 to-green-500 bg-clip-text text-transparent mb-3 relative">
                  92.36%
                  <Sparkles className="absolute -top-2 -right-6 w-6 h-6 text-emerald-400 animate-spin" />
                </div>
                <div className="text-sm text-gray-300 font-semibold flex items-center justify-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  Best Accuracy (BERT)
                </div>
              </div>
              <div className="group/stat hover:scale-110 transition-all duration-500 hover:rotate-3">
                <div className="text-5xl font-black bg-gradient-to-br from-purple-400 to-pink-500 bg-clip-text text-transparent mb-3 relative">
                  20+
                  <Zap className="absolute -top-2 -right-6 w-6 h-6 text-purple-400 animate-bounce" />
                </div>
                <div className="text-sm text-gray-300 font-semibold flex items-center justify-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                  <Brain className="w-4 h-4 text-purple-400" />
                  Models Compared
                </div>
              </div>
              <div className="group/stat hover:scale-110 transition-all duration-500 hover:rotate-3">
                <div className="text-5xl font-black bg-gradient-to-br from-amber-400 to-orange-500 bg-clip-text text-transparent mb-3 relative">
                  3
                  <Shield className="absolute -top-2 -right-6 w-6 h-6 text-amber-400 animate-pulse" />
                </div>
                <div className="text-sm text-gray-300 font-semibold flex items-center justify-center gap-2 bg-white/10 rounded-full px-4 py-2 backdrop-blur-sm">
                  <Shield className="w-4 h-4 text-amber-400" />
                  ML Approaches
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Revolutionary Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center mb-24">
          <Button
            onClick={() => handleNavigation("/classifier")}
            className="group relative min-w-64 h-18 text-lg font-bold bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 hover:scale-110 hover:-translate-y-2 border-0 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <Target
              className="mr-3 group-hover:rotate-180 group-hover:scale-125 transition-all duration-500"
              size={24}
            />
            Try Offensive Detector
            <Sparkles className="ml-3 group-hover:animate-spin" size={20} />
          </Button>

          <Button
            onClick={() => handleNavigation("/comparison")}
            className="group relative min-w-64 h-18 text-lg font-bold bg-gradient-to-r from-emerald-500 via-green-600 to-teal-600 hover:from-emerald-400 hover:via-green-500 hover:to-teal-500 text-white shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-110 hover:-translate-y-2 border-0 rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <BarChart3
              className="mr-3 group-hover:rotate-180 group-hover:scale-125 transition-all duration-500"
              size={24}
            />
            Compare Models
            <Zap className="ml-3 group-hover:animate-bounce" size={20} />
          </Button>
        </div>

        {/* Revolutionary Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <Card className="group relative p-10 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-700 bg-black/30 backdrop-blur-2xl border border-white/20 overflow-hidden hover:-translate-y-6 hover:scale-105 hover:rotate-1 rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-700"></div>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-t-3xl"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl group-hover:scale-150 transition-all duration-700"></div>

            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-cyan-500/30 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700">
                <Target className="text-white w-10 h-10" />
              </div>
              <h3 className="font-black text-3xl mb-6 text-white relative">
                Interactive Classifier
                <div className="absolute -top-1 -right-8 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Test our models with{" "}
                <span className="font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                  real-time offensive language detection
                </span>{" "}
                on your own text with instant AI-powered results.
              </p>
            </div>
          </Card>

          <Card className="group relative p-10 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-700 bg-black/30 backdrop-blur-2xl border border-white/20 overflow-hidden hover:-translate-y-6 hover:scale-105 hover:-rotate-1 rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 group-hover:from-emerald-500/20 group-hover:to-green-500/20 transition-all duration-700"></div>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-green-500 rounded-t-3xl"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-full blur-xl group-hover:scale-150 transition-all duration-700"></div>

            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-600 rounded-3xl flex items-center justify-center mb-8 shadow-xl shadow-emerald-500/30 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700">
                <BarChart3 className="text-white w-10 h-10" />
              </div>
              <h3 className="font-black text-3xl mb-6 text-white relative">
                Model Comparison
                <div className="absolute -top-1 -right-8 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Comprehensive analysis of{" "}
                <span className="font-bold text-transparent bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text">
                  ML vs DL approaches
                </span>{" "}
                with detailed metrics and stunning data visualizations.
              </p>
            </div>
          </Card>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }
        
        .animate-gradient-x {
          background-size: 300% 300%;
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
