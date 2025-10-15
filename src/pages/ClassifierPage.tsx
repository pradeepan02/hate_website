import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import {
  Loader2,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Cpu,
  Brain,
  Server,
  Shield,
  Sparkles,
  Zap,
  Target,
  Activity,
  TrendingUp,
  BarChart3,
  Layers,
  Trophy,
  Info,
} from "lucide-react";

interface PredictionResult {
  model: string;
  text: string;
  prediction: string;
  confidence: number;
  probabilities: {
    offensive: number;
    not_offensive: number;
  };
  timestamp: string;
  processed_text?: string;
  bert_override?: boolean;
  using_fallback?: boolean;
}

interface BothResults {
  models: {
    logistic_regression?: PredictionResult;
    bert?: PredictionResult;
  };
  agreement: boolean;
  timestamp: string;
  warnings?: string[];
}

const ClassifierPage = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<{
    lr?: PredictionResult;
    bert?: PredictionResult;
    both?: BothResults;
  }>({});
  const [activeModel, setActiveModel] = useState<"lr" | "bert">("lr");
  const [backendStatus, setBackendStatus] = useState<
    "checking" | "online" | "offline"
  >("checking");
  const [healthData, setHealthData] = useState<any>(null);
  const [hoveredSample, setHoveredSample] = useState<number | null>(null);

  const API_BASE = "http://localhost:5000/api";

  useEffect(() => {
    checkBackendStatus();
  }, []);

  const checkBackendStatus = async () => {
    try {
      const response = await fetch(`${API_BASE}/health`);
      if (response.ok) {
        const data = await response.json();
        setHealthData(data);
        setBackendStatus("online");
      } else {
        setBackendStatus("offline");
      }
    } catch (error) {
      setBackendStatus("offline");
      console.error("Backend health check failed:", error);
    }
  };

  const predict = async (model: "lr" | "bert") => {
    if (!text.trim()) {
      alert("Please enter some text to analyze.");
      return;
    }

    if (backendStatus === "offline") {
      alert(
        "Backend server is offline. Please make sure the Flask server is running on port 5000."
      );
      return;
    }

    setLoading(true);
    setActiveModel(model);

    try {
      const response = await fetch(`${API_BASE}/predict/${model}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: text.trim() }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }

      const data = await response.json();

      // For individual model calls, create a BothResults-like structure
      const modelKey = model === "lr" ? "logistic_regression" : "bert";
      const individualResult: BothResults = {
        models: {
          [modelKey]: data.models[modelKey],
        },
        agreement: true,
        timestamp: data.timestamp,
      };
      setResults({ both: individualResult });
    } catch (error) {
      console.error("Prediction error:", error);
      alert(
        `Prediction failed: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    } finally {
      setLoading(false);
    }
  };

  const getPredictionIcon = (prediction: string) => {
    if (prediction.toLowerCase() === "offensive") {
      return <XCircle className="w-5 h-5 text-red-500" />;
    } else if (prediction.toLowerCase() === "not_offensive") {
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    } else {
      return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence > 0.8) return "text-green-600 font-semibold";
    if (confidence > 0.6) return "text-yellow-600 font-semibold";
    return "text-red-600 font-semibold";
  };

  const formatPercentage = (value: number) => {
    if (isNaN(value) || !isFinite(value)) return "0.00%";
    return `${(value * 100).toFixed(2)}%`;
  };

  const sampleTexts = [
    "This is a wonderful day!",
    "I hate you so much!",
    "You are stupid and dumb",
    "Have a great day my friend!",
    "Go to hell you idiot",
    "hey bitch",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-success/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/3 to-transparent rounded-full opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6">
              <Badge
                variant="outline"
                className="px-6 py-3 text-sm font-medium border-2 border-primary/20 bg-primary/5"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                AI-Powered Text Analysis
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-success bg-clip-text text-transparent animate-gradient">
                Tweet Tone
              </span>
              <br />
              <span className="text-foreground">Detective</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              Detect offensive language in text using{" "}
              <span className="text-primary font-semibold">
                state-of-the-art AI models
              </span>
              . Choose between traditional ML and deep learning approaches.
            </p>
          </div>

          {/* Backend Status Card */}
          <Card className="shadow-2xl mb-12 bg-gradient-to-br from-card via-card to-primary/5 border-2 border-primary/20 backdrop-blur-sm max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-3 rounded-xl ${
                      backendStatus === "online"
                        ? "bg-green-100"
                        : backendStatus === "offline"
                        ? "bg-red-100"
                        : "bg-yellow-100"
                    }`}
                  >
                    <Server
                      className={`w-6 h-6 ${
                        backendStatus === "online"
                          ? "text-green-600"
                          : backendStatus === "offline"
                          ? "text-red-600"
                          : "text-yellow-600"
                      }`}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">
                      Backend Server Status
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Real-time model availability
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {healthData && (
                    <div className="flex gap-3 text-sm">
                      <Badge
                        variant={
                          healthData.models_loaded?.logistic_regression
                            ? "default"
                            : "secondary"
                        }
                        className="px-3 py-2"
                      >
                        <Cpu className="w-3 h-3 mr-1" />
                        LR:{" "}
                        {healthData.models_loaded?.logistic_regression
                          ? "✅"
                          : "❌"}
                      </Badge>
                      <Badge
                        variant={
                          healthData.models_loaded?.bert
                            ? "default"
                            : "secondary"
                        }
                        className="px-3 py-2"
                      >
                        <Brain className="w-3 h-3 mr-1" />
                        BERT: {healthData.models_loaded?.bert ? "✅" : "❌"}
                      </Badge>
                    </div>
                  )}
                  <Badge
                    variant={
                      backendStatus === "online"
                        ? "default"
                        : backendStatus === "offline"
                        ? "destructive"
                        : "secondary"
                    }
                    className="px-4 py-2 text-sm font-semibold"
                  >
                    {backendStatus === "online"
                      ? "🟢 Online"
                      : backendStatus === "offline"
                      ? "🔴 Offline"
                      : "🟡 Checking..."}
                  </Badge>
                </div>
              </div>
              {backendStatus === "offline" && (
                <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center gap-2 text-red-800">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      Please start the backend server:{" "}
                      <code className="bg-red-100 px-2 py-1 rounded">
                        python app.py
                      </code>
                    </span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Analysis Section */}
            <div className="lg:col-span-2">
              <Card className="shadow-2xl border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 backdrop-blur-sm h-full">
                <CardHeader className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-t-lg border-b-2 border-primary/20">
                  <CardTitle className="text-2xl font-bold flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-xl">
                      <Brain className="w-6 h-6 text-primary" />
                    </div>
                    Text Analysis Studio
                  </CardTitle>
                  <p className="text-muted-foreground mt-2">
                    Enter text below and select a model to analyze
                  </p>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  {/* Text Input */}
                  <div className="space-y-3">
                    <label
                      htmlFor="text-input"
                      className="text-sm font-semibold text-gray-700 flex items-center gap-2"
                    >
                      <Target className="w-4 h-4 text-primary" />
                      Enter text to analyze:
                    </label>
                    <Textarea
                      id="text-input"
                      placeholder="Type or paste text here to check for offensive language... 

Example: 'This is a wonderful day!' or 'You are stupid and dumb'"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      rows={6}
                      className="resize-none border-2 border-primary/20 focus:border-primary focus:ring-primary text-base bg-white/80 backdrop-blur-sm shadow-inner"
                      disabled={backendStatus === "offline"}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Shield className="w-3 h-3" />
                        <span>
                          Text will be automatically preprocessed and analyzed
                        </span>
                      </div>
                      <span className="font-mono">
                        {text.length} characters
                      </span>
                    </div>
                  </div>

                  {/* Quick Test Samples */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Quick test samples:
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {sampleTexts.map((sample, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => setText(sample)}
                          onMouseEnter={() => setHoveredSample(index)}
                          onMouseLeave={() => setHoveredSample(null)}
                          className={`text-xs h-auto py-3 justify-start text-left transition-all duration-300 ${
                            hoveredSample === index
                              ? "bg-primary/10 border-primary/40 shadow-md scale-105"
                              : "hover:bg-primary/5"
                          }`}
                        >
                          <span className="line-clamp-2">{sample}</span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Model Selection Buttons */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Layers className="w-4 h-4 text-primary" />
                      Select analysis model:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Button
                        onClick={() => predict("lr")}
                        disabled={
                          loading || !text.trim() || backendStatus === "offline"
                        }
                        variant={activeModel === "lr" ? "default" : "outline"}
                        className={`h-auto py-6 flex-col gap-3 transition-all duration-300 ${
                          activeModel === "lr"
                            ? "bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg scale-105"
                            : "hover:border-green-400 hover:bg-green-50"
                        }`}
                      >
                        {loading && activeModel === "lr" ? (
                          <Loader2 className="w-6 h-6 animate-spin" />
                        ) : (
                          <Cpu className="w-6 h-6" />
                        )}
                        <div className="text-center">
                          <div className="font-semibold text-lg">
                            Logistic Regression
                          </div>
                          <div className="text-sm opacity-80 mt-1">
                            Fast & Interpretable
                          </div>
                          <div className="text-xs opacity-60 mt-1">
                            91.45% Accuracy • ~0.1s inference
                          </div>
                        </div>
                      </Button>

                      <Button
                        onClick={() => predict("bert")}
                        disabled={
                          loading || !text.trim() || backendStatus === "offline"
                        }
                        variant={activeModel === "bert" ? "default" : "outline"}
                        className={`h-auto py-6 flex-col gap-3 transition-all duration-300 ${
                          activeModel === "bert"
                            ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg scale-105"
                            : "hover:border-purple-400 hover:bg-purple-50"
                        }`}
                      >
                        {loading && activeModel === "bert" ? (
                          <Loader2 className="w-6 h-6 animate-spin" />
                        ) : (
                          <Brain className="w-6 h-6" />
                        )}
                        <div className="text-center">
                          <div className="font-semibold text-lg">
                            BERT Model
                          </div>
                          <div className="text-sm opacity-80 mt-1">
                            High Accuracy
                          </div>
                          <div className="text-xs opacity-60 mt-1">
                            92.36% Accuracy • ~1.5s inference
                          </div>
                        </div>
                      </Button>
                    </div>
                  </div>

                  {/* Warnings */}
                  {results.both?.warnings &&
                    results.both.warnings.length > 0 && (
                      <Card className="bg-yellow-50 border-2 border-yellow-300 shadow-lg">
                        <CardContent className="pt-4">
                          <div className="flex items-start gap-3">
                            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-semibold text-yellow-800 mb-2">
                                ⚠️ Analysis Warnings
                              </div>
                              <ul className="text-sm text-yellow-700 space-y-1 list-disc list-inside">
                                {results.both.warnings.map((warning, index) => (
                                  <li key={index}>{warning}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                </CardContent>
              </Card>
            </div>

            {/* Results Sidebar */}
            <div className="space-y-6">
              {/* Results Card */}
              {results.both && (
                <Card className="shadow-2xl border-2 border-primary/20 bg-gradient-to-br from-card to-success/5 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-primary" />
                        Analysis Results
                      </span>
                      <Badge variant="outline" className="px-3 py-1.5">
                        <span className="flex items-center gap-1">
                          <Target className="w-3 h-3" />
                          {activeModel === "lr"
                            ? "Logistic Regression"
                            : "BERT Model"}
                        </span>
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Logistic Regression Result */}
                    {results.both.models.logistic_regression && (
                      <div className="space-y-3 p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl border-2 border-green-300 shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="p-2 bg-green-100 rounded-lg">
                              <Cpu className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="font-semibold text-green-800">
                              Logistic Regression
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            {getPredictionIcon(
                              results.both.models.logistic_regression.prediction
                            )}
                            <Badge
                              variant={
                                results.both.models.logistic_regression.prediction.toLowerCase() ===
                                "offensive"
                                  ? "destructive"
                                  : "default"
                              }
                              className="text-xs font-semibold px-3 py-1"
                            >
                              {results.both.models.logistic_regression.prediction
                                .replace("_", " ")
                                .toUpperCase()}
                            </Badge>
                          </div>
                        </div>

                        <div className="space-y-2 bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">
                              Confidence:
                            </span>
                            <span
                              className={`text-lg font-bold ${getConfidenceColor(
                                results.both.models.logistic_regression
                                  .confidence
                              )}`}
                            >
                              {formatPercentage(
                                results.both.models.logistic_regression
                                  .confidence
                              )}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all duration-500 ${
                                results.both.models.logistic_regression
                                  .confidence > 0.8
                                  ? "bg-green-500"
                                  : results.both.models.logistic_regression
                                      .confidence > 0.6
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                              }`}
                              style={{
                                width: `${
                                  results.both.models.logistic_regression
                                    .confidence * 100
                                }%`,
                              }}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-2 pt-2">
                            <div className="text-center p-2 bg-red-50 rounded">
                              <div className="text-xs text-gray-600">
                                Offensive
                              </div>
                              <div className="font-mono text-sm font-bold text-red-600">
                                {formatPercentage(
                                  results.both.models.logistic_regression
                                    .probabilities.offensive
                                )}
                              </div>
                            </div>
                            <div className="text-center p-2 bg-green-50 rounded">
                              <div className="text-xs text-gray-600">
                                Not Offensive
                              </div>
                              <div className="font-mono text-sm font-bold text-green-600">
                                {formatPercentage(
                                  results.both.models.logistic_regression
                                    .probabilities.not_offensive
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* BERT Result */}
                    {results.both.models.bert && (
                      <div className="space-y-3 p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border-2 border-purple-300 shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="p-2 bg-purple-100 rounded-lg">
                              <Brain className="w-4 h-4 text-purple-600" />
                            </div>
                            <span className="font-semibold text-purple-800">
                              BERT Transformer
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            {getPredictionIcon(
                              results.both.models.bert.prediction
                            )}
                            <Badge
                              variant={
                                results.both.models.bert.prediction.toLowerCase() ===
                                "offensive"
                                  ? "destructive"
                                  : "default"
                              }
                              className="text-xs font-semibold px-3 py-1"
                            >
                              {results.both.models.bert.prediction
                                .replace("_", " ")
                                .toUpperCase()}
                            </Badge>
                          </div>
                        </div>

                        <div className="space-y-2 bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">
                              Confidence:
                            </span>
                            <span
                              className={`text-lg font-bold ${getConfidenceColor(
                                results.both.models.bert.confidence
                              )}`}
                            >
                              {formatPercentage(
                                results.both.models.bert.confidence
                              )}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all duration-500 ${
                                results.both.models.bert.confidence > 0.8
                                  ? "bg-green-500"
                                  : results.both.models.bert.confidence > 0.6
                                  ? "bg-yellow-500"
                                  : "bg-red-500"
                              }`}
                              style={{
                                width: `${
                                  results.both.models.bert.confidence * 100
                                }%`,
                              }}
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-2 pt-2">
                            <div className="text-center p-2 bg-red-50 rounded">
                              <div className="text-xs text-gray-600">
                                Offensive
                              </div>
                              <div className="font-mono text-sm font-bold text-red-600">
                                {formatPercentage(
                                  results.both.models.bert.probabilities
                                    .offensive
                                )}
                              </div>
                            </div>
                            <div className="text-center p-2 bg-green-50 rounded">
                              <div className="text-xs text-gray-600">
                                Not Offensive
                              </div>
                              <div className="font-mono text-sm font-bold text-green-600">
                                {formatPercentage(
                                  results.both.models.bert.probabilities
                                    .not_offensive
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Model Info Card */}
              <Card className="shadow-xl border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    About the Models
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div className="space-y-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-800">
                        Logistic Regression
                      </span>
                      <Badge variant="outline" className="ml-auto text-xs">
                        91.45% Accuracy
                      </Badge>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Traditional ML model with TF-IDF features. Extremely fast
                      inference (~0.1s), highly interpretable coefficients, and
                      production-ready.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        ⚡ Very Fast
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        📊 Interpretable
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        💚 Low Cost
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-purple-600" />
                      <span className="font-semibold text-purple-800">
                        BERT Transformer
                      </span>
                      <Badge variant="outline" className="ml-auto text-xs">
                        92.36% Accuracy
                      </Badge>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      State-of-the-art deep learning transformer with 110M
                      parameters. Best accuracy and contextual understanding but
                      slower inference (~1.5s).
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        🏆 Best Accuracy
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        🧠 Contextual
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        🔬 Advanced
                      </Badge>
                    </div>
                  </div>

                  <div className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Activity className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold text-blue-800 text-xs">
                        Performance Comparison
                      </span>
                    </div>
                    <div className="space-y-1.5 text-xs text-gray-600">
                      <div className="flex justify-between">
                        <span>Speed:</span>
                        <span className="font-mono">LR: 0.1s | BERT: 1.5s</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Accuracy:</span>
                        <span className="font-mono">
                          LR: 91.45% | BERT: 92.36%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Parameters:</span>
                        <span className="font-mono">LR: 50K | BERT: 110M</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Feature Highlights */}
              <Card className="shadow-xl border-2 border-success/20 bg-gradient-to-br from-card to-success/5 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-success" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  {[
                    {
                      icon: TrendingUp,
                      text: "Real-time analysis",
                      color: "text-blue-600",
                    },
                    {
                      icon: Shield,
                      text: "Privacy-first processing",
                      color: "text-green-600",
                    },
                    {
                      icon: Target,
                      text: "92.36% accuracy rate",
                      color: "text-purple-600",
                    },
                    {
                      icon: Zap,
                      text: "Sub-second inference",
                      color: "text-yellow-600",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-2 bg-white/50 rounded-lg hover:bg-white transition-colors"
                    >
                      <feature.icon className={`w-4 h-4 ${feature.color}`} />
                      <span className="text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-16 text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Explore More
              </h3>
              <p className="text-muted-foreground">
                Dive deeper into our model analysis and comparisons
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                variant="default"
                size="lg"
                className="min-w-52 h-16 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => (window.location.href = "/ml-models")}
              >
                <Brain className="mr-3 w-6 h-6" />
                <div className="text-left">
                  <div className="font-semibold">ML Models</div>
                  <div className="text-xs opacity-80">
                    8 Traditional Algorithms
                  </div>
                </div>
              </Button>
              <Button
                variant="default"
                size="lg"
                className="min-w-52 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => (window.location.href = "/dl-models")}
              >
                <Zap className="mr-3 w-6 h-6" />
                <div className="text-left">
                  <div className="font-semibold">DL Models</div>
                  <div className="text-xs opacity-80">10 Neural Networks</div>
                </div>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="min-w-52 h-16 bg-white/80 backdrop-blur-sm border-2 border-primary/30 hover:bg-primary/5 text-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => (window.location.href = "/comparison")}
              >
                <BarChart3 className="mr-3 w-6 h-6" />
                <div className="text-left">
                  <div className="font-semibold">Compare All</div>
                  <div className="text-xs opacity-80">
                    Side-by-Side Analysis
                  </div>
                </div>
              </Button>
            </div>
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

        .bg-gradient-radial {
          background: radial-gradient(ellipse at center, var(--tw-gradient-stops));
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default ClassifierPage;
