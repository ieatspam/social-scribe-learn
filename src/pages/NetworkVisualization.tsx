import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Network, Upload, FileImage, Info } from 'lucide-react';

const NetworkVisualization = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Network className="h-10 w-10 text-primary mr-3" />
            <h1 className="text-4xl font-bold text-primary">Network Visualizations</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore interactive social network visualizations to understand network structures and patterns
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Visualization Area */}
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileImage className="h-6 w-6 text-primary" />
                <span>Interactive Network Viewer</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-16 text-center bg-muted/30">
                <Network className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  Visualization Area Ready
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  This section is prepared for your network visualization files. 
                  You can upload and display interactive network graphs here.
                </p>
                <Button variant="outline" disabled>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Network Data
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Information Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Info className="h-5 w-5 text-primary" />
                  <span>Supported Features</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Interactive node and edge exploration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Real-time network metrics calculation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Multiple layout algorithms</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Node filtering and highlighting</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Export capabilities for analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Network className="h-5 w-5 text-secondary" />
                  <span>Example Networks</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="font-medium text-card-foreground">Friendship Networks</div>
                    <div className="text-muted-foreground">Explore social connections and community structures</div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="font-medium text-card-foreground">Communication Networks</div>
                    <div className="text-muted-foreground">Analyze information flow and key communicators</div>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="font-medium text-card-foreground">Collaboration Networks</div>
                    <div className="text-muted-foreground">Discover partnerships and working relationships</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Instructions */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                <p className="text-muted-foreground mb-4">
                  To add your network visualizations to this section:
                </p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Prepare your network data in a supported format (GraphML, JSON, CSV)</li>
                  <li>Import your visualization library (D3.js, Cytoscape.js, or similar)</li>
                  <li>Replace the placeholder content above with your interactive visualization</li>
                  <li>Add controls for filtering, layout options, and analysis tools</li>
                  <li>Connect the visualization to your study cards and quiz content</li>
                </ol>
                <p className="text-muted-foreground mt-4">
                  This modular design makes it easy to integrate any network visualization framework while maintaining the educational theme.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NetworkVisualization;