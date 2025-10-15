import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import {
  BarChart3,
  Trophy,
  Zap,
  Brain,
  Clock,
  Cpu,
  TrendingUp,
  Shield,
  Target,
  Layers,
  AlertTriangle,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  AreaChart,
  Area,
} from "recharts";

const ComparisonPage = () => {
  const comparisonData = [
    {
      category: "Machine Learning",
      bestModel: "Logistic Regression (Baseline)",
      accuracy: 0.9145,
      f1Score: 0.92,
      trainingTime: "~2 minutes",
      inferenceTime: "~0.1s",
      parameters: "~50K",
      memoryUsage: "Low",
      interpretability: "High",
      deployment: "Easy",
      note: "Best baseline performance",
    },
    {
      category: "Deep Learning",
      bestModel: "BERT (Transformer)",
      accuracy: 0.9236,
      f1Score: 0.9402,
      trainingTime: "~30 minutes",
      inferenceTime: "~1.5s",
      parameters: "110M",
      memoryUsage: "High",
      interpretability: "Low",
      deployment: "Complex",
      note: "State-of-the-art performance",
    },
  ];

  const allModelsComparison = [
    {
      name: "BERT (Transformer)",
      type: "DL",
      accuracy: 0.9236,
      f1: 0.9402,
      speed: "Slow",
      cost: "High",
      rank: 1,
      category: "transformer",
    },
    {
      name: "BERT (Tuned)",
      type: "DL",
      accuracy: 0.9228,
      f1: 0.9398,
      speed: "Slow",
      cost: "High",
      rank: 2,
      category: "transformer",
    },
    {
      name: "Logistic Regression (Baseline)",
      type: "ML",
      accuracy: 0.9145,
      f1: 0.92,
      speed: "Very Fast",
      cost: "Very Low",
      rank: 3,
      category: "linear",
    },
    {
      name: "SVM (Tuned)",
      type: "ML",
      accuracy: 0.9116,
      f1: 0.91,
      speed: "Fast",
      cost: "Low",
      rank: 4,
      category: "kernel",
    },
    {
      name: "BiLSTM + Attention (Tuned)",
      type: "DL",
      accuracy: 0.9103,
      f1: 0.905,
      speed: "Medium",
      cost: "Medium",
      rank: 5,
      category: "rnn",
    },
    {
      name: "Hybrid CNN-LSTM (Baseline)",
      type: "DL",
      accuracy: 0.9097,
      f1: 0.93,
      speed: "Slow",
      cost: "Medium",
      rank: 6,
      category: "hybrid",
    },
    {
      name: "CNN (Basic)",
      type: "DL",
      accuracy: 0.9087,
      f1: 0.93,
      speed: "Fast",
      cost: "Medium",
      rank: 7,
      category: "cnn",
    },
    {
      name: "SVM (Baseline)",
      type: "ML",
      accuracy: 0.9083,
      f1: 0.91,
      speed: "Fast",
      cost: "Low",
      rank: 8,
      category: "kernel",
    },
    {
      name: "LSTM (Tuned)",
      type: "DL",
      accuracy: 0.9074,
      f1: 0.93,
      speed: "Medium",
      cost: "Medium",
      rank: 9,
      category: "rnn",
    },
    {
      name: "Random Forest (Tuned)",
      type: "ML",
      accuracy: 0.9062,
      f1: 0.91,
      speed: "Medium",
      cost: "Low",
      rank: 10,
      category: "ensemble",
    },
    {
      name: "Gradient Boosting (Tuned)",
      type: "ML",
      accuracy: 0.907,
      f1: 0.91,
      speed: "Medium",
      cost: "Low",
      rank: 11,
      category: "ensemble",
    },
    {
      name: "CNN (Tuned)",
      type: "DL",
      accuracy: 0.9055,
      f1: 0.92,
      speed: "Fast",
      cost: "Medium",
      rank: 12,
      category: "cnn",
    },
    {
      name: "BiLSTM + Attention (Basic)",
      type: "DL",
      accuracy: 0.9054,
      f1: 0.92,
      speed: "Medium",
      cost: "Medium",
      rank: 13,
      category: "rnn",
    },
    {
      name: "Logistic Regression (Tuned)",
      type: "ML",
      accuracy: 0.9039,
      f1: 0.9,
      speed: "Very Fast",
      cost: "Very Low",
      rank: 14,
      category: "linear",
    },
    {
      name: "LSTM (Basic)",
      type: "DL",
      accuracy: 0.91,
      f1: 0.93,
      speed: "Medium",
      cost: "Medium",
      rank: 15,
      category: "rnn",
    },
    {
      name: "Multinomial Naive Bayes (Tuned)",
      type: "ML",
      accuracy: 0.8485,
      f1: 0.84,
      speed: "Very Fast",
      cost: "Very Low",
      rank: 16,
      category: "probabilistic",
    },
    {
      name: "Gaussian Naive Bayes (Tuned)",
      type: "ML",
      accuracy: 0.7767,
      f1: 0.78,
      speed: "Very Fast",
      cost: "Very Low",
      rank: 17,
      category: "probabilistic",
    },
    {
      name: "QDA (Baseline)",
      type: "ML",
      accuracy: 0.6687,
      f1: 0.67,
      speed: "Fast",
      cost: "Low",
      rank: 18,
      category: "discriminant",
    },
    {
      name: "KNN (Tuned)",
      type: "ML",
      accuracy: 0.5716,
      f1: 0.56,
      speed: "Very Slow",
      cost: "Low",
      rank: 19,
      category: "instance",
    },
    {
      name: "Hybrid CNN-LSTM (Failed)",
      type: "DL",
      accuracy: 0.55,
      f1: 0.57,
      speed: "Slow",
      cost: "Medium",
      rank: 20,
      category: "hybrid",
    },
  ];

  // Chart data for visualizations
  const performanceChartData = [
    {
      name: "BERT (Transformer)",
      accuracy: 92.36,
      f1: 94.02,
      type: "DL",
      color: "#8b5cf6",
    },
    {
      name: "BERT (Tuned)",
      accuracy: 92.28,
      f1: 93.98,
      type: "DL",
      color: "#8b5cf6",
    },
    {
      name: "Logistic Regression",
      accuracy: 91.45,
      f1: 92.0,
      type: "ML",
      color: "#06b6d4",
    },
    {
      name: "SVM (Tuned)",
      accuracy: 91.16,
      f1: 91.0,
      type: "ML",
      color: "#06b6d4",
    },
    {
      name: "BiLSTM + Attention",
      accuracy: 91.03,
      f1: 90.5,
      type: "DL",
      color: "#3b82f6",
    },
    {
      name: "Hybrid CNN-LSTM",
      accuracy: 90.97,
      f1: 93.0,
      type: "DL",
      color: "#f59e0b",
    },
    {
      name: "CNN (Basic)",
      accuracy: 90.87,
      f1: 93.0,
      type: "DL",
      color: "#10b981",
    },
    {
      name: "SVM (Baseline)",
      accuracy: 90.83,
      f1: 91.0,
      type: "ML",
      color: "#06b6d4",
    },
  ];

  const speedVsAccuracyData = [
    { name: "BERT", accuracy: 92.36, speed: 1.5, size: 110 },
    { name: "Logistic Reg", accuracy: 91.45, speed: 0.1, size: 50 },
    { name: "BiLSTM+Attn", accuracy: 91.03, speed: 1.0, size: 500 },
    { name: "SVM", accuracy: 91.16, speed: 0.3, size: 100 },
    { name: "CNN", accuracy: 90.87, speed: 0.5, size: 200 },
    { name: "Random Forest", accuracy: 90.62, speed: 0.8, size: 150 },
    { name: "Naive Bayes", accuracy: 84.85, speed: 0.05, size: 10 },
  ];

  const categoryDistribution = [
    { name: "Transformers", value: 2, color: "#8b5cf6", performance: 92.32 },
    { name: "RNN/LSTM", value: 6, color: "#3b82f6", performance: 90.7 },
    { name: "CNN", value: 2, color: "#10b981", performance: 90.71 },
    { name: "Linear", value: 2, color: "#06b6d4", performance: 90.92 },
    { name: "Ensemble", value: 2, color: "#f59e0b", performance: 90.66 },
    { name: "Probabilistic", value: 2, color: "#ef4444", performance: 81.26 },
    { name: "Other", value: 4, color: "#6b7280", performance: 70.5 },
  ];

  const trainingProgressData = [
    { epoch: 1, bert: 85.2, logistic: 89.1, bilstm: 82.5 },
    { epoch: 2, bert: 88.7, logistic: 90.8, bilstm: 87.2 },
    { epoch: 3, bert: 90.1, logistic: 91.2, bilstm: 89.1 },
    { epoch: 4, bert: 91.4, logistic: 91.4, bilstm: 90.3 },
    { epoch: 5, bert: 92.0, logistic: 91.5, bilstm: 90.8 },
    { epoch: 6, bert: 92.36, logistic: 91.45, bilstm: 91.03 },
  ];

  const getRankBadge = (rank) => {
    if (rank === 1)
      return (
        <Badge
          variant="default"
          className="font-bold bg-yellow-500 text-yellow-900"
        >
          🏆 #1
        </Badge>
      );
    if (rank === 2)
      return (
        <Badge
          variant="default"
          className="font-bold bg-gray-400 text-gray-900"
        >
          🥈 #2
        </Badge>
      );
    if (rank === 3)
      return (
        <Badge
          variant="default"
          className="font-bold bg-amber-600 text-amber-100"
        >
          🥉 #3
        </Badge>
      );
    if (rank <= 5) return <Badge variant="outline">#{rank}</Badge>;
    if (rank <= 10) return <Badge variant="secondary">#{rank}</Badge>;
    return (
      <Badge variant="outline" className="text-muted-foreground">
        #{rank}
      </Badge>
    );
  };

  const getSpeedColor = (speed) => {
    switch (speed) {
      case "Very Fast":
        return "text-green-600 font-semibold";
      case "Fast":
        return "text-green-500";
      case "Medium":
        return "text-yellow-600";
      case "Slow":
        return "text-orange-600";
      case "Very Slow":
        return "text-red-600 font-semibold";
      default:
        return "text-muted-foreground";
    }
  };

  const getCostColor = (cost) => {
    switch (cost) {
      case "Very Low":
        return "text-green-600 font-semibold";
      case "Low":
        return "text-green-500";
      case "Medium":
        return "text-yellow-600";
      case "High":
        return "text-red-600 font-semibold";
      default:
        return "text-muted-foreground";
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "transformer":
        return <Zap className="text-purple-600" size={16} />;
      case "rnn":
        return <Brain className="text-blue-600" size={16} />;
      case "cnn":
        return <Layers className="text-green-600" size={16} />;
      case "hybrid":
        return <Target className="text-orange-600" size={16} />;
      case "linear":
        return <TrendingUp className="text-teal-600" size={16} />;
      case "ensemble":
        return <Trophy className="text-amber-600" size={16} />;
      case "kernel":
        return <Shield className="text-indigo-600" size={16} />;
      case "probabilistic":
        return <BarChart3 className="text-cyan-600" size={16} />;
      case "discriminant":
        return <Clock className="text-pink-600" size={16} />;
      case "instance":
        return <Cpu className="text-slate-600" size={16} />;
      default:
        return <div className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Header */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              Comprehensive Analysis
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Model <span className="text-primary">Comparison</span> Analysis
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              In-depth comparison of all 20 machine learning and deep learning
              models tested. Performance metrics, computational requirements,
              deployment considerations, and recommendation matrix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-teal-600 hover:bg-teal-700"
              >
                <Brain className="mr-2" />
                ML Details
              </Button>
              <Button
                variant="default"
                size="lg"
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Zap className="mr-2" />
                DL Details
              </Button>
            </div>
          </div>

          {/* Performance Overview */}
          <Card className="shadow-lg mb-12 bg-gradient-to-br from-primary/5 to-purple-50 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Trophy className="text-primary" />
                Overall Performance Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center mb-8">
                <div className="p-4 bg-card rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    92.36%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Best Accuracy
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    BERT Transformer
                  </div>
                </div>
                <div className="p-4 bg-card rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-2">
                    0.9402
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Best F1-Score
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    BERT Transformer
                  </div>
                </div>
                <div className="p-4 bg-card rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    20
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Total Models
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    8 ML + 10 DL + 2 Failed
                  </div>
                </div>
                <div className="p-4 bg-card rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    0.1s
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Fastest Inference
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Logistic Regression
                  </div>
                </div>
                <div className="p-4 bg-card rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-amber-600 mb-2">
                    110M
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Max Parameters
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    BERT Models
                  </div>
                </div>
              </div>

              {/* Category Distribution */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-lg font-bold text-purple-800">2</div>
                  <div className="text-sm text-purple-600">Transformers</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-lg font-bold text-blue-800">6</div>
                  <div className="text-sm text-blue-600">RNN/LSTM Models</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-lg font-bold text-green-800">2</div>
                  <div className="text-sm text-green-600">CNN Models</div>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="text-lg font-bold text-orange-800">8</div>
                  <div className="text-sm text-orange-600">Traditional ML</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Performance Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {/* Top Models Performance Bar Chart */}
            <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-blue-50 border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <BarChart3 className="text-primary" />
                  Top 8 Models Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    data={performanceChartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis
                      dataKey="name"
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      interval={0}
                      fontSize={10}
                    />
                    <YAxis domain={[80, 95]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#f8fafc",
                        border: "2px solid #e2e8f0",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar
                      dataKey="accuracy"
                      fill="#8b5cf6"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Speed vs Accuracy Scatter Plot */}
            <Card className="shadow-lg bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Zap className="text-green-600" />
                  Speed vs Accuracy Trade-off
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <ScatterChart data={speedVsAccuracyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis
                      dataKey="speed"
                      name="Inference Time (s)"
                      domain={[0, 2]}
                      label={{
                        value: "Inference Time (seconds)",
                        position: "insideBottom",
                        offset: -10,
                      }}
                    />
                    <YAxis
                      dataKey="accuracy"
                      name="Accuracy"
                      domain={[80, 95]}
                      label={{
                        value: "Accuracy (%)",
                        angle: -90,
                        position: "insideLeft",
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#f8fafc",
                        border: "2px solid #e2e8f0",
                        borderRadius: "8px",
                      }}
                      formatter={(value, name) => [
                        name === "accuracy" ? `${value}%` : `${value}s`,
                        name === "accuracy" ? "Accuracy" : "Speed",
                      ]}
                    />
                    <Scatter dataKey="accuracy" fill="#10b981" />
                  </ScatterChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Model Category Distribution */}
            <Card className="shadow-lg bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Trophy className="text-amber-600" />
                  Model Categories Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={categoryDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={120}
                      innerRadius={60}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, value, performance }) =>
                        `${name} (${value})\n${performance}%`
                      }
                      labelLine={false}
                    >
                      {categoryDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value, name, props) => [
                        `${value} models`,
                        `Avg: ${props.payload.performance}%`,
                      ]}
                      contentStyle={{
                        backgroundColor: "#f8fafc",
                        border: "2px solid #e2e8f0",
                        borderRadius: "8px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Radar Chart Comparison */}
            <Card className="shadow-lg bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Target className="text-cyan-600" />
                  Multi-Dimensional Comparison
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart>
                    <PolarGrid gridType="polygon" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fontSize: 12 }}
                      className="text-xs"
                    />
                    <PolarRadiusAxis angle={0} domain={[0, 100]} tick={false} />
                    <Radar
                      name="BERT"
                      dataKey="value"
                      stroke="#8b5cf6"
                      fill="#8b5cf6"
                      fillOpacity={0.1}
                      strokeWidth={2}
                      data={[
                        { subject: "Accuracy", value: 92.36 },
                        { subject: "Speed", value: 30 },
                        { subject: "Memory", value: 20 },
                        { subject: "Interpretability", value: 20 },
                        { subject: "Deployment", value: 20 },
                      ]}
                    />
                    <Radar
                      name="Logistic Reg"
                      dataKey="value"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.1}
                      strokeWidth={2}
                      data={[
                        { subject: "Accuracy", value: 91.45 },
                        { subject: "Speed", value: 95 },
                        { subject: "Memory", value: 95 },
                        { subject: "Interpretability", value: 95 },
                        { subject: "Deployment", value: 95 },
                      ]}
                    />
                    <Radar
                      name="BiLSTM+Attn"
                      dataKey="value"
                      stroke="#f59e0b"
                      fill="#f59e0b"
                      fillOpacity={0.1}
                      strokeWidth={2}
                      data={[
                        { subject: "Accuracy", value: 91.03 },
                        { subject: "Speed", value: 70 },
                        { subject: "Memory", value: 70 },
                        { subject: "Interpretability", value: 80 },
                        { subject: "Deployment", value: 70 },
                      ]}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#f8fafc",
                        border: "2px solid #e2e8f0",
                        borderRadius: "8px",
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
                <div className="flex justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">BERT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Logistic Reg</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">BiLSTM+Attn</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Training Progress Chart */}
          <Card className="shadow-lg mb-12 bg-gradient-to-br from-primary/5 to-purple-50 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <TrendingUp className="text-primary" />
                Model Training Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={trainingProgressData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="epoch" />
                  <YAxis domain={[80, 95]} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#f8fafc",
                      border: "2px solid #e2e8f0",
                      borderRadius: "8px",
                    }}
                    formatter={(value, name) => [
                      `${value}%`,
                      name.toUpperCase(),
                    ]}
                  />
                  <Area
                    type="monotone"
                    dataKey="bert"
                    stackId="1"
                    stroke="#8b5cf6"
                    fill="#8b5cf6"
                    fillOpacity={0.3}
                    strokeWidth={3}
                  />
                  <Area
                    type="monotone"
                    dataKey="logistic"
                    stackId="2"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.3}
                    strokeWidth={3}
                  />
                  <Area
                    type="monotone"
                    dataKey="bilstm"
                    stackId="3"
                    stroke="#f59e0b"
                    fill="#f59e0b"
                    fillOpacity={0.3}
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-8 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-purple-500 rounded-full opacity-70"></div>
                  <span className="text-sm font-medium">BERT Transformer</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full opacity-70"></div>
                  <span className="text-sm font-medium">
                    Logistic Regression
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full opacity-70"></div>
                  <span className="text-sm font-medium">
                    BiLSTM + Attention
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Head-to-Head Comparison */}
          <Card className="shadow-lg mb-12 bg-gradient-to-br from-primary/5 to-purple-50 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Trophy className="text-primary" />
                Best ML vs Best DL: Head-to-Head
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {comparisonData.map((model, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-lg border-2 ${
                      index === 1
                        ? "border-primary/30 bg-primary/5"
                        : "border-green-300 bg-green-50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        {index === 0 ? (
                          <Brain className="text-green-600" />
                        ) : (
                          <Zap className="text-primary" />
                        )}
                        {model.category}
                      </h3>
                      {index === 1 && <Trophy className="text-primary" />}
                    </div>
                    <div className="space-y-3">
                      <div className="text-lg font-semibold">
                        {model.bestModel}
                      </div>
                      <div className="text-xs text-muted-foreground bg-muted/30 p-2 rounded">
                        {model.note}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-card rounded-lg">
                          <div className="text-2xl font-bold text-primary">
                            {(model.accuracy * 100).toFixed(2)}%
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Accuracy
                          </div>
                        </div>
                        <div className="text-center p-3 bg-card rounded-lg">
                          <div className="text-2xl font-bold text-primary">
                            {model.f1Score.toFixed(4)}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            F1-Score
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          Training:{" "}
                          <span className="font-mono">
                            {model.trainingTime}
                          </span>
                        </div>
                        <div>
                          Inference:{" "}
                          <span className="font-mono">
                            {model.inferenceTime}
                          </span>
                        </div>
                        <div>
                          Parameters:{" "}
                          <span className="font-mono">{model.parameters}</span>
                        </div>
                        <div>
                          Memory:{" "}
                          <span className="font-mono">{model.memoryUsage}</span>
                        </div>
                        <div>
                          Interpretability:{" "}
                          <span className="font-mono">
                            {model.interpretability}
                          </span>
                        </div>
                        <div>
                          Deployment:{" "}
                          <span className="font-mono">{model.deployment}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <BarChart3 className="text-primary" />
                  Key Insights
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <div className="font-medium text-green-600 mb-2">
                      ✓ BERT Advantages
                    </div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• 0.91% higher accuracy (92.36% vs 91.45%)</li>
                      <li>• Superior F1-score (0.9402 vs 0.92)</li>
                      <li>• Better contextual understanding</li>
                      <li>• State-of-the-art transformer architecture</li>
                      <li>• Pre-trained knowledge transfer</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium text-primary mb-2">
                      ⚡ Logistic Regression Advantages
                    </div>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• 15x faster training (~2 min vs ~30 min)</li>
                      <li>• 15x faster inference (~0.1s vs ~1.5s)</li>
                      <li>• 2200x fewer parameters (50K vs 110M)</li>
                      <li>• Highly interpretable coefficients</li>
                      <li>• Much easier deployment & maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Complete Rankings */}
          <Card className="shadow-lg mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <TrendingUp className="text-primary" />
                Complete Model Rankings (20 Models)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold">Rank</th>
                      <th className="text-left p-4 font-semibold">Model</th>
                      <th className="text-center p-4 font-semibold">Type</th>
                      <th className="text-center p-4 font-semibold">
                        Category
                      </th>
                      <th className="text-center p-4 font-semibold">
                        Accuracy
                      </th>
                      <th className="text-center p-4 font-semibold">
                        F1-Score
                      </th>
                      <th className="text-center p-4 font-semibold">Speed</th>
                      <th className="text-center p-4 font-semibold">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allModelsComparison.map((model, index) => (
                      <tr
                        key={index}
                        className={`border-b ${
                          index < 3 ? "bg-primary/5" : ""
                        } ${index === 0 ? "border-2 border-primary/30" : ""} ${
                          model.name.includes("Failed")
                            ? "bg-destructive/5"
                            : ""
                        }`}
                      >
                        <td className="p-4">{getRankBadge(model.rank)}</td>
                        <td className="p-4 font-medium">
                          {model.name.includes("Failed") && (
                            <AlertTriangle
                              className="inline mr-2 text-red-600"
                              size={16}
                            />
                          )}
                          {model.name}
                        </td>
                        <td className="p-4 text-center">
                          <Badge
                            variant={
                              model.type === "DL" ? "default" : "secondary"
                            }
                          >
                            {model.type}
                          </Badge>
                        </td>
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center gap-1">
                            {getCategoryIcon(model.category)}
                            <span className="text-xs">{model.category}</span>
                          </div>
                        </td>
                        <td className="p-4 text-center font-mono font-semibold">
                          <span
                            className={
                              model.accuracy > 0.91
                                ? "text-green-600"
                                : model.accuracy > 0.85
                                ? "text-yellow-600"
                                : "text-red-600"
                            }
                          >
                            {(model.accuracy * 100).toFixed(2)}%
                          </span>
                        </td>
                        <td className="p-4 text-center font-mono">
                          <span
                            className={
                              model.f1 > 0.91
                                ? "text-green-600"
                                : model.f1 > 0.85
                                ? "text-yellow-600"
                                : "text-red-600"
                            }
                          >
                            {model.f1.toFixed(4)}
                          </span>
                        </td>
                        <td
                          className={`p-4 text-center ${getSpeedColor(
                            model.speed
                          )}`}
                        >
                          {model.speed}
                        </td>
                        <td
                          className={`p-4 text-center ${getCostColor(
                            model.cost
                          )}`}
                        >
                          {model.cost}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Performance Analysis */}
          <Card className="shadow-lg mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <BarChart3 className="text-primary" />
                Performance Analysis by Category
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h5 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                    <Zap size={16} />
                    Transformers (2 models)
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div>Best: BERT (92.36%)</div>
                    <div>Avg: 92.32%</div>
                    <div className="text-xs text-muted-foreground">
                      Highest accuracy but slowest inference
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                    <Brain size={16} />
                    RNN/LSTM (6 models)
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div>Best: BiLSTM+Attn (91.03%)</div>
                    <div>Avg: 90.7%</div>
                    <div className="text-xs text-muted-foreground">
                      Good balance of performance and interpretability
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <Layers size={16} />
                    CNNs (2 models)
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div>Best: CNN Basic (90.87%)</div>
                    <div>Avg: 90.71%</div>
                    <div className="text-xs text-muted-foreground">
                      Fast inference with competitive accuracy
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                  <h5 className="font-semibold text-teal-800 mb-2 flex items-center gap-2">
                    <TrendingUp size={16} />
                    Linear Models (2 models)
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div>Best: LogReg (91.45%)</div>
                    <div>Avg: 90.92%</div>
                    <div className="text-xs text-muted-foreground">
                      Fastest training and most interpretable
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <h5 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                    <Trophy size={16} />
                    Ensembles (2 models)
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div>Best: GradBoost (90.7%)</div>
                    <div>Avg: 90.66%</div>
                    <div className="text-xs text-muted-foreground">
                      Robust predictions with feature importance
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-200">
                  <h5 className="font-semibold text-cyan-800 mb-2 flex items-center gap-2">
                    <BarChart3 size={16} />
                    Probabilistic (2 models)
                  </h5>
                  <div className="space-y-2 text-sm">
                    <div>Best: MultiNB (84.85%)</div>
                    <div>Avg: 81.26%</div>
                    <div className="text-xs text-muted-foreground">
                      Very fast but lower accuracy
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommendation Matrix */}
          <Card className="shadow-lg mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Shield className="text-primary" />
                Model Selection Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-4 border-2 border-primary/30 bg-primary/5">
                  <CardHeader className="p-0 pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Trophy className="text-primary" size={20} />
                      Maximum Accuracy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-2">
                      <div className="font-semibold text-primary">
                        Recommended: BERT
                      </div>
                      <div className="text-sm text-muted-foreground">
                        • Highest accuracy (92.36%) • Best F1-score (0.9402) •
                        Contextual understanding • State-of-the-art performance
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-4 border-2 border-green-300 bg-green-50">
                  <CardHeader className="p-0 pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Zap className="text-green-600" size={20} />
                      Production Systems
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-2">
                      <div className="font-semibold text-green-600">
                        Recommended: Logistic Regression
                      </div>
                      <div className="text-sm text-muted-foreground">
                        • Sub-second inference (0.1s) • Low resource
                        requirements • Easy deployment • 91.45% accuracy
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-4 border-2 border-amber-300 bg-amber-50">
                  <CardHeader className="p-0 pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Brain className="text-amber-700" size={20} />
                      Balanced Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-2">
                      <div className="font-semibold text-amber-700">
                        Recommended: BiLSTM + Attention
                      </div>
                      <div className="text-sm text-muted-foreground">
                        • Good accuracy (91.03%) • Attention visualization •
                        Moderate resource usage • Interpretable predictions
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-4 border-2 border-cyan-300 bg-cyan-50">
                  <CardHeader className="p-0 pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Clock className="text-cyan-700" size={20} />
                      Fast Inference
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-2">
                      <div className="font-semibold text-cyan-700">
                        Recommended: CNN
                      </div>
                      <div className="text-sm text-muted-foreground">
                        • Fast parallel processing • Good accuracy (90.87%) •
                        GPU optimized • Competitive F1-score
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-4 border-2 border-gray-300 bg-gray-50">
                  <CardHeader className="p-0 pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Cpu className="text-gray-700" size={20} />
                      Resource Constrained
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-2">
                      <div className="font-semibold">
                        Recommended: Multinomial Naive Bayes
                      </div>
                      <div className="text-sm text-muted-foreground">
                        • Ultra-fast inference • Minimal memory usage • Simple
                        deployment • Reasonable baseline (84.85%)
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-4 border-2 border-red-300 bg-red-50">
                  <CardHeader className="p-0 pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertTriangle className="text-red-700" size={20} />
                      Avoid
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="space-y-2">
                      <div className="font-semibold text-red-700">
                        Not Recommended: KNN
                      </div>
                      <div className="text-sm text-muted-foreground">
                        • Poor accuracy (57.16%) • Very slow inference • High
                        memory usage • Scalability issues
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Final Conclusion */}
          <Card className="shadow-lg bg-gradient-to-br from-primary/5 to-purple-50 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-2xl flex items-center justify-center gap-3">
                <Trophy className="text-primary" />
                Final Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-6">
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                  For <strong className="text-primary">maximum accuracy</strong>
                  , choose <strong>BERT Transformer (92.36%)</strong>. For{" "}
                  <strong className="text-green-600">
                    production deployment
                  </strong>
                  , choose <strong>Logistic Regression (91.45%)</strong>. For{" "}
                  <strong className="text-amber-600">
                    balanced performance
                  </strong>
                  , consider <strong>BiLSTM + Attention (91.03%)</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="font-semibold text-primary mb-2">
                      Best Overall
                    </div>
                    <div className="text-2xl font-bold">BERT</div>
                    <div className="text-sm text-muted-foreground">
                      92.36% accuracy
                    </div>
                  </div>
                  <div className="p-4 bg-green-100 rounded-lg border border-green-300">
                    <div className="font-semibold text-green-600 mb-2">
                      Best for Production
                    </div>
                    <div className="text-2xl font-bold">Logistic Reg</div>
                    <div className="text-sm text-muted-foreground">
                      91.45% accuracy, 0.1s inference
                    </div>
                  </div>
                  <div className="p-4 bg-amber-100 rounded-lg border border-amber-300">
                    <div className="font-semibold text-amber-600 mb-2">
                      Most Interpretable
                    </div>
                    <div className="text-2xl font-bold">BiLSTM + Attn</div>
                    <div className="text-sm text-muted-foreground">
                      91.03% accuracy, attention weights
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="bg-purple-600 hover:bg-purple-700"
                    size="lg"
                    onClick={() => (window.location.href = "/classifier")}
                  >
                    <Zap className="mr-2" />
                    Try Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => (window.location.href = "/ml-models")}
                  >
                    <Brain className="mr-2" />
                    Explore ML Models
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => (window.location.href = "/dl-models")}
                  >
                    <TrendingUp className="mr-2" />
                    Explore DL Models
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ComparisonPage;
