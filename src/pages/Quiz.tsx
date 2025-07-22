import { useState } from 'react';
import Navigation from '@/components/Navigation';
import QuizQuestion from '@/components/QuizQuestion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { quizQuestions } from '@/data/quizQuestions';
import { Brain, RotateCcw, Trophy, CheckCircle } from 'lucide-react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleAnswer = (correct: boolean) => {
    if (hasAnswered) return;
    
    const newAnswers = [...answers, correct];
    setAnswers(newAnswers);
    setHasAnswered(true);
    
    if (correct) {
      setScore(score + 1);
    }

    // Auto-advance after 2 seconds
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setHasAnswered(false);
      } else {
        setIsComplete(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnswers([]);
    setIsComplete(false);
    setHasAnswered(false);
  };

  const getScorePercentage = () => Math.round((score / quizQuestions.length) * 100);

  const getGradeMessage = () => {
    const percentage = getScorePercentage();
    if (percentage >= 90) return "Excellent! You've mastered SNA concepts! 🏆";
    if (percentage >= 80) return "Great work! You have a solid understanding! 🎉";
    if (percentage >= 70) return "Good job! Keep studying to improve further! 👍";
    if (percentage >= 60) return "Not bad! Review the concepts and try again! 📚";
    return "Keep studying! Practice makes perfect! 💪";
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted">
        <Navigation />
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="shadow-elevated">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <Trophy className="h-16 w-16 text-secondary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary">
                  Quiz Complete!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-6xl font-bold text-primary">
                  {getScorePercentage()}%
                </div>
                
                <div className="text-lg text-muted-foreground">
                  You scored {score} out of {quizQuestions.length} questions correctly
                </div>

                <div className="text-lg font-medium text-card-foreground">
                  {getGradeMessage()}
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-success/10 p-4 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <CheckCircle className="h-6 w-6 text-success" />
                    </div>
                    <div className="font-bold text-success text-2xl">{score}</div>
                    <div className="text-success">Correct</div>
                  </div>
                  <div className="bg-destructive/10 p-4 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <div className="h-6 w-6 bg-destructive rounded-full flex items-center justify-center">
                        <span className="text-destructive-foreground text-sm font-bold">✕</span>
                      </div>
                    </div>
                    <div className="font-bold text-destructive text-2xl">{quizQuestions.length - score}</div>
                    <div className="text-destructive">Incorrect</div>
                  </div>
                </div>

                <Button
                  onClick={resetQuiz}
                  className="w-full"
                  size="lg"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Take Quiz Again
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Brain className="h-10 w-10 text-primary mr-3" />
            <h1 className="text-4xl font-bold text-primary">SNA Quiz</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Test your knowledge of Social Network Analysis concepts
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
              <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
              <span>Score: {score}/{answers.length}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="animate-fade-in">
            <QuizQuestion
              key={quizQuestions[currentQuestion].id}
              question={quizQuestions[currentQuestion].question}
              options={quizQuestions[currentQuestion].options}
              correctAnswer={quizQuestions[currentQuestion].correctAnswer}
              explanation={quizQuestions[currentQuestion].explanation}
              onAnswer={handleAnswer}
            />
          </div>

          {/* Navigation hint */}
          {hasAnswered && (
            <div className="text-center mt-6 text-sm text-muted-foreground animate-fade-in">
              {currentQuestion < quizQuestions.length - 1 
                ? "Moving to next question..." 
                : "Calculating final score..."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;