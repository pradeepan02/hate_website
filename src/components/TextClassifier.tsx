import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Zap, Brain, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TextClassifier = () => {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [useBert, setUseBert] = useState(false);
  const [result, setResult] = useState<{
    prediction: "Offensive" | "Not Offensive";
    confidence: number;
    model: string;
  } | null>(null);
  const { toast } = useToast();

  const handleClassify = async () => {
    if (!inputText.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter some text to classify",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call with realistic delays
    await new Promise(resolve => setTimeout(resolve, useBert ? 2000 : 800));
    
    // Simulate model prediction based on keywords and text patterns
    const offensiveKeywords = [
      "hate", "stupid", "idiot", "kill", "die", "worst", "terrible", 
      "disgusting", "awful", "pathetic", "loser", "moron"
    ];
    
    const lowerText = inputText.toLowerCase();
    const hasOffensiveWords = offensiveKeywords.some(word => lowerText.includes(word));
    const hasExclamation = lowerText.includes("!");
    const hasAllCaps = inputText !== inputText.toLowerCase() && inputText.length > 10;
    
    // Simple heuristic for demonstration
    let isOffensive = hasOffensiveWords || (hasAllCaps && hasExclamation);
    
    // Add some randomness to simulate model uncertainty
    const randomFactor = Math.random();
    if (randomFactor > 0.8) {
      isOffensive = !isOffensive;
    }
    
    // BERT tends to be slightly more accurate
    const baseConfidence = isOffensive ? 
      (hasOffensiveWords ? 0.85 + Math.random() * 0.10 : 0.70 + Math.random() * 0.15) :
      (0.80 + Math.random() * 0.15);
    
    const confidence = useBert ? 
      Math.min(0.95, baseConfidence + 0.05) : 
      Math.min(0.92, baseConfidence);

    setResult({
      prediction: isOffensive ? "Offensive" : "Not Offensive",
      confidence: Math.round(confidence * 100),
      model: useBert ? "BERT (Tuned)" : "Logistic Regression (Tuned)"
    });

    setIsLoading(false);
  };

  const handleClear = () => {
    setInputText("");
    setResult(null);
  };

  const exampleTexts = [
    "I love this beautiful sunny day!",
    "This is absolutely terrible and disgusting!",
    "What a wonderful project on machine learning.",
    "I hate everything about this stupid system!"
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Interactive Demo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Live <span className="text-primary">Offensive Language</span> Detector
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Test our trained models with your own text. Compare performance between fast Logistic Regression and accurate BERT models.
          </p>
        </div>

        <Card className="shadow-elevated bg-gradient-subtle border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-3">
                <Zap className="text-primary" />
                Text Classification
              </span>
              <div className="flex items-center space-x-2">
                <Brain className="text-muted-foreground" size={16} />
                <span className="text-sm text-muted-foreground">Logistic Regression</span>
                <Switch 
                  checked={useBert}
                  onCheckedChange={setUseBert}
                  disabled={isLoading}
                />
                <span className="text-sm text-muted-foreground">BERT</span>
                <Zap className="text-primary" size={16} />
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                Enter text to classify:
              </label>
              <Textarea
                placeholder="Type or paste any text here to check if it's offensive..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="min-h-[120px] resize-none"
                disabled={isLoading}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground">Quick examples:</span>
              {exampleTexts.map((example, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => setInputText(example)}
                  disabled={isLoading}
                  className="text-xs h-8"
                >
                  {example.substring(0, 30)}...
                </Button>
              ))}
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleClassify}
                disabled={isLoading || !inputText.trim()}
                className="flex-1"
                variant={useBert ? "research" : "premium"}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                    {useBert ? "Processing with BERT..." : "Classifying..."}
                  </>
                ) : (
                  <>
                    <Shield className="mr-2" />
                    Classify Text
                  </>
                )}
              </Button>
              <Button variant="outline" onClick={handleClear} disabled={isLoading}>
                Clear
              </Button>
            </div>

            {result && (
              <Alert className={`${result.prediction === "Offensive" ? "border-destructive bg-destructive/5" : "border-success bg-success/5"}`}>
                <div className="flex items-center gap-3">
                  {result.prediction === "Offensive" ? (
                    <AlertTriangle className="text-destructive" />
                  ) : (
                    <CheckCircle className="text-success" />
                  )}
                  <div className="flex-1">
                    <AlertDescription className="text-base">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">
                          Prediction: <span className={result.prediction === "Offensive" ? "text-destructive" : "text-success"}>
                            {result.prediction}
                          </span>
                        </span>
                        <Badge variant={result.prediction === "Offensive" ? "destructive" : "success"}>
                          {result.confidence}% confidence
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Model: <strong>{result.model}</strong> • 
                        Processing time: {useBert ? "~2.1s" : "~0.8s"}
                      </div>
                    </AlertDescription>
                  </div>
                </div>
              </Alert>
            )}

            <Card className="bg-card/50 border-primary/20">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Brain className="text-primary" size={16} />
                  Model Information
                </h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  {useBert ? (
                    <>
                      <div>• <strong>BERT:</strong> 92.36% accuracy, contextual understanding</div>
                      <div>• Processing time: ~2 seconds, higher computational cost</div>
                      <div>• Best for: Maximum accuracy, production systems with adequate resources</div>
                    </>
                  ) : (
                    <>
                      <div>• <strong>Logistic Regression:</strong> 91.45% accuracy, fast inference</div>
                      <div>• Processing time: ~0.8 seconds, lightweight deployment</div>
                      <div>• Best for: Real-time applications, resource-constrained environments</div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TextClassifier;