import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Database,
  FileText,
  TrendingUp,
  Filter,
  BarChart3,
  Activity,
  Zap,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const DatasetOverview = () => {
  const preprocessingSteps = [
    {
      step: "Text Lowercasing",
      icon: "📝",
      color: "from-blue-500 to-blue-600",
    },
    {
      step: "URL & @user Removal",
      icon: "🔗",
      color: "from-purple-500 to-purple-600",
    },
    {
      step: "Hashtag Normalization",
      icon: "#️⃣",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      step: "Emoji Demojization",
      icon: "😀",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      step: "Slang Normalization",
      icon: "💬",
      color: "from-teal-500 to-teal-600",
    },
    {
      step: "Contraction Expansion",
      icon: "🔄",
      color: "from-green-500 to-green-600",
    },
    {
      step: "Offensive Word Normalization",
      icon: "🛡️",
      color: "from-emerald-500 to-emerald-600",
    },
    { step: "Stopword Removal", icon: "🚫", color: "from-red-500 to-red-600" },
    {
      step: "Tokenization & Lemmatization",
      icon: "🔤",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/40 to-purple-50/30"></div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-400/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-32 right-20 w-80 h-80 bg-purple-400/8 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-green-400/8 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 right-10 w-64 h-64 bg-amber-400/8 rounded-full blur-3xl animate-bounce-slow"></div>
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-400 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border-2 border-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 left-1/2 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rotate-12 animate-wiggle"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse-slower"></div>
          </div>

          {/* Floating Sparkles */}
          <div className="absolute inset-0 pointer-events-none">
            <Sparkles className="absolute top-10 left-1/4 w-6 h-6 text-blue-400/60 animate-twinkle" />
            <Sparkles className="absolute top-32 right-1/3 w-4 h-4 text-purple-400/60 animate-twinkle-delayed" />
            <Sparkles className="absolute bottom-20 left-1/2 w-5 h-5 text-green-400/60 animate-twinkle-slow" />
          </div>

          <Badge
            variant="outline"
            className="mb-8 px-8 py-4 text-lg font-semibold border-2 hover:bg-primary/5 transition-all duration-500 hover:scale-110 hover:shadow-xl bg-white/80 backdrop-blur-sm"
          >
            <BarChart3 className="w-5 h-5 mr-3 animate-bounce" />
            Dataset Overview & EDA
            <ChevronRight className="w-4 h-4 ml-2 animate-pulse" />
          </Badge>

          <h2 className="text-6xl md:text-7xl font-bold text-foreground mb-10 leading-tight relative">
            <span className="relative inline-block">
              Data Analysis
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-full animate-gradient-x"></div>
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 animate-gradient-x inline-block hover:scale-105 transition-transform duration-500">
              & Preprocessing
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Comprehensive exploratory data analysis and preprocessing pipeline
            for{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient-x">
              optimal model performance
            </span>{" "}
            and deep insights.
          </p>

          {/* Animated Stats Preview */}
          <div className="flex justify-center gap-8 text-sm text-muted-foreground/80 animate-fade-in-up">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>35,783 Tweets</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span>35.69% Offensive</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>9 Processing Steps</span>
            </div>
          </div>
        </div>

        {/* Enhanced Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Enhanced Dataset Stats */}
          <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-3 hover:rotate-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-700"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient-x"></div>

            {/* Floating Elements */}
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl animate-pulse"></div>
            </div>

            <CardHeader className="pb-8 relative">
              <CardTitle className="flex items-center gap-4 text-2xl font-bold relative z-10">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative">
                  <Database className="w-7 h-7" />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse"></div>
                </div>
                <div>
                  Dataset Statistics
                  <div className="text-sm font-normal text-muted-foreground mt-1">
                    Comprehensive data insights
                  </div>
                </div>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6 relative z-10">
              <div className="grid gap-5">
                <div className="group/stat flex justify-between items-center p-6 bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 border border-slate-100 hover:border-blue-200 hover:scale-105">
                  <span className="font-bold text-lg flex items-center gap-3">
                    <Activity className="w-6 h-6 text-blue-600 group-hover/stat:animate-bounce" />
                    Total Tweets
                  </span>
                  <Badge
                    variant="secondary"
                    className="text-xl px-6 py-3 font-bold bg-gradient-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 transition-all duration-300 hover:scale-110"
                  >
                    35,783
                  </Badge>
                </div>

                <div className="group/stat flex justify-between items-center p-6 bg-gradient-to-r from-red-50 to-orange-50/50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 border border-red-100 hover:border-red-200 hover:scale-105">
                  <span className="font-bold text-lg flex items-center gap-3">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse group-hover/stat:animate-ping"></div>
                    Offensive
                  </span>
                  <Badge
                    variant="destructive"
                    className="text-xl px-6 py-3 font-bold bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    12,774 (35.69%)
                  </Badge>
                </div>

                <div className="group/stat flex justify-between items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50/50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 border border-green-100 hover:border-green-200 hover:scale-105">
                  <span className="font-bold text-lg flex items-center gap-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse group-hover/stat:animate-ping"></div>
                    Non-Offensive
                  </span>
                  <Badge className="text-xl px-6 py-3 font-bold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white transition-all duration-300 hover:scale-110 shadow-lg">
                    23,009 (64.31%)
                  </Badge>
                </div>

                <div className="group/stat flex justify-between items-center p-6 bg-gradient-to-r from-indigo-50 to-purple-50/50 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 border border-indigo-100 hover:border-indigo-200 hover:scale-105">
                  <span className="font-bold text-lg flex items-center gap-3">
                    <Zap className="w-6 h-6 text-indigo-600 group-hover/stat:animate-bounce" />
                    Avg Tweet Length
                  </span>
                  <Badge
                    variant="outline"
                    className="text-xl px-6 py-3 font-bold border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition-all duration-300 hover:scale-110"
                  >
                    142 chars
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Preprocessing Steps */}
          <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-3 hover:-rotate-1">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 group-hover:from-green-500/10 group-hover:to-blue-500/10 transition-all duration-700"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-600 animate-gradient-x"></div>

            {/* Floating Elements */}
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-xl animate-pulse"></div>
            </div>

            <CardHeader className="pb-8 relative">
              <CardTitle className="flex items-center gap-4 text-2xl font-bold relative z-10">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 relative">
                  <Filter className="w-7 h-7" />
                  <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse"></div>
                </div>
                <div>
                  Preprocessing Pipeline
                  <div className="text-sm font-normal text-muted-foreground mt-1">
                    9-step data transformation
                  </div>
                </div>
              </CardTitle>
            </CardHeader>

            <CardContent className="relative z-10">
              <div className="space-y-4">
                {preprocessingSteps.map((item, index) => (
                  <div
                    key={index}
                    className="group/item flex items-center gap-4 p-5 bg-gradient-to-r from-slate-50 to-green-50/30 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50/50 border border-slate-100 hover:border-green-200 hover:scale-105 animate-fade-in-up"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-2xl bg-gradient-to-r ${item.color} text-white text-sm flex items-center justify-center font-bold shadow-xl group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-500 relative`}
                      >
                        {index + 1}
                        <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <span className="text-3xl group-hover/item:scale-125 transition-all duration-500 animate-bounce-subtle">
                        {item.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <span className="font-semibold text-foreground group-hover/item:text-green-700 transition-colors duration-300 text-lg">
                        {item.step}
                      </span>
                      <div className="w-full h-1 bg-gradient-to-r from-transparent via-green-300/50 to-transparent rounded-full mt-2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground/50 group-hover/item:text-green-600 group-hover/item:translate-x-1 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Feature Engineering */}
        <div className="mb-12">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-foreground mb-6 relative inline-block">
              Feature Engineering
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-full animate-gradient-x"></div>
              <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-purple-400 animate-twinkle" />
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced feature extraction techniques for optimal model
              performance
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 hover:scale-110 hover:rotate-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/15 group-hover:to-purple-500/15 transition-all duration-700"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient-x"></div>

            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <div className="absolute top-4 left-4 w-8 h-8 border-2 border-blue-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-purple-400 rounded-full animate-bounce"></div>
            </div>

            <CardHeader className="text-center pb-8 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative">
                <FileText className="text-white w-10 h-10" />
                <div className="absolute inset-0 bg-white/20 rounded-3xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardTitle className="text-xl font-bold mb-2">
                TF-IDF Vectorization
              </CardTitle>
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </CardHeader>

            <CardContent className="relative z-10">
              <p className="text-muted-foreground text-center leading-relaxed">
                Term Frequency-Inverse Document Frequency for capturing
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient-x">
                  {" "}
                  word importance
                </span>{" "}
                across the corpus with advanced weighting.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 hover:scale-110">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 group-hover:from-green-500/15 group-hover:to-emerald-500/15 transition-all duration-700"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600 animate-gradient-x"></div>

            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <div className="absolute top-4 right-4 w-8 h-8 border-2 border-green-400 rotate-45 animate-spin-slow"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-emerald-400 rotate-12 animate-pulse"></div>
            </div>

            <CardHeader className="text-center pb-8 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative">
                <TrendingUp className="text-white w-10 h-10" />
                <div className="absolute inset-0 bg-white/20 rounded-3xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardTitle className="text-xl font-bold mb-2">
                Bag of Words
              </CardTitle>
              <div className="w-16 h-0.5 bg-gradient-to-r from-green-500 to-emerald-600 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </CardHeader>

            <CardContent className="relative z-10">
              <p className="text-muted-foreground text-center leading-relaxed">
                Simple frequency-based representation for
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 animate-gradient-x">
                  {" "}
                  baseline model
                </span>{" "}
                comparisons and rapid prototyping.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 hover:scale-110 hover:-rotate-2">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 group-hover:from-amber-500/15 group-hover:to-orange-500/15 transition-all duration-700"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-600 animate-gradient-x"></div>

            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <div className="absolute top-4 left-4 w-8 h-8 bg-amber-400/30 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-orange-400 rounded-full animate-bounce"></div>
            </div>

            <CardHeader className="text-center pb-8 relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative">
                <Database className="text-white w-10 h-10" />
                <div className="absolute inset-0 bg-white/20 rounded-3xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardTitle className="text-xl font-bold mb-2">
                Word2Vec Embeddings
              </CardTitle>
              <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </CardHeader>

            <CardContent className="relative z-10">
              <p className="text-muted-foreground text-center leading-relaxed">
                Pre-trained word embeddings for
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 animate-gradient-x">
                  {" "}
                  semantic understanding
                </span>{" "}
                in deep learning models.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-5deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(3deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes twinkle-delayed {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.3) rotate(180deg);
          }
        }

        @keyframes twinkle-slow {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.1);
          }
        }

        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(12deg) scale(1);
          }
          25% {
            transform: rotate(18deg) scale(1.1);
          }
          75% {
            transform: rotate(6deg) scale(0.9);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.08;
            transform: scale(1);
          }
          50% {
            opacity: 0.15;
            transform: scale(1.03);
          }
        }

        @keyframes bounce-subtle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }

        .animate-twinkle-delayed {
          animation: twinkle-delayed 3s ease-in-out infinite;
        }

        .animate-twinkle-slow {
          animation: twinkle-slow 4s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default DatasetOverview;
