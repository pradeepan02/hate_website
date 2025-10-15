import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import {
  Zap,
  Brain,
  Clock,
  Cpu,
  CheckCircle,
  AlertTriangle,
  Trophy,
  Layers,
  TrendingUp,
  TrendingDown,
  Target,
  Sparkles,
  BarChart3,
  Activity,
  Gauge,
  Rocket,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const DLModels = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredModel, setHoveredModel] = useState(null);

  const models = [
    {
      name: "BERT (Transformer)",
      status: "best",
      category: "transformer",
      baseline: { accuracy: 0.9236, precision: 0.94, recall: 0.94, f1: 0.9402 },
      tuned: {
        accuracy: 0.9228,
        precision: 0.9327,
        recall: 0.9471,
        f1: 0.9398,
      },
      confusionMatrix: { tn: 2225, fp: 277, fn: 249, tp: 4138 },
      description:
        "Pre-trained BERT transformer with fine-tuning for offensive language detection",
      architecture:
        "12 transformer layers, 768 hidden units, 12 attention heads, pre-trained weights",
      parameters: "110M parameters",
      advantages: [
        "State-of-the-art performance",
        "Contextual understanding",
        "Pre-trained knowledge",
        "Transfer learning",
      ],
      disadvantages: [
        "High computational cost",
        "Large memory footprint",
        "Slower inference",
        "Complex deployment",
      ],
      hyperparameters: [
        "learning_rate=2e-5",
        "batch_size=16",
        "max_length=128",
        "epochs=3",
        "warmup_steps=500",
      ],
      useCase:
        "Production systems with adequate resources, maximum accuracy requirements",
      improvement: "+0.8% from baseline",
      support: { class0: 2502, class1: 4387 },
      loss: 0.2726,
      rank: 1,
    },
    {
      name: "BERT (Tuned)",
      status: "best",
      category: "transformer",
      baseline: {
        accuracy: 0.9186,
        precision: 0.9356,
        recall: 0.9366,
        f1: 0.9361,
      },
      tuned: {
        accuracy: 0.9228,
        precision: 0.9327,
        recall: 0.9471,
        f1: 0.9398,
      },
      confusionMatrix: { tn: 2225, fp: 277, fn: 249, tp: 4138 },
      description:
        "Hyperparameter-optimized BERT transformer with advanced fine-tuning strategies",
      architecture:
        "12 transformer layers, optimized attention, gradient accumulation, learning rate scheduling",
      parameters: "110M parameters (optimized)",
      advantages: [
        "Optimal hyperparameters",
        "Advanced training techniques",
        "Best overall performance",
        "Robust predictions",
      ],
      disadvantages: [
        "Extensive tuning required",
        "High resource usage",
        "Long training time",
        "Overfitting risk",
      ],
      hyperparameters: [
        "learning_rate=2e-5",
        "batch_size=16",
        "warmup_ratio=0.1",
        "weight_decay=0.01",
        "epochs=2",
      ],
      useCase:
        "Critical applications requiring maximum performance, research environments",
      improvement: "+4.2% from epoch 1",
      support: { class0: 2502, class1: 4387 },
      epochDetails: "Epoch 1: 91.86% | Epoch 2: 92.28%",
      rank: 2,
    },
    {
      name: "BiLSTM + Attention (Tuned)",
      status: "strong",
      category: "rnn",
      baseline: { accuracy: 0.9054, precision: 0.86, recall: 0.89, f1: 0.87 },
      tuned: { accuracy: 0.9103, precision: 0.9, recall: 0.915, f1: 0.905 },
      confusionMatrix: { tn: 2362, fp: 140, fn: 478, tp: 3909 },
      description:
        "Bidirectional LSTM with multi-head attention mechanism, hyperparameter optimized",
      architecture:
        "BiLSTM (64 units each direction) + Multi-head attention (4 heads) + Dense layers",
      parameters: "~1.5M parameters",
      advantages: [
        "Bidirectional context",
        "Attention visualization",
        "Good interpretability",
        "Balanced performance",
      ],
      disadvantages: [
        "Complex training",
        "Attention overhead",
        "Memory intensive",
        "Slower than CNNs",
      ],
      hyperparameters: [
        "units=64",
        "lr=0.0005",
        "dropout=0.5",
        "batch_size=64",
        "attention_heads=4",
      ],
      useCase:
        "Interpretable models, attention analysis, balanced resource usage",
      improvement: "+4.9% from baseline",
      support: { class0: 2502, class1: 4387 },
      validationAcc: 0.9107,
      rank: 3,
    },
    {
      name: "LSTM (Tuned)",
      status: "strong",
      category: "rnn",
      baseline: { accuracy: 0.91, precision: 0.86, recall: 0.91, f1: 0.88 },
      tuned: { accuracy: 0.9074, precision: 0.94, recall: 0.91, f1: 0.93 },
      confusionMatrix: { tn: 2239, fp: 263, fn: 375, tp: 4012 },
      description:
        "Standard LSTM with comprehensive hyperparameter optimization and regularization",
      architecture:
        "2 LSTM layers, 128 hidden units each, dropout regularization, dense output layer",
      parameters: "~2.8M parameters",
      advantages: [
        "Sequential modeling",
        "Memory of patterns",
        "Good generalization",
        "Moderate complexity",
      ],
      disadvantages: [
        "Sequential processing",
        "Gradient issues",
        "Slower training",
        "Vanishing gradients",
      ],
      hyperparameters: [
        "units=128",
        "lr=0.0001",
        "dropout=0.5",
        "batch_size=32",
        "layers=2",
      ],
      useCase:
        "Sequential data analysis, temporal pattern detection, moderate resource environments",
      improvement: "-2.6% (precision improved)",
      support: { class0: 2502, class1: 4387 },
      validationAcc: 0.9111,
      rank: 4,
    },
    {
      name: "Hybrid CNN-LSTM",
      status: "strong",
      category: "hybrid",
      baseline: { accuracy: 0.9097, precision: 0.82, recall: 0.96, f1: 0.89 },
      tuned: { accuracy: 0.9097, precision: 0.97, recall: 0.88, f1: 0.93 },
      confusionMatrix: { tn: 2398, fp: 104, fn: 518, tp: 3869 },
      description:
        "Combined CNN feature extraction with LSTM sequence modeling for hierarchical learning",
      architecture:
        "CNN layers (feature extraction) → MaxPooling → LSTM layers (sequence) → Dense",
      parameters: "~2.5M parameters",
      advantages: [
        "Feature extraction + sequence",
        "Hierarchical learning",
        "Combined strengths",
        "Flexible design",
      ],
      disadvantages: [
        "Complex architecture",
        "More parameters",
        "Difficult tuning",
        "Training complexity",
      ],
      hyperparameters: [
        "cnn_filters=64",
        "lstm_units=128",
        "dropout=0.4",
        "lr=0.001",
        "kernel_size=3",
      ],
      useCase:
        "Complex pattern recognition, when both local features and sequences matter",
      improvement: "Stable performance",
      support: { class0: 2502, class1: 4387 },
      note: "Tuned version failed - included baseline performance",
      rank: 5,
    },
    {
      name: "CNN (Tuned)",
      status: "competitive",
      category: "cnn",
      baseline: { accuracy: 0.9087, precision: 0.84, recall: 0.92, f1: 0.88 },
      tuned: { accuracy: 0.9055, precision: 0.95, recall: 0.89, f1: 0.92 },
      confusionMatrix: { tn: 2317, fp: 185, fn: 466, tp: 3921 },
      description:
        "Convolutional Neural Network with optimized filters, kernel sizes, and regularization",
      architecture:
        "3 conv layers, multiple kernel sizes [3,4,5,7], MaxPooling, Dense layers, Dropout",
      parameters: "~2.2M parameters",
      advantages: [
        "Fast inference",
        "Parallel processing",
        "Local pattern detection",
        "GPU optimized",
      ],
      disadvantages: [
        "Limited sequence context",
        "Fixed input size",
        "Hyperparameter sensitive",
        "Local focus only",
      ],
      hyperparameters: [
        "lr=0.0001",
        "kernel_size=7",
        "filters=128",
        "dropout=0.5",
        "dense_units=128",
        "batch_size=32",
      ],
      useCase:
        "Fast inference requirements, parallel processing, local feature importance",
      improvement: "-3.2% accuracy, +11% precision",
      support: { class0: 2502, class1: 4387 },
      validationAcc: 0.9109,
      rank: 6,
    },
    {
      name: "CNN (Basic)",
      status: "competitive",
      category: "cnn",
      baseline: { accuracy: 0.9087, precision: 0.84, recall: 0.92, f1: 0.88 },
      tuned: { accuracy: 0.9087, precision: 0.95, recall: 0.9, f1: 0.93 },
      confusionMatrix: { tn: 2305, fp: 197, fn: 432, tp: 3955 },
      description:
        "Standard Convolutional Neural Network with multiple filter sizes and pooling layers",
      architecture:
        "3 conv layers (64, 128, 256 filters), kernel sizes [3,4,5], MaxPool, Dense",
      parameters: "~1.8M parameters",
      advantages: [
        "Simple architecture",
        "Fast training",
        "Good baseline",
        "Interpretable filters",
      ],
      disadvantages: [
        "Basic feature extraction",
        "Limited context",
        "No optimization",
        "Standard performance",
      ],
      hyperparameters: [
        "filters=[64,128,256]",
        "kernel_sizes=[3,4,5]",
        "dropout=0.3",
        "lr=0.001",
      ],
      useCase:
        "Baseline comparisons, simple implementations, quick prototyping",
      improvement: "Baseline performance",
      support: { class0: 2502, class1: 4387 },
      rank: 7,
    },
    {
      name: "LSTM (Basic)",
      status: "good",
      category: "rnn",
      baseline: { accuracy: 0.91, precision: 0.86, recall: 0.91, f1: 0.88 },
      tuned: { accuracy: 0.91, precision: 0.95, recall: 0.91, f1: 0.93 },
      confusionMatrix: { tn: 2239, fp: 263, fn: 375, tp: 4012 },
      description:
        "Standard Long Short-Term Memory network with basic configuration",
      architecture:
        "2 LSTM layers, 64 hidden units each, standard dropout, dense output",
      parameters: "~1.2M parameters",
      advantages: [
        "Simple implementation",
        "Good baseline",
        "Standard architecture",
        "Reliable performance",
      ],
      disadvantages: [
        "No optimization",
        "Basic hyperparameters",
        "Standard performance",
        "Not tuned",
      ],
      hyperparameters: [
        "units=64",
        "layers=2",
        "dropout=0.3",
        "lr=0.001",
        "batch_size=32",
      ],
      useCase:
        "Baseline implementations, simple sequence modeling, educational purposes",
      improvement: "Baseline performance",
      support: { class0: 2502, class1: 4387 },
      rank: 8,
    },
    {
      name: "BiLSTM + Attention (Basic)",
      status: "good",
      category: "rnn",
      baseline: { accuracy: 0.9054, precision: 0.86, recall: 0.89, f1: 0.87 },
      tuned: { accuracy: 0.9054, precision: 0.94, recall: 0.91, f1: 0.92 },
      confusionMatrix: { tn: 2224, fp: 278, fn: 374, tp: 4013 },
      description:
        "Basic Bidirectional LSTM with attention mechanism, standard configuration",
      architecture:
        "BiLSTM (32 units each direction) + Single attention head + Dense",
      parameters: "~0.8M parameters",
      advantages: [
        "Attention mechanism",
        "Bidirectional processing",
        "Interpretable",
        "Moderate complexity",
      ],
      disadvantages: [
        "Basic attention",
        "Not optimized",
        "Standard performance",
        "Limited heads",
      ],
      hyperparameters: [
        "units=32",
        "attention_heads=1",
        "dropout=0.3",
        "lr=0.001",
      ],
      useCase:
        "Basic attention modeling, interpretability studies, attention visualization",
      improvement: "Baseline performance",
      support: { class0: 2502, class1: 4387 },
      rank: 9,
    },
    {
      name: "Hybrid CNN-LSTM (Failed)",
      status: "failed",
      category: "hybrid",
      baseline: { accuracy: 0.58, precision: 0.54, recall: 0.51, f1: 0.53 },
      tuned: { accuracy: 0.55, precision: 0.56, recall: 0.59, f1: 0.57 },
      confusionMatrix: { tn: 50, fp: 48, fn: 42, tp: 60 },
      description:
        "Hybrid CNN-LSTM model that failed during tuning - included for completeness",
      architecture: "CNN → LSTM → Dense (architecture issues during training)",
      parameters: "~2.1M parameters",
      advantages: [
        "Educational value",
        "Debugging insights",
        "Architecture research",
      ],
      disadvantages: [
        "Training failure",
        "Poor performance",
        "Architecture issues",
        "Overfitting",
      ],
      hyperparameters: [
        "lstm_units=128",
        "lr=0.001",
        "dropout=0.5",
        "conv_filters=32",
        "batch_size=64",
      ],
      useCase:
        "Training failure analysis, architecture debugging, research insights",
      improvement: "-2.5% (failed tuning)",
      support: { class0: 98, class1: 102 },
      validationAcc: 0.58,
      note: "Training failed - poor generalization",
      rank: 10,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "best":
        return "success";
      case "strong":
        return "default";
      case "competitive":
        return "outline";
      case "good":
        return "secondary";
      case "failed":
        return "destructive";
      default:
        return "outline";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "best":
        return <Trophy className="text-yellow-500" size={20} />;
      case "strong":
        return <Star className="text-blue-500" size={20} />;
      case "competitive":
        return <CheckCircle className="text-green-500" size={20} />;
      case "good":
        return <CheckCircle className="text-gray-500" size={20} />;
      case "failed":
        return <AlertTriangle className="text-red-500" size={20} />;
      default:
        return null;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "transformer":
        return "bg-purple-100 text-purple-800 border-purple-300 shadow-purple-200";
      case "rnn":
        return "bg-blue-100 text-blue-800 border-blue-300 shadow-blue-200";
      case "cnn":
        return "bg-green-100 text-green-800 border-green-300 shadow-green-200";
      case "hybrid":
        return "bg-orange-100 text-orange-800 border-orange-300 shadow-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getGradientByStatus = (status) => {
    switch (status) {
      case "best":
        return "bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 border-2 border-yellow-200 shadow-xl shadow-yellow-100";
      case "strong":
        return "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border border-blue-200 shadow-lg shadow-blue-100";
      case "competitive":
        return "bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 shadow-md shadow-green-100";
      case "good":
        return "bg-gradient-to-br from-gray-50 to-slate-50 border border-gray-200 shadow-sm";
      case "failed":
        return "bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 shadow-lg shadow-red-100";
      default:
        return "bg-white border border-gray-200 shadow-sm";
    }
  };

  const filteredModels =
    selectedCategory === "all"
      ? models
      : models.filter((model) => model.category === selectedCategory);

  const bestModels = filteredModels.filter((m) => m.status === "best");
  const strongModels = filteredModels.filter((m) => m.status === "strong");
  const competitiveModels = filteredModels.filter(
    (m) => m.status === "competitive"
  );
  const goodModels = filteredModels.filter((m) => m.status === "good");
  const failedModels = filteredModels.filter((m) => m.status === "failed");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Section with Enhanced Visual Appeal */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 via-blue-100/20 to-indigo-100/20"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Badge
                variant="outline"
                className="mb-4 px-6 py-3 text-sm font-semibold bg-white/80 backdrop-blur-sm border-2 border-purple-200 shadow-lg"
              >
                <Sparkles className="w-4 h-4 mr-2 text-purple-600" />
                Complete Deep Learning Analysis
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                10 Deep Learning
              </span>
              <br />
              <span className="text-gray-800">Models</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              Comprehensive analysis of neural network architectures for
              offensive language detection. From basic implementations to
              state-of-the-art transformers, explore all model variations with
              detailed performance metrics and architectural insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/ml-models">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Brain className="mr-3 w-5 h-5" />
                  View ML Models
                </Button>
              </Link>
              <Link to="/comparison">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/80 backdrop-blur-sm border-2 border-blue-300 hover:bg-blue-50 text-blue-700 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Zap className="mr-3 w-5 h-5" />
                  Compare All Models
                </Button>
              </Link>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-3 p-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === "all"
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                }`}
              >
                All Models
              </button>
              {["transformer", "rnn", "cnn", "hybrid"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium capitalize transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg transform scale-105"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Performance Overview */}
          <Card className="mb-16 bg-gradient-to-br from-white via-blue-50 to-purple-50 border-2 border-blue-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.01]">
            <CardHeader className="pb-8">
              <CardTitle className="flex items-center gap-4 text-3xl font-bold">
                <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg">
                  <Trophy className="text-white w-8 h-8" />
                </div>
                Deep Learning Performance Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center mb-12">
                {[
                  {
                    label: "Best Accuracy",
                    value: "92.36%",
                    subtext: "BERT Base",
                    icon: Gauge,
                    color: "from-green-400 to-emerald-500",
                  },
                  {
                    label: "Best F1-Score",
                    value: "0.9402",
                    subtext: "BERT Base",
                    icon: Target,
                    color: "from-blue-400 to-indigo-500",
                  },
                  {
                    label: "Total Models",
                    value: "10",
                    subtext: "All Variations",
                    icon: BarChart3,
                    color: "from-purple-400 to-pink-500",
                  },
                  {
                    label: "Max Parameters",
                    value: "110M",
                    subtext: "BERT Models",
                    icon: Cpu,
                    color: "from-orange-400 to-red-500",
                  },
                  {
                    label: "Failed Models",
                    value: "1",
                    subtext: "Hybrid Tuned",
                    icon: AlertTriangle,
                    color: "from-red-400 to-pink-500",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    onMouseEnter={() => setHoveredModel(index)}
                    onMouseLeave={() => setHoveredModel(null)}
                  >
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <stat.icon className="text-white w-6 h-6" />
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-500">{stat.subtext}</div>
                  </div>
                ))}
              </div>

              {/* Enhanced Category Distribution */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    category: "transformer",
                    count: 2,
                    label: "Transformers",
                    color: "from-purple-500 to-indigo-500",
                    bg: "bg-purple-50",
                    border: "border-purple-200",
                  },
                  {
                    category: "rnn",
                    count: 4,
                    label: "RNN Models",
                    color: "from-blue-500 to-cyan-500",
                    bg: "bg-blue-50",
                    border: "border-blue-200",
                  },
                  {
                    category: "cnn",
                    count: 2,
                    label: "CNN Models",
                    color: "from-green-500 to-teal-500",
                    bg: "bg-green-50",
                    border: "border-green-200",
                  },
                  {
                    category: "hybrid",
                    count: 2,
                    label: "Hybrid Models",
                    color: "from-orange-500 to-red-500",
                    bg: "bg-orange-50",
                    border: "border-orange-200",
                  },
                ].map((cat, index) => (
                  <div
                    key={index}
                    className={`text-center p-6 ${cat.bg} rounded-2xl border-2 ${cat.border} shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer`}
                    onClick={() => setSelectedCategory(cat.category)}
                  >
                    <div
                      className={`text-2xl font-bold bg-gradient-to-r ${cat.color} bg-clip-text text-transparent mb-2`}
                    >
                      {cat.count}
                    </div>
                    <div className="text-sm font-semibold text-gray-700">
                      {cat.label}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {/* Best Performing Models with Enhanced Design */}
        {bestModels.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-4">
                <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-lg">
                  <Trophy className="text-white w-8 h-8" />
                </div>
                <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  Best Performing Models
                </span>
                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300 px-3 py-1">
                  {bestModels.length}
                </Badge>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                State-of-the-art models achieving the highest accuracy and
                performance metrics
              </p>
            </div>

            <div className="space-y-8">
              {bestModels.map((model, index) => (
                <Card
                  key={index}
                  className={`${getGradientByStatus(
                    model.status
                  )} hover:shadow-3xl transform hover:scale-[1.01] transition-all duration-500 relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/30 to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-bl-2xl rounded-tr-2xl font-bold text-sm shadow-lg">
                      #{model.rank}
                    </div>
                  </div>

                  <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <CardTitle className="flex items-center gap-4 text-2xl">
                        <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg">
                          <Zap className="text-white w-6 h-6" />
                        </div>
                        <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                          {model.name}
                        </span>
                      </CardTitle>
                      <div className="flex items-center gap-3">
                        <Badge
                          className={`px-4 py-2 text-sm font-semibold rounded-xl shadow-md ${getCategoryColor(
                            model.category
                          )}`}
                        >
                          {model.category.toUpperCase()}
                        </Badge>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(model.status)}
                          <Badge
                            variant={getStatusColor(model.status)}
                            className="px-3 py-1 font-semibold shadow-sm"
                          >
                            {model.status.charAt(0).toUpperCase() +
                              model.status.slice(1)}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mt-4">
                      {model.description}
                    </p>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                      {/* Enhanced Performance Metrics */}
                      <div className="space-y-4">
                        <h4 className="font-bold mb-4 flex items-center gap-2 text-lg">
                          <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg shadow-md">
                            <Target className="text-white w-5 h-5" />
                          </div>
                          Performance Metrics
                        </h4>

                        <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="text-sm text-green-700 font-semibold mb-4 flex items-center gap-2">
                            <Activity className="w-4 h-4" />
                            Final Performance
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            {[
                              {
                                label: "Accuracy",
                                value:
                                  (model.baseline.accuracy * 100).toFixed(2) +
                                  "%",
                              },
                              {
                                label: "Precision",
                                value:
                                  (model.baseline.precision * 100).toFixed(1) +
                                  "%",
                              },
                              {
                                label: "Recall",
                                value:
                                  (model.baseline.recall * 100).toFixed(1) +
                                  "%",
                              },
                              {
                                label: "F1-Score",
                                value: model.baseline.f1.toFixed(4),
                              },
                            ].map((metric, i) => (
                              <div
                                key={i}
                                className="text-center p-3 bg-white/70 rounded-xl shadow-sm"
                              >
                                <div className="text-lg font-bold text-gray-800">
                                  {metric.value}
                                </div>
                                <div className="text-xs text-gray-600 font-medium">
                                  {metric.label}
                                </div>
                              </div>
                            ))}
                          </div>
                          {model.loss && (
                            <div className="mt-4 p-3 bg-white/50 rounded-xl text-center">
                              <div className="text-sm text-gray-600">
                                Loss:{" "}
                                <span className="font-mono font-bold">
                                  {model.loss.toFixed(4)}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-md">
                          <div className="text-sm text-gray-700 font-semibold mb-3">
                            Confusion Matrix
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              {
                                label: "TN",
                                value: model.confusionMatrix.tn,
                                color: "bg-blue-100 text-blue-800",
                              },
                              {
                                label: "FP",
                                value: model.confusionMatrix.fp,
                                color: "bg-red-100 text-red-800",
                              },
                              {
                                label: "FN",
                                value: model.confusionMatrix.fn,
                                color: "bg-orange-100 text-orange-800",
                              },
                              {
                                label: "TP",
                                value: model.confusionMatrix.tp,
                                color: "bg-green-100 text-green-800",
                              },
                            ].map((item, i) => (
                              <div
                                key={i}
                                className={`p-2 rounded-lg text-center ${item.color}`}
                              >
                                <div className="font-bold">{item.value}</div>
                                <div className="text-xs">{item.label}</div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-3 text-xs text-gray-500 text-center">
                            Total: {model.support.class0 + model.support.class1}{" "}
                            samples
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Architecture */}
                      <div className="space-y-4">
                        <h4 className="font-bold mb-4 flex items-center gap-2 text-lg">
                          <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-md">
                            <Layers className="text-white w-5 h-5" />
                          </div>
                          Architecture
                        </h4>

                        <div className="space-y-4">
                          <div className="p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-200 shadow-sm">
                            <div className="flex items-center gap-2 text-purple-800 font-semibold mb-3">
                              <Layers className="w-4 h-4" />
                              Structure
                            </div>
                            <p className="text-sm text-gray-700 bg-white/70 p-4 rounded-lg font-mono text-xs leading-relaxed">
                              {model.architecture}
                            </p>
                          </div>

                          <div className="p-4 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-200 shadow-sm">
                            <div className="flex items-center gap-2 text-indigo-800 font-semibold mb-3">
                              <Cpu className="w-4 h-4" />
                              Parameters
                            </div>
                            <Badge className="bg-indigo-100 text-indigo-800 border-indigo-300 px-4 py-2 font-mono text-sm rounded-lg">
                              {model.parameters}
                            </Badge>
                          </div>

                          {model.epochDetails && (
                            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 shadow-sm">
                              <div className="flex items-center gap-2 text-green-800 font-semibold mb-3">
                                <TrendingUp className="w-4 h-4" />
                                Training Progress
                              </div>
                              <p className="text-sm text-gray-700 bg-white/70 p-3 rounded-lg">
                                {model.epochDetails}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Enhanced Configuration */}
                      <div className="space-y-4">
                        <h4 className="font-bold mb-4 flex items-center gap-2 text-lg">
                          <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-md">
                            <Cpu className="text-white w-5 h-5" />
                          </div>
                          Configuration
                        </h4>

                        <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-200 shadow-sm">
                          <div className="flex items-center gap-2 text-orange-800 font-semibold mb-4">
                            <Rocket className="w-4 h-4" />
                            Hyperparameters
                          </div>
                          <div className="space-y-2">
                            {model.hyperparameters
                              .slice(0, 4)
                              .map((param, i) => (
                                <div
                                  key={i}
                                  className="text-xs font-mono bg-white/70 p-3 rounded-lg border border-orange-200/50 hover:bg-white transition-colors duration-200"
                                >
                                  {param}
                                </div>
                              ))}
                          </div>
                        </div>

                        {model.validationAcc && (
                          <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 shadow-sm">
                            <div className="text-sm text-blue-700 font-semibold mb-2">
                              Validation Accuracy
                            </div>
                            <div className="text-2xl font-bold text-blue-800">
                              {(model.validationAcc * 100).toFixed(2)}%
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Enhanced Analysis */}
                      <div className="space-y-4">
                        <h4 className="font-bold mb-4 flex items-center gap-2 text-lg">
                          <div className="p-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg shadow-md">
                            <Brain className="text-white w-5 h-5" />
                          </div>
                          Analysis
                        </h4>

                        <div className="space-y-4">
                          <div className="p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl border border-green-200 shadow-sm">
                            <div className="flex items-center gap-2 text-green-800 font-semibold mb-3">
                              <CheckCircle className="w-4 h-4" />
                              Key Strengths
                            </div>
                            <ul className="space-y-2">
                              {model.advantages.slice(0, 3).map((adv, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-sm text-gray-700"
                                >
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  {adv}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200 shadow-sm">
                            <div className="flex items-center gap-2 text-blue-800 font-semibold mb-3">
                              <Target className="w-4 h-4" />
                              Best Use Case
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {model.useCase}
                            </p>
                          </div>

                          <div className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200 shadow-sm">
                            <div className="flex items-center gap-2 text-yellow-800 font-semibold mb-3">
                              <BarChart3 className="w-4 h-4" />
                              Improvement
                            </div>
                            <div className="text-sm font-mono bg-white/70 p-3 rounded-lg text-yellow-800 font-bold">
                              {model.improvement}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Strong Models Section */}
        {strongModels.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-lg">
                  <Star className="text-white w-8 h-8" />
                </div>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Strong Performers
                </span>
                <Badge className="bg-blue-100 text-blue-800 border-blue-300 px-3 py-1">
                  {strongModels.length}
                </Badge>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                High-performing models with excellent accuracy and robust
                architectures
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {strongModels.map((model, index) => (
                <Card
                  key={index}
                  className={`${getGradientByStatus(
                    model.status
                  )} hover:shadow-xl transform hover:scale-[1.01] transition-all duration-300 relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/15 to-transparent rounded-full blur-lg"></div>
                  <div className="absolute -top-1 -right-1">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-bl-xl rounded-tr-xl font-bold text-xs shadow-md">
                      #{model.rank}
                    </div>
                  </div>

                  <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-md">
                          <Layers className="text-white w-5 h-5" />
                        </div>
                        <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                          {model.name}
                        </span>
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge
                          className={`px-3 py-1 text-xs rounded-xl shadow-sm font-semibold ${getCategoryColor(
                            model.category
                          )}`}
                        >
                          {model.category.toUpperCase()}
                        </Badge>
                        {getStatusIcon(model.status)}
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mt-3">
                      {model.description}
                    </p>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="space-y-5">
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          {
                            label: "Accuracy",
                            value:
                              (model.baseline.accuracy * 100).toFixed(1) + "%",
                            icon: Gauge,
                            color: "from-blue-500 to-cyan-500",
                          },
                          {
                            label: "Precision",
                            value:
                              (model.baseline.precision * 100).toFixed(0) + "%",
                            icon: Target,
                            color: "from-purple-500 to-pink-500",
                          },
                          {
                            label: "F1-Score",
                            value: model.baseline.f1.toFixed(3),
                            icon: BarChart3,
                            color: "from-green-500 to-emerald-500",
                          },
                        ].map((metric, i) => (
                          <div
                            key={i}
                            className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                          >
                            <div
                              className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${metric.color} mb-2`}
                            >
                              <metric.icon className="w-4 h-4 text-white" />
                            </div>
                            <div className="text-lg font-bold text-gray-800">
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-600 font-medium">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                          <Sparkles className="w-4 h-4 text-blue-500" />
                          Key Features
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {model.advantages.slice(0, 3).map((adv, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="text-xs px-3 py-1 bg-white/70 border-gray-300 hover:bg-white transition-colors duration-200"
                            >
                              {adv}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Competitive Models with Enhanced Design */}
        {competitiveModels.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl shadow-lg">
                  <CheckCircle className="text-white w-8 h-8" />
                </div>
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Competitive Models
                </span>
                <Badge className="bg-green-100 text-green-800 border-green-300 px-3 py-1">
                  {competitiveModels.length}
                </Badge>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Solid performers with good accuracy and practical applications
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {competitiveModels.map((model, index) => (
                <Card
                  key={index}
                  className={`${getGradientByStatus(
                    model.status
                  )} hover:shadow-xl transform hover:scale-[1.01] transition-all duration-300 relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/15 to-transparent rounded-full blur-lg"></div>
                  <div className="absolute -top-1 -right-1">
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-3 py-1 rounded-bl-xl rounded-tr-xl font-bold text-xs shadow-md">
                      #{model.rank}
                    </div>
                  </div>

                  <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <div className="p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-md">
                          <Layers className="text-white w-5 h-5" />
                        </div>
                        <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                          {model.name}
                        </span>
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge
                          className={`px-3 py-1 text-xs rounded-xl shadow-sm font-semibold ${getCategoryColor(
                            model.category
                          )}`}
                        >
                          {model.category.toUpperCase()}
                        </Badge>
                        {getStatusIcon(model.status)}
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mt-3">
                      {model.description}
                    </p>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="space-y-5">
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          {
                            label: "Accuracy",
                            value:
                              (model.baseline.accuracy * 100).toFixed(1) + "%",
                            icon: Gauge,
                            color: "from-blue-500 to-cyan-500",
                          },
                          {
                            label: "Precision",
                            value:
                              (model.baseline.precision * 100).toFixed(0) + "%",
                            icon: Target,
                            color: "from-purple-500 to-pink-500",
                          },
                          {
                            label: "F1-Score",
                            value: model.baseline.f1.toFixed(3),
                            icon: BarChart3,
                            color: "from-green-500 to-emerald-500",
                          },
                        ].map((metric, i) => (
                          <div
                            key={i}
                            className="text-center p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                          >
                            <div
                              className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${metric.color} mb-2`}
                            >
                              <metric.icon className="w-4 h-4 text-white" />
                            </div>
                            <div className="text-lg font-bold text-gray-800">
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-600 font-medium">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-gradient-to-r from-gray-50 to-green-50 rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                          <Sparkles className="w-4 h-4 text-green-500" />
                          Key Features
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {model.advantages.slice(0, 3).map((adv, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="text-xs px-3 py-1 bg-white/70 border-gray-300 hover:bg-white transition-colors duration-200"
                            >
                              {adv}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Baseline Models with Enhanced Design */}
        {goodModels.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-4">
                <div className="p-3 bg-gradient-to-r from-gray-500 to-slate-500 rounded-xl shadow-lg">
                  <CheckCircle className="text-white w-8 h-8" />
                </div>
                <span className="bg-gradient-to-r from-gray-600 to-slate-600 bg-clip-text text-transparent">
                  Baseline Models
                </span>
                <Badge className="bg-gray-100 text-gray-800 border-gray-300 px-3 py-1">
                  {goodModels.length}
                </Badge>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Reliable baseline implementations for comparison and educational
                purposes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {goodModels.map((model, index) => (
                <Card
                  key={index}
                  className={`${getGradientByStatus(
                    model.status
                  )} hover:shadow-lg transform hover:scale-[1.01] transition-all duration-300 relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-lg"></div>
                  <div className="absolute -top-1 -right-1">
                    <div className="bg-gradient-to-r from-gray-500 to-slate-500 text-white px-2 py-1 rounded-bl-lg rounded-tr-lg font-bold text-xs shadow-sm">
                      #{model.rank}
                    </div>
                  </div>

                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-bold text-gray-800">
                        {model.name}
                      </CardTitle>
                      <Badge
                        className={`px-2 py-1 text-xs rounded-xl shadow-sm font-semibold ${getCategoryColor(
                          model.category
                        )}`}
                      >
                        {model.category}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 relative z-10">
                    <div className="space-y-4">
                      <div className="text-center p-4 bg-white/70 rounded-xl shadow-sm border border-gray-200">
                        <div className="text-3xl font-bold text-gray-800 mb-1">
                          {(model.baseline.accuracy * 100).toFixed(1)}%
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          Accuracy
                        </div>
                      </div>

                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="p-3 bg-white/50 rounded-lg">
                          <span className="font-semibold text-gray-800">
                            Parameters:
                          </span>{" "}
                          <span className="font-mono">{model.parameters}</span>
                        </div>
                        <div className="p-3 bg-white/50 rounded-lg">
                          <span className="font-semibold text-gray-800">
                            Use:
                          </span>{" "}
                          {model.useCase.split(",")[0]}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Failed Models with Enhanced Design */}
        {failedModels.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-4">
                <div className="p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl shadow-lg">
                  <AlertTriangle className="text-white w-8 h-8" />
                </div>
                <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  Failed Models
                </span>
                <Badge className="bg-red-100 text-red-800 border-red-300 px-3 py-1">
                  {failedModels.length}
                </Badge>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Learning from failures - models that didn't train successfully
                but provide valuable insights
              </p>
            </div>

            <div className="space-y-6">
              {failedModels.map((model, index) => (
                <Card
                  key={index}
                  className={`${getGradientByStatus(
                    model.status
                  )} hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-bl-2xl rounded-tr-2xl font-bold text-sm shadow-lg">
                      FAILED
                    </div>
                  </div>

                  <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="p-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg shadow-md">
                          <AlertTriangle className="text-white w-6 h-6" />
                        </div>
                        <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                          {model.name}
                        </span>
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge
                          className={`px-3 py-1 text-xs rounded-xl shadow-sm font-semibold ${getCategoryColor(
                            model.category
                          )}`}
                        >
                          {model.category.toUpperCase()}
                        </Badge>
                        {getStatusIcon(model.status)}
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      {model.description}
                    </p>
                    {model.note && (
                      <div className="mt-4 p-4 bg-red-50 rounded-xl border-2 border-red-200 shadow-sm">
                        <div className="flex items-center gap-2 text-red-800 font-semibold mb-2">
                          <AlertTriangle className="w-4 h-4" />
                          Training Issue
                        </div>
                        <div className="text-sm text-red-700">{model.note}</div>
                      </div>
                    )}
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-4 bg-red-50 rounded-xl border border-red-200 shadow-sm">
                        <h5 className="flex items-center gap-2 font-semibold text-red-800 mb-4">
                          <TrendingDown className="w-4 h-4" />
                          Failed Performance
                        </h5>
                        <div className="space-y-3">
                          <div className="p-3 bg-white/70 rounded-lg border border-red-200/50">
                            <div className="text-sm text-gray-700 mb-2">
                              <span className="font-semibold">Accuracy:</span>{" "}
                              <span className="font-mono text-red-600 font-bold">
                                {(model.baseline.accuracy * 100).toFixed(1)}%
                              </span>
                            </div>
                            <div className="text-sm text-gray-700">
                              <span className="font-semibold">F1-Score:</span>{" "}
                              <span className="font-mono text-red-600 font-bold">
                                {model.baseline.f1.toFixed(3)}
                              </span>
                            </div>
                          </div>
                          <div className="text-xs text-gray-600 bg-white/50 p-2 rounded">
                            Validation:{" "}
                            {model.validationAcc
                              ? (model.validationAcc * 100).toFixed(1) + "%"
                              : "N/A"}
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-orange-50 rounded-xl border border-orange-200 shadow-sm">
                        <h5 className="flex items-center gap-2 font-semibold text-orange-800 mb-4">
                          <Layers className="w-4 h-4" />
                          Architecture Issues
                        </h5>
                        <p className="text-sm text-gray-700 bg-white/70 p-3 rounded-lg font-mono leading-relaxed">
                          {model.architecture}
                        </p>
                      </div>

                      <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 shadow-sm">
                        <h5 className="flex items-center gap-2 font-semibold text-blue-800 mb-4">
                          <Brain className="w-4 h-4" />
                          Lessons Learned
                        </h5>
                        <ul className="space-y-2">
                          {model.disadvantages.slice(0, 3).map((dis, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-gray-700"
                            >
                              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                              {dis}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Enhanced Model Comparison Summary */}
        <Card className="mb-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-2 border-indigo-200 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.01]">
          <CardHeader>
            <CardTitle className="flex items-center gap-4 text-3xl font-bold">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg">
                <Brain className="text-white w-8 h-8" />
              </div>
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Model Performance Ranking
              </span>
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Comprehensive ranking based on accuracy and F1-score metrics
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h4 className="font-bold mb-6 flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-md">
                    <Trophy className="text-white w-5 h-5" />
                  </div>
                  <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    Top 5 by Accuracy
                  </span>
                </h4>
                <div className="space-y-3">
                  {models
                    .filter((m) => m.status !== "failed")
                    .sort((a, b) => b.baseline.accuracy - a.baseline.accuracy)
                    .slice(0, 5)
                    .map((model, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01]"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg ${
                              index === 0
                                ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                                : index === 1
                                ? "bg-gradient-to-r from-gray-400 to-gray-500"
                                : index === 2
                                ? "bg-gradient-to-r from-orange-400 to-red-500"
                                : "bg-gradient-to-r from-blue-400 to-indigo-500"
                            }`}
                          >
                            {index + 1}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800">
                              {model.name}
                            </div>
                            <div className="text-xs text-gray-500 font-medium">
                              {model.category.toUpperCase()}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-800 font-mono">
                            {(model.baseline.accuracy * 100).toFixed(2)}%
                          </div>
                          <div className="text-xs text-gray-500">Accuracy</div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-6 flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md">
                    <Target className="text-white w-5 h-5" />
                  </div>
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Top 5 by F1-Score
                  </span>
                </h4>
                <div className="space-y-3">
                  {models
                    .filter((m) => m.status !== "failed")
                    .sort((a, b) => b.baseline.f1 - a.baseline.f1)
                    .slice(0, 5)
                    .map((model, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.01]"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg ${
                              index === 0
                                ? "bg-gradient-to-r from-purple-400 to-pink-500"
                                : index === 1
                                ? "bg-gradient-to-r from-indigo-400 to-purple-500"
                                : index === 2
                                ? "bg-gradient-to-r from-blue-400 to-indigo-500"
                                : "bg-gradient-to-r from-teal-400 to-cyan-500"
                            }`}
                          >
                            {index + 1}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800">
                              {model.name}
                            </div>
                            <div className="text-xs text-gray-500 font-medium">
                              {model.category.toUpperCase()}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-800 font-mono">
                            {model.baseline.f1.toFixed(4)}
                          </div>
                          <div className="text-xs text-gray-500">F1-Score</div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Technical Insights */}
        <Card className="mb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-200 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-4 text-3xl font-bold">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl shadow-lg">
                <Brain className="text-white w-8 h-8" />
              </div>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Technical Insights & Recommendations
              </span>
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Expert analysis and practical recommendations for model selection
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg shadow-md">
                    <Trophy className="text-white w-5 h-5" />
                  </div>
                  <h5 className="font-bold text-green-800 text-lg">
                    Best for Production
                  </h5>
                </div>
                <p className="text-gray-700 mb-4 font-medium">
                  <strong className="text-green-800">BERT (Base)</strong> -
                  92.36% accuracy with robust performance across all metrics.
                </p>
                <ul className="space-y-2">
                  {[
                    "Highest accuracy and F1-score",
                    "Proven transformer architecture",
                    "Strong generalization",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-md">
                    <Zap className="text-white w-5 h-5" />
                  </div>
                  <h5 className="font-bold text-blue-800 text-lg">
                    Best for Speed
                  </h5>
                </div>
                <p className="text-gray-700 mb-4 font-medium">
                  <strong className="text-blue-800">CNN Models</strong> - Fast
                  parallel processing with good accuracy (90.87%).
                </p>
                <ul className="space-y-2">
                  {[
                    "Fastest inference time",
                    "GPU optimized",
                    "Lower resource requirements",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md">
                    <Activity className="text-white w-5 h-5" />
                  </div>
                  <h5 className="font-bold text-purple-800 text-lg">
                    Most Interpretable
                  </h5>
                </div>
                <p className="text-gray-700 mb-4 font-medium">
                  <strong className="text-purple-800">
                    BiLSTM + Attention
                  </strong>{" "}
                  - 91.03% accuracy with attention visualization.
                </p>
                <ul className="space-y-2">
                  {[
                    "Attention weight analysis",
                    "Bidirectional context",
                    "Explainable predictions",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-200 shadow-md">
              <h5 className="flex items-center gap-3 font-bold mb-6 text-xl">
                <div className="p-2 bg-gradient-to-r from-gray-600 to-slate-600 rounded-lg shadow-md">
                  <BarChart3 className="text-white w-5 h-5" />
                </div>
                Key Findings
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Transformer Dominance",
                    content:
                      "BERT models achieved the highest performance (92.36%) but require significant computational resources.",
                    icon: Cpu,
                    color: "from-purple-500 to-indigo-500",
                  },
                  {
                    title: "RNN Consistency",
                    content:
                      "LSTM variants showed consistent performance around 91% with good balance of accuracy and interpretability.",
                    icon: Activity,
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    title: "CNN Efficiency",
                    content:
                      "CNNs provided fast inference with competitive accuracy, making them suitable for real-time applications.",
                    icon: Zap,
                    color: "from-green-500 to-teal-500",
                  },
                  {
                    title: "Hybrid Challenges",
                    content:
                      "Complex architectures like CNN-LSTM hybrids are harder to optimize and may fail during tuning.",
                    icon: AlertTriangle,
                    color: "from-orange-500 to-red-500",
                  },
                ].map((finding, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`p-2 bg-gradient-to-r ${finding.color} rounded-lg shadow-sm`}
                      >
                        <finding.icon className="text-white w-4 h-4" />
                      </div>
                      <strong className="text-gray-800 font-semibold">
                        {finding.title}:
                      </strong>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {finding.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Navigation */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/ml-models">
              <Button
                variant="default"
                size="lg"
                className="min-w-56 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Brain className="mr-3 w-5 h-5" />
                Machine Learning Models
              </Button>
            </Link>
            <Link to="/comparison">
              <Button
                variant="outline"
                size="lg"
                className="min-w-56 bg-white/80 backdrop-blur-sm border-2 border-blue-300 hover:bg-blue-50 text-blue-700 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Zap className="mr-3 w-5 h-5" />
                Complete Model Comparison
              </Button>
            </Link>
            <Link to="/classifier">
              <Button
                variant="secondary"
                size="lg"
                className="min-w-56 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Target className="mr-3 w-5 h-5" />
                Try Live Classifier
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DLModels;
