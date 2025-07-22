import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

interface QuizQuestionProps {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  onAnswer: (correct: boolean) => void;
}

const QuizQuestion = ({ 
  question, 
  options, 
  correctAnswer, 
  explanation, 
  onAnswer 
}: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const isCorrect = answerIndex === correctAnswer;
    onAnswer(isCorrect);
  };

  const getButtonVariant = (index: number) => {
    if (!showResult) return selectedAnswer === index ? 'secondary' : 'outline';
    
    if (index === correctAnswer) return 'default';
    if (index === selectedAnswer && index !== correctAnswer) return 'destructive';
    return 'outline';
  };

  const getButtonIcon = (index: number) => {
    if (!showResult) return null;
    
    if (index === correctAnswer) return <Check className="h-4 w-4" />;
    if (index === selectedAnswer && index !== correctAnswer) return <X className="h-4 w-4" />;
    return null;
  };

  return (
    <Card className="w-full max-w-2xl shadow-card">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-primary">
          {question}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          {options.map((option, index) => (
            <Button
              key={index}
              variant={getButtonVariant(index)}
              className="text-left h-auto p-4 justify-start"
              onClick={() => handleAnswerClick(index)}
              disabled={showResult}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-sm">{option}</span>
                {getButtonIcon(index)}
              </div>
            </Button>
          ))}
        </div>
        
        {showResult && (
          <div className="mt-6 p-4 bg-muted rounded-lg animate-fade-in">
            <div className="flex items-start space-x-2">
              {selectedAnswer === correctAnswer ? (
                <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
              ) : (
                <X className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
              )}
              <div>
                <div className={`font-medium ${
                  selectedAnswer === correctAnswer ? 'text-success' : 'text-destructive'
                }`}>
                  {selectedAnswer === correctAnswer ? 'Correct!' : 'Incorrect'}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {explanation}
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuizQuestion;