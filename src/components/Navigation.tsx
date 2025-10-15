import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, BarChart3, Home, Target } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/ml-models", label: "ML Models", icon: Brain },
    { path: "/dl-models", label: "DL Models", icon: Zap },
    { path: "/comparison", label: "Comparison", icon: BarChart3 },
    { path: "/classifier", label: "Live Demo", icon: Target }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Brain className="text-white" size={20} />
            </div>
            <span className="font-bold text-xl text-foreground">OffensiveML</span>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link key={path} to={path}>
                <Button 
                  variant={location.pathname === path ? "default" : "ghost"} 
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </Button>
              </Link>
            ))}
          </div>

          <Badge variant="outline" className="hidden sm:flex">
            Research Project
          </Badge>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex flex-wrap gap-2 mt-4">
          {navItems.map(({ path, label, icon: Icon }) => (
            <Link key={path} to={path}>
              <Button 
                variant={location.pathname === path ? "default" : "outline"} 
                size="sm"
                className="flex items-center space-x-1"
              >
                <Icon size={14} />
                <span className="text-xs">{label}</span>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;