import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

interface StudyCardProps {
  front: string;
  back: string;
  term: string;
}

const StudyCard = ({ front, back, term }: StudyCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-full h-80 perspective-1000">
      <div 
        className={`relative w-full h-full duration-600 preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front of card */}
        <Card 
          className="absolute inset-0 w-full h-full backface-hidden bg-gradient-card shadow-card hover:shadow-elevated transition-shadow duration-300"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <div className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wide">
              Term
            </div>
            <div className="text-2xl font-bold text-primary mb-4">
              {term}
            </div>
            <div className="text-base text-card-foreground leading-relaxed">
              {front}
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <RotateCcw className="h-3 w-3" />
                Click to flip
              </div>
            </div>
          </div>
        </Card>

        {/* Back of card */}
        <Card 
          className="absolute inset-0 w-full h-full backface-hidden bg-secondary shadow-card hover:shadow-elevated transition-shadow duration-300"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <div className="text-sm font-medium text-secondary-foreground mb-2 uppercase tracking-wide">
              Definition
            </div>
            <div className="text-lg text-secondary-foreground leading-relaxed">
              {back}
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="text-xs text-secondary-foreground/70 flex items-center gap-1">
                <RotateCcw className="h-3 w-3" />
                Click to flip back
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StudyCard;