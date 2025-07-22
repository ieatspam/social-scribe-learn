import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Brain, Network, ArrowRight, Users, TrendingUp, Zap } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Interactive Study Cards",
      description: "Learn SNA concepts with flip-card animations and spaced repetition",
      link: "/study"
    },
    {
      icon: Brain,
      title: "Knowledge Quiz",
      description: "Test your understanding with comprehensive multiple-choice questions",
      link: "/quiz"
    },
    {
      icon: Network,
      title: "Network Visualizations",
      description: "Explore interactive social network graphs and patterns",
      link: "/visualizations"
    }
  ];

  const concepts = [
    {
      icon: Users,
      title: "Network Structure",
      description: "Understanding nodes, edges, and network topology"
    },
    {
      icon: TrendingUp,
      title: "Centrality Measures",
      description: "Identifying important actors through various metrics"
    },
    {
      icon: Zap,
      title: "Network Dynamics",
      description: "How networks evolve and influence behavior"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Network className="h-4 w-4" />
              <span>Social Network Analysis Learning Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              Master Social Network 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Analysis</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover the science behind social connections. Learn to analyze relationships, 
              identify influential actors, and understand network dynamics through interactive tools.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/study">
                <Button size="lg" className="text-lg px-8 py-6">
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/quiz">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Take Quiz
                  <Brain className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Learning Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three powerful tools to help you master Social Network Analysis concepts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="text-center shadow-card hover:shadow-elevated transition-all duration-300 group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-primary">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    <Link to={feature.link}>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Concepts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What You'll Learn
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Core concepts that form the foundation of Social Network Analysis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {concepts.map((concept, index) => {
              const Icon = concept.icon;
              return (
                <div 
                  key={index} 
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  <div className="mx-auto mb-6 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {concept.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {concept.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Explore Social Networks?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join thousands of students learning to analyze social connections and network patterns
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/study">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Begin with Study Cards
                  <BookOpen className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/visualizations">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                  Explore Networks
                  <Network className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
