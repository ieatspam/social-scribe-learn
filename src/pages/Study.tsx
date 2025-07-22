import { useState } from 'react';
import Navigation from '@/components/Navigation';
import StudyCard from '@/components/StudyCard';
import { Button } from '@/components/ui/button';
import { studyCards } from '@/data/studyCards';
import { ChevronLeft, ChevronRight, Shuffle, BookOpen } from 'lucide-react';

const Study = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffled, setShuffled] = useState(false);
  const [cardOrder, setCardOrder] = useState(studyCards);

  const shuffleCards = () => {
    const shuffledCards = [...studyCards].sort(() => Math.random() - 0.5);
    setCardOrder(shuffledCards);
    setCurrentIndex(0);
    setShuffled(true);
  };

  const resetOrder = () => {
    setCardOrder(studyCards);
    setCurrentIndex(0);
    setShuffled(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cardOrder.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + cardOrder.length) % cardOrder.length);
  };

  const currentCard = cardOrder[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-10 w-10 text-primary mr-3" />
            <h1 className="text-4xl font-bold text-primary">Study Cards</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master Social Network Analysis concepts with interactive flashcards. Click on any card to flip it and see the definition.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Controls */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-sm text-muted-foreground">
              Card {currentIndex + 1} of {cardOrder.length}
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={shuffled ? resetOrder : shuffleCards}
              >
                <Shuffle className="h-4 w-4 mr-2" />
                {shuffled ? 'Reset Order' : 'Shuffle Cards'}
              </Button>
            </div>
          </div>

          {/* Study Card */}
          <div className="mb-8 animate-fade-in">
            <StudyCard
              key={currentCard.id}
              term={currentCard.term}
              front={currentCard.front}
              back={currentCard.back}
            />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={goToPrevious}
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </Button>

            <div className="flex space-x-2">
              {cardOrder.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-primary scale-125'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              onClick={goToNext}
              className="flex items-center space-x-2"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Progress */}
          <div className="mt-8">
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / cardOrder.length) * 100}%` }}
              />
            </div>
            <div className="text-center text-sm text-muted-foreground mt-2">
              Progress: {Math.round(((currentIndex + 1) / cardOrder.length) * 100)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Study;