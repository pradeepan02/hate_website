import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import {
  Brain,
  TrendingUp,
  Clock,
  Cpu,
  CheckCircle,
  AlertTriangle,
  Trophy,
  Zap,
  Target,
  BarChart3,
  Settings,
  Star,
  Activity,
  Layers,
  Sparkles,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const MLModels = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredMetric, setHoveredMetric] = useState(null);

  const models = [
    {
      name: "Logistic Regression",
      status: "best",
      baseline: { accuracy: 0.9145, precision: 0.92, recall: 0.91, f1: 0.92 },
      tuned: { accuracy: 0.9039, precision: 0.91, recall: 0.9, f1: 0.9 },
      confusionMatrix: {
        baseline: [
          [2281, 179],
          [410, 4019],
        ],
        tuned: [
          [2208, 252],
          [410, 4019],
        ],
      },
      bestParams: {
        solver: "saga",
        penalty: "l2",
        max_iter: 1000,
        C: 0.1,
      },
      bestCVScore: 0.8968,
      description:
        "Linear classifier using sigmoid function for binary classification with excellent interpretability",
      advantages: [
        "Fastest training and inference",
        "Highly interpretable coefficients",
        "Low computational requirements",
        "Excellent baseline performance",
        "Probabilistic outputs",
      ],
      disadvantages: [
        "Assumes linear relationship",
        "Sensitive to outliers",
        "Limited feature interactions",
        "Requires feature scaling",
      ],
      hyperparameters: [
        "solver='saga'",
        "penalty='l2'",
        "max_iter=1000",
        "C=0.1",
      ],
      useCase:
        "Production deployment, real-time systems, interpretable AI, regulatory compliance",
      icon: <Sparkles className="text-yellow-500" />,
      gradient: "from-yellow-500/10 to-amber-500/10",
    },
    {
      name: "Support Vector Machine (SVM)",
      status: "strong",
      baseline: { accuracy: 0.9083, precision: 0.91, recall: 0.91, f1: 0.91 },
      tuned: { accuracy: 0.9116, precision: 0.91, recall: 0.91, f1: 0.91 },
      confusionMatrix: {
        baseline: [
          [2208, 252],
          [380, 4049],
        ],
        tuned: [
          [2240, 220],
          [389, 4040],
        ],
      },
      bestParams: {
        max_iter: 2000,
        loss: "hinge",
        C: 2.154,
      },
      bestCVScore: 0.9117,
      description:
        "Linear SVM with optimal hyperplane for maximum margin classification",
      advantages: [
        "Robust to overfitting",
        "Effective in high dimensions",
        "Memory efficient",
        "Strong theoretical foundation",
      ],
      disadvantages: [
        "Slower on large datasets",
        "No direct probability estimates",
        "Sensitive to feature scaling",
        "Difficult hyperparameter tuning",
      ],
      hyperparameters: ["max_iter=2000", "loss='hinge'", "C=2.154"],
      useCase:
        "High-dimensional data, moderate dataset sizes, robust classification",
      icon: <Target className="text-blue-500" />,
      gradient: "from-blue-500/10 to-cyan-500/10",
    },
    {
      name: "Random Forest",
      status: "solid",
      baseline: { accuracy: 0.9071, precision: 0.91, recall: 0.91, f1: 0.91 },
      tuned: { accuracy: 0.9062, precision: 0.91, recall: 0.91, f1: 0.91 },
      confusionMatrix: {
        baseline: [
          [2212, 248],
          [392, 4037],
        ],
        tuned: [
          [2198, 262],
          [384, 4045],
        ],
      },
      bestParams: {
        n_estimators: 300,
        min_samples_split: 2,
        min_samples_leaf: 2,
        max_features: "sqrt",
        max_depth: null,
        bootstrap: true,
      },
      bestCVScore: 0.9039,
      description:
        "Ensemble method using multiple decision trees with voting mechanism",
      advantages: [
        "Handles overfitting well",
        "Feature importance scores",
        "Robust to outliers",
        "No feature scaling needed",
        "Parallel training",
      ],
      disadvantages: [
        "Can overfit noisy data",
        "Less interpretable than single trees",
        "Biased toward categorical features",
        "Large memory footprint",
      ],
      hyperparameters: [
        "n_estimators=300",
        "min_samples_split=2",
        "min_samples_leaf=2",
        "max_features='sqrt'",
      ],
      useCase:
        "Feature selection, robust predictions, mixed data types, ensemble learning",
      icon: <Layers className="text-green-500" />,
      gradient: "from-green-500/10 to-emerald-500/10",
    },
    {
      name: "Gradient Boosting",
      status: "good",
      baseline: { accuracy: 0.8966, precision: 0.91, recall: 0.9, f1: 0.9 },
      tuned: { accuracy: 0.907, precision: 0.92, recall: 0.91, f1: 0.91 },
      confusionMatrix: {
        baseline: [
          [2397, 63],
          [649, 3780],
        ],
        tuned: [
          [2377, 83],
          [558, 3871],
        ],
      },
      bestParams: {
        subsample: 1.0,
        n_estimators: 100,
        min_samples_split: 5,
        min_samples_leaf: 8,
        max_features: null,
        max_depth: 5,
        learning_rate: 0.1,
      },
      bestCVScore: 0.9059,
      description:
        "Sequential ensemble learning with gradient-based optimization",
      advantages: [
        "High predictive accuracy",
        "Handles mixed data types",
        "Built-in feature selection",
        "Good with imbalanced data",
      ],
      disadvantages: [
        "Prone to overfitting",
        "Computationally expensive",
        "Requires careful tuning",
        "Sequential training",
      ],
      hyperparameters: [
        "n_estimators=100",
        "learning_rate=0.1",
        "max_depth=5",
        "subsample=1.0",
      ],
      useCase:
        "Competitions, high-accuracy requirements, structured data, feature engineering",
      icon: <TrendingUp className="text-purple-500" />,
      gradient: "from-purple-500/10 to-violet-500/10",
    },
    {
      name: "K-Nearest Neighbors (KNN)",
      status: "weak",
      baseline: { accuracy: 0.5618, precision: 0.73, recall: 0.56, f1: 0.55 },
      tuned: { accuracy: 0.5716, precision: 0.73, recall: 0.57, f1: 0.56 },
      confusionMatrix: {
        baseline: [
          [2245, 215],
          [2804, 1625],
        ],
        tuned: [
          [2253, 207],
          [2744, 1685],
        ],
      },
      bestParams: {
        weights: "distance",
        p: 1,
        metric: "euclidean",
      },
      bestCVScore: 0.5499,
      description:
        "Instance-based learning using k nearest neighbors for classification",
      advantages: [
        "Simple implementation",
        "No training period",
        "Works with small datasets",
        "Non-parametric approach",
      ],
      disadvantages: [
        "Computationally expensive inference",
        "Sensitive to irrelevant features",
        "Poor with high dimensions",
        "Storage intensive",
      ],
      hyperparameters: ["weights='distance'", "p=1", "metric='euclidean'"],
      useCase:
        "Small datasets, recommendation systems, similarity matching, prototype selection",
      icon: <Activity className="text-red-500" />,
      gradient: "from-red-500/10 to-rose-500/10",
    },
    {
      name: "Quadratic Discriminant Analysis (QDA)",
      status: "moderate",
      baseline: { accuracy: 0.6687, precision: 0.74, recall: 0.67, f1: 0.67 },
      tuned: { accuracy: 0.6457, precision: 0.75, recall: 0.65, f1: 0.51 },
      confusionMatrix: {
        baseline: [
          [2057, 403],
          [1879, 2550],
        ],
        tuned: [
          [20, 2440],
          [1, 4428],
        ],
      },
      bestParams: {
        reg_param: 0.1,
        tol: 0.001,
      },
      bestCVScore: 0.648,
      description:
        "Quadratic decision boundary with separate covariance matrices per class",
      advantages: [
        "Flexible decision boundaries",
        "Good with non-linear separable data",
        "Probabilistic outputs",
        "Fast prediction",
      ],
      disadvantages: [
        "Requires more parameters",
        "Sensitive to small datasets",
        "Assumes Gaussian distributions",
        "Can overfit easily",
      ],
      hyperparameters: ["reg_param=0.1", "tol=0.001"],
      useCase:
        "Non-linear classification, small feature sets, Gaussian-distributed data",
      icon: <BarChart3 className="text-orange-500" />,
      gradient: "from-orange-500/10 to-amber-500/10",
    },
    {
      name: "Multinomial Naive Bayes",
      status: "moderate",
      baseline: { accuracy: 0.8463, precision: 0.85, recall: 0.85, f1: 0.84 },
      tuned: { accuracy: 0.8485, precision: 0.85, recall: 0.85, f1: 0.84 },
      confusionMatrix: {
        baseline: [
          [1645, 815],
          [244, 4185],
        ],
        tuned: [
          [1685, 775],
          [269, 4160],
        ],
      },
      bestParams: {
        alpha: 0.5,
      },
      bestCVScore: 0.8488,
      description:
        "Probabilistic classifier based on Bayes' theorem with multinomial distribution",
      advantages: [
        "Fast training and prediction",
        "Good with small datasets",
        "Handles missing values",
        "Probabilistic output",
        "Good text classification baseline",
      ],
      disadvantages: [
        "Strong independence assumption",
        "Can be outperformed by discriminative models",
        "Sensitive to skewed data",
      ],
      hyperparameters: ["alpha=0.5"],
      useCase:
        "Text classification baseline, small datasets, real-time classification, document categorization",
      icon: <Cpu className="text-indigo-500" />,
      gradient: "from-indigo-500/10 to-blue-500/10",
    },
    {
      name: "Gaussian Naive Bayes",
      status: "fair",
      baseline: { accuracy: 0.7103, precision: 0.77, recall: 0.71, f1: 0.72 },
      tuned: { accuracy: 0.7767, precision: 0.8, recall: 0.78, f1: 0.78 },
      confusionMatrix: {
        baseline: [
          [2108, 352],
          [1644, 2785],
        ],
        tuned: [
          [1993, 467],
          [1071, 3358],
        ],
      },
      bestParams: {
        var_smoothing: 1e-6,
      },
      bestCVScore: 0.7523,
      description:
        "Gaussian Naive Bayes classifier assuming continuous features with normal distribution",
      advantages: [
        "Fast training",
        "Good with continuous features",
        "Handles missing values",
        "Simple implementation",
        "Probabilistic output",
      ],
      disadvantages: [
        "Strong independence assumption",
        "Assumes Gaussian distribution",
        "Can be outperformed by other methods",
      ],
      hyperparameters: ["var_smoothing=1e-06"],
      useCase:
        "Continuous feature classification, simple baselines, probabilistic predictions",
      icon: <Star className="text-pink-500" />,
      gradient: "from-pink-500/10 to-rose-500/10",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "best":
        return "success";
      case "strong":
        return "default";
      case "solid":
        return "outline";
      case "good":
        return "secondary";
      case "moderate":
        return "outline";
      case "fair":
        return "outline";
      case "weak":
        return "destructive";
      default:
        return "outline";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "best":
        return <Trophy className="text-success animate-pulse" size={20} />;
      case "strong":
        return <CheckCircle className="text-primary" size={20} />;
      case "solid":
        return <CheckCircle className="text-muted-foreground" size={20} />;
      case "good":
        return <CheckCircle className="text-secondary-foreground" size={20} />;
      case "moderate":
        return <AlertTriangle className="text-warning" size={20} />;
      case "fair":
        return <AlertTriangle className="text-orange-500" size={20} />;
      case "weak":
        return <AlertTriangle className="text-destructive" size={20} />;
      default:
        return null;
    }
  };

  const formatConfusionMatrix = (matrix) => {
    return `[[${matrix[0][0]}, ${matrix[0][1]}], [${matrix[1][0]}, ${matrix[1][1]}]]`;
  };

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  const MetricCard = ({
    label,
    value,
    subtitle,
    color,
    isHovered,
    onHover,
  }) => (
    <div
      className={`group p-6 bg-card rounded-xl shadow-sm border transition-all duration-300 cursor-pointer ${
        isHovered
          ? "scale-105 shadow-lg border-primary/30 bg-gradient-to-br from-primary/5 to-transparent"
          : "hover:shadow-md hover:scale-102"
      }`}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div className="text-center">
        <div
          className={`text-4xl font-bold mb-2 transition-colors duration-300 ${color} ${
            isHovered ? "scale-110" : ""
          }`}
        >
          {value}
        </div>
        <div className="text-sm text-muted-foreground font-medium mb-1">
          {label}
        </div>
        <div className="text-xs text-muted-foreground opacity-75">
          {subtitle}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-success/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/3 to-transparent rounded-full opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <Badge
                variant="outline"
                className="px-6 py-3 text-sm font-medium border-2 border-primary/20 bg-primary/5"
              >
                <Brain className="mr-2 h-4 w-4" />
                Machine Learning Analysis
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-success bg-clip-text text-transparent animate-gradient">
                Machine Learning
              </span>
              <br />
              <span className="text-foreground">Models</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              Comprehensive analysis of{" "}
              <span className="text-primary font-semibold">
                8 traditional algorithms
              </span>{" "}
              for offensive language detection. Compare baseline vs
              hyperparameter-tuned performance with detailed insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                variant="research"
                size="lg"
                className="min-w-52 h-14 text-lg font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => handleNavigation("/dl-models")}
              >
                <Zap className="mr-3 h-5 w-5 group-hover:animate-pulse" />
                View DL Models
              </Button>
              <Button
                variant="premium"
                size="lg"
                className="min-w-52 h-14 text-lg font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => handleNavigation("/comparison")}
              >
                <TrendingUp className="mr-3 h-5 w-5 group-hover:rotate-12" />
                Compare All Models
              </Button>
            </div>
          </div>

          {/* Enhanced Performance Summary */}
          <Card className="shadow-2xl mb-16 bg-gradient-to-br from-card via-card to-success/5 border-2 border-success/20 backdrop-blur-sm">
            <CardHeader className="pb-8">
              <CardTitle className="flex items-center gap-4 text-3xl">
                <div className="p-3 bg-success/10 rounded-2xl">
                  <Trophy className="text-success h-8 w-8 animate-pulse" />
                </div>
                ML Performance Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard
                  label="Best Accuracy"
                  value="91.45%"
                  subtitle="Logistic Regression (Baseline)"
                  color="text-success"
                  isHovered={hoveredMetric === "accuracy"}
                  onHover={(hovered) =>
                    setHoveredMetric(hovered ? "accuracy" : null)
                  }
                />
                <MetricCard
                  label="Best Tuned"
                  value="91.16%"
                  subtitle="SVM (Tuned)"
                  color="text-primary"
                  isHovered={hoveredMetric === "tuned"}
                  onHover={(hovered) =>
                    setHoveredMetric(hovered ? "tuned" : null)
                  }
                />
                <MetricCard
                  label="Models Tested"
                  value="8"
                  subtitle="Baseline + Tuned"
                  color="text-primary-glow"
                  isHovered={hoveredMetric === "models"}
                  onHover={(hovered) =>
                    setHoveredMetric(hovered ? "models" : null)
                  }
                />
                <MetricCard
                  label="Avg Inference"
                  value="~0.1s"
                  subtitle="Production Ready"
                  color="text-warning"
                  isHovered={hoveredMetric === "inference"}
                  onHover={(hovered) =>
                    setHoveredMetric(hovered ? "inference" : null)
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Model Cards */}
          <div className="space-y-10">
            {models.map((model, index) => (
              <Card
                key={index}
                className={`group shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br ${
                  model.gradient
                } backdrop-blur-sm ${
                  model.status === "best"
                    ? "border-2 border-success/40 shadow-success/20"
                    : "border border-border/50 hover:border-primary/30"
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-4 text-2xl group-hover:text-primary transition-colors duration-300">
                      <div className="p-2 bg-background/80 rounded-xl group-hover:bg-primary/10 transition-colors duration-300">
                        {model.icon}
                      </div>
                      {model.name}
                      {model.status === "best" && (
                        <div className="animate-pulse">
                          <Sparkles className="h-6 w-6 text-yellow-500" />
                        </div>
                      )}
                    </CardTitle>
                    <div className="flex items-center gap-3">
                      {getStatusIcon(model.status)}
                      <Badge
                        variant={getStatusColor(model.status)}
                        className="px-4 py-2 text-sm font-semibold transition-all duration-300 group-hover:scale-110"
                      >
                        {model.status.charAt(0).toUpperCase() +
                          model.status.slice(1)}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          setExpandedCard(expandedCard === index ? null : index)
                        }
                        className="ml-2"
                      >
                        {expandedCard === index ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mt-2">
                    {model.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    {/* Enhanced Performance Metrics */}
                    <div className="xl:col-span-1">
                      <h4 className="font-semibold mb-6 flex items-center gap-3 text-lg">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <TrendingUp className="text-primary" size={16} />
                        </div>
                        Performance Metrics
                      </h4>
                      <div className="space-y-6">
                        <div className="p-6 bg-muted/30 rounded-xl border border-border/50 backdrop-blur-sm">
                          <div className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
                            <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                            Baseline Performance
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            {Object.entries(model.baseline).map(
                              ([key, value]) => (
                                <div
                                  key={key}
                                  className="text-center p-2 bg-background/50 rounded-lg"
                                >
                                  <div className="text-xs text-muted-foreground capitalize mb-1">
                                    {key}
                                  </div>
                                  <div className="font-mono font-bold text-sm">
                                    {value.toFixed(4)}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground mt-3 p-2 bg-background/30 rounded font-mono text-center">
                            CM:{" "}
                            {formatConfusionMatrix(
                              model.confusionMatrix.baseline
                            )}
                          </div>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border-2 border-primary/20 backdrop-blur-sm">
                          <div className="text-sm font-medium text-primary mb-3 flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            Tuned Performance
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            {Object.entries(model.tuned).map(([key, value]) => (
                              <div
                                key={key}
                                className="text-center p-2 bg-background/50 rounded-lg"
                              >
                                <div className="text-xs text-muted-foreground capitalize mb-1">
                                  {key}
                                </div>
                                <div className="font-mono font-bold text-sm">
                                  {value.toFixed(4)}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="text-xs text-muted-foreground mt-3 p-2 bg-background/30 rounded font-mono text-center">
                            CM:{" "}
                            {formatConfusionMatrix(model.confusionMatrix.tuned)}
                          </div>
                          {model.bestCVScore && (
                            <div className="text-sm text-primary font-semibold mt-3 text-center">
                              CV Score: {model.bestCVScore.toFixed(4)}
                            </div>
                          )}
                          <div className="mt-3 text-center">
                            <span
                              className={`text-sm font-bold px-3 py-1 rounded-full ${
                                model.tuned.accuracy -
                                  model.baseline.accuracy >=
                                0
                                  ? "text-success bg-success/10"
                                  : "text-destructive bg-destructive/10"
                              }`}
                            >
                              Δ{" "}
                              {(
                                (model.tuned.accuracy -
                                  model.baseline.accuracy) *
                                100
                              ).toFixed(2)}
                              %
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Model Analysis */}
                    <div className="xl:col-span-1">
                      <h4 className="font-semibold mb-6 flex items-center gap-3 text-lg">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Cpu className="text-primary" size={16} />
                        </div>
                        Model Analysis
                      </h4>
                      <div className="space-y-6">
                        <div className="p-4 bg-success/5 rounded-xl border border-success/20">
                          <div className="text-sm font-semibold text-success mb-3 flex items-center gap-2">
                            <CheckCircle size={14} className="animate-pulse" />
                            Advantages
                          </div>
                          <ul className="text-sm text-muted-foreground space-y-2">
                            {model.advantages.map((adv, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 p-2 rounded-lg hover:bg-success/5 transition-colors duration-200"
                              >
                                <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0" />
                                <span className="leading-relaxed">{adv}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-4 bg-warning/5 rounded-xl border border-warning/20">
                          <div className="text-sm font-semibold text-warning mb-3 flex items-center gap-2">
                            <AlertTriangle size={14} />
                            Disadvantages
                          </div>
                          <ul className="text-sm text-muted-foreground space-y-2">
                            {model.disadvantages.map((dis, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-3 p-2 rounded-lg hover:bg-warning/5 transition-colors duration-200"
                              >
                                <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0" />
                                <span className="leading-relaxed">{dis}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Configuration */}
                    <div className="xl:col-span-1">
                      <h4 className="font-semibold mb-6 flex items-center gap-3 text-lg">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Settings className="text-primary" size={16} />
                        </div>
                        Configuration
                      </h4>
                      <div className="space-y-6">
                        {model.bestParams && (
                          <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                            <div className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                              <Target size={14} />
                              Best Parameters
                            </div>
                            <div className="space-y-2">
                              {Object.entries(model.bestParams).map(
                                ([key, value], i) => (
                                  <div
                                    key={i}
                                    className="flex justify-between items-center p-2 bg-background/50 rounded-lg"
                                  >
                                    <span className="font-mono text-xs text-muted-foreground">
                                      {key}:
                                    </span>
                                    <span className="font-mono text-xs text-foreground font-semibold">
                                      {typeof value === "string"
                                        ? `"${value}"`
                                        : value}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}

                        <div className="p-4 bg-muted/20 rounded-xl border border-border/30">
                          <div className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Cpu size={14} />
                            Hyperparameters
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {model.hyperparameters.map((param, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="text-xs font-mono px-3 py-1 bg-background/50 hover:bg-primary/10 transition-colors duration-200"
                              >
                                {param}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="p-4 bg-gradient-to-br from-primary-glow/5 to-success/5 rounded-xl border border-primary-glow/20">
                          <div className="text-sm font-semibold text-primary-glow mb-3 flex items-center gap-2">
                            <Sparkles size={14} className="animate-pulse" />
                            Best Use Cases
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed bg-background/30 p-3 rounded-lg">
                            {model.useCase}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Detailed Section */}
                  {expandedCard === index && (
                    <div className="mt-8 pt-8 border-t border-border/30 animate-in slide-in-from-top-2 duration-300">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h5 className="font-semibold text-lg flex items-center gap-2">
                            <Activity className="text-primary" size={16} />
                            Detailed Metrics Breakdown
                          </h5>
                          <div className="space-y-3">
                            <div className="p-4 bg-muted/20 rounded-lg">
                              <div className="text-sm font-medium mb-2">
                                Classification Report
                              </div>
                              <div className="grid grid-cols-2 gap-4 text-xs">
                                <div>
                                  <div className="text-muted-foreground">
                                    True Positives
                                  </div>
                                  <div className="font-mono font-bold">
                                    {model.confusionMatrix.tuned[1][1]}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-muted-foreground">
                                    True Negatives
                                  </div>
                                  <div className="font-mono font-bold">
                                    {model.confusionMatrix.tuned[0][0]}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-muted-foreground">
                                    False Positives
                                  </div>
                                  <div className="font-mono font-bold text-destructive">
                                    {model.confusionMatrix.tuned[0][1]}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-muted-foreground">
                                    False Negatives
                                  </div>
                                  <div className="font-mono font-bold text-destructive">
                                    {model.confusionMatrix.tuned[1][0]}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h5 className="font-semibold text-lg flex items-center gap-2">
                            <Clock className="text-primary" size={16} />
                            Performance Characteristics
                          </h5>
                          <div className="space-y-3">
                            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                              <div className="text-sm font-medium mb-2">
                                Training Complexity
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {model.name.includes("KNN")
                                  ? "O(1) - No training required"
                                  : model.name.includes("Naive Bayes")
                                  ? "O(n) - Linear in features"
                                  : model.name.includes("Logistic")
                                  ? "O(n×m) - Linear in samples"
                                  : model.name.includes("SVM")
                                  ? "O(n²) to O(n³) - Quadratic to cubic"
                                  : model.name.includes("Random Forest")
                                  ? "O(n×m×log(m)) - Ensemble complexity"
                                  : model.name.includes("Gradient")
                                  ? "O(n×m×d) - Sequential boosting"
                                  : "O(n×m) - Standard complexity"}
                              </div>
                            </div>
                            <div className="p-4 bg-success/5 rounded-lg border border-success/20">
                              <div className="text-sm font-medium mb-2">
                                Inference Speed
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {model.name.includes("Logistic") ||
                                model.name.includes("Naive Bayes")
                                  ? "Very Fast - Real-time capable"
                                  : model.name.includes("SVM") ||
                                    model.name.includes("QDA")
                                  ? "Fast - Production ready"
                                  : model.name.includes("Random Forest") ||
                                    model.name.includes("Gradient")
                                  ? "Moderate - Good for batch"
                                  : "Slow - Requires optimization"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Insights Section */}
          <Card className="shadow-2xl mt-16 bg-gradient-to-br from-card via-primary/5 to-success/5 backdrop-blur-sm border-2 border-primary/20">
            <CardHeader className="pb-8">
              <CardTitle className="flex items-center gap-4 text-3xl">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <BarChart3 className="text-primary h-8 w-8" />
                </div>
                Key Insights & Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group p-6 bg-gradient-to-br from-success/10 to-success/5 rounded-2xl border-2 border-success/20 hover:border-success/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-success/20 rounded-xl">
                      <Trophy className="text-success h-6 w-6" />
                    </div>
                    <h4 className="font-bold text-success text-xl">
                      Top Performers
                    </h4>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-success">
                          Logistic Regression:
                        </strong>
                        <div className="text-muted-foreground">
                          Best overall accuracy (91.45%)
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-success">SVM (Tuned):</strong>
                        <div className="text-muted-foreground">
                          Most improved with tuning (91.16%)
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                      <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-success">Random Forest:</strong>
                        <div className="text-muted-foreground">
                          Most consistent performance
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="group p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/20 rounded-xl">
                      <Zap className="text-primary h-6 w-6" />
                    </div>
                    <h4 className="font-bold text-primary text-xl">
                      Production Ready
                    </h4>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-primary">
                          Logistic Regression:
                        </strong>
                        <div className="text-muted-foreground">
                          Fast inference, interpretable
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-primary">
                          Multinomial NB:
                        </strong>
                        <div className="text-muted-foreground">
                          Good baseline, fast training
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-primary">Random Forest:</strong>
                        <div className="text-muted-foreground">
                          Robust, handles missing data
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="group p-6 bg-gradient-to-br from-warning/10 to-warning/5 rounded-2xl border-2 border-warning/20 hover:border-warning/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-warning/20 rounded-xl">
                      <TrendingUp className="text-warning h-6 w-6" />
                    </div>
                    <h4 className="font-bold text-warning text-xl">
                      Tuning Impact
                    </h4>
                  </div>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                      <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-warning">SVM:</strong>
                        <div className="text-muted-foreground">
                          +0.33% accuracy improvement
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                      <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-warning">
                          Gradient Boosting:
                        </strong>
                        <div className="text-muted-foreground">
                          +1.04% improvement
                        </div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                      <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-warning">Gaussian NB:</strong>
                        <div className="text-muted-foreground">
                          +6.64% improvement
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Additional Insight Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="p-6 bg-gradient-to-br from-primary-glow/10 to-primary-glow/5 rounded-2xl border border-primary-glow/20">
                  <h5 className="font-semibold text-primary-glow text-lg mb-4 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 animate-pulse" />
                    Model Selection Guide
                  </h5>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-background/30 rounded-lg">
                      <strong className="text-foreground">
                        For High Accuracy:
                      </strong>
                      <div className="text-muted-foreground">
                        Choose Logistic Regression or SVM
                      </div>
                    </div>
                    <div className="p-3 bg-background/30 rounded-lg">
                      <strong className="text-foreground">
                        For Interpretability:
                      </strong>
                      <div className="text-muted-foreground">
                        Logistic Regression or Naive Bayes
                      </div>
                    </div>
                    <div className="p-3 bg-background/30 rounded-lg">
                      <strong className="text-foreground">For Speed:</strong>
                      <div className="text-muted-foreground">
                        Naive Bayes or Logistic Regression
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-success/10 to-success/5 rounded-2xl border border-success/20">
                  <h5 className="font-semibold text-success text-lg mb-4 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Performance Tiers
                  </h5>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-background/30 rounded-lg">
                      <strong className="text-success">
                        Tier 1 (&gt;90%):
                      </strong>
                      <div className="text-muted-foreground">
                        Logistic Regression, SVM, Random Forest
                      </div>
                    </div>
                    <div className="p-3 bg-background/30 rounded-lg">
                      <strong className="text-warning">Tier 2 (80-90%):</strong>
                      <div className="text-muted-foreground">
                        Gradient Boosting, Multinomial NB
                      </div>
                    </div>
                    <div className="p-3 bg-background/30 rounded-lg">
                      <strong className="text-destructive">
                        Tier 3 (&lt;80%):
                      </strong>
                      <div className="text-muted-foreground">
                        Gaussian NB, QDA, KNN
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Navigation */}
          <div className="mt-20 flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              variant="research"
              size="lg"
              className="min-w-52 h-16 text-lg font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => handleNavigation("/dl-models")}
            >
              <Zap className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              <div className="text-left">
                <div>Deep Learning Models</div>
                <div className="text-xs opacity-75">Neural Networks & More</div>
              </div>
            </Button>
            <Button
              variant="premium"
              size="lg"
              className="min-w-52 h-16 text-lg font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => handleNavigation("/comparison")}
            >
              <TrendingUp className="mr-3 h-6 w-6 group-hover:rotate-12" />
              <div className="text-left">
                <div>Detailed Comparison</div>
                <div className="text-xs opacity-75">
                  All Models Side-by-Side
                </div>
              </div>
            </Button>
            <Button
              variant="hero"
              size="lg"
              className="min-w-52 h-16 text-lg font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => handleNavigation("/classifier")}
            >
              <Brain className="mr-3 h-6 w-6 group-hover:bounce" />
              <div className="text-left">
                <div>Try Live Demo</div>
                <div className="text-xs opacity-75">Interactive Classifier</div>
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }

        .animate-in {
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .bg-gradient-radial {
          background: radial-gradient(
            ellipse at center,
            var(--tw-gradient-stops)
          );
        }
      `}</style>
    </div>
  );
};

export default MLModels;
