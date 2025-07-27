import { useMemo } from "react";
import { Card, CardContent } from "./ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

// Import regular card images
import cardpic from "@/assets/card.png";
import cardback from "@/assets/Cardback.png";
// Import white card images
import whiteCardPic from "@/assets/whitecard.png";
import whiteCardBack from "@/assets/whitecardback.png";

interface DotProps {
  delay: number;
}

const Dot = ({ delay }: DotProps) => {
  return (
    <div
      className={`w-2 h-2 rounded-full animate-dot-pulse`}
      style={{
        animationDelay: `${delay}ms`,
      }}
    />
  );
};

const DottedFrame = () => {
  const { theme } = useTheme();
  
  // Determine which card images to use based on the current theme
  const frontCardImage = theme === 'dark' ? whiteCardPic : cardpic;
  const backCardImage = theme === 'dark' ? whiteCardBack : cardback;
  const rows = 12;
  const cols = 12;

  // Generate dots for L-shapes
  const generateDots = (isTopRight: boolean) => {
    const dots = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const isInLShape = isTopRight
          ? row < 3 || col > cols - 4 // Top-right reverse L
          : row > rows - 4 || col < 3; // Bottom-left L

        if (isInLShape) {
          dots.push({
            id: `${isTopRight ? "tr" : "bl"}-${row}-${col}`,
            delay: Math.floor(Math.random() * 2000), // random delay
          });
        }
      }
    }
    return dots;
  };

  const bottomLeftDots = useMemo(() => generateDots(false), []);
  const topRightDots = useMemo(() => generateDots(true), []);
  const gridSize = 12;

  return (
    // <div className="py-section bg-background">
    <div className="relative py-section bg-background overflow-hidden">
      {/* Bottom Left L-shaped frame */}
      <div className="hidden md:block absolute bottom-0 left-0 p-8">
        <div className="grid grid-cols-12 gap-2">
          {Array.from({ length: gridSize * gridSize }, (_, index) => {
            const row = Math.floor(index / gridSize);
            const col = index % gridSize;
            const isInLShape = row > 7 || col < 3;
            const dotData = bottomLeftDots.find(
              (dot) => dot.id === `bl-${row}-${col}`
            );

            return (
              <div key={`bl-${index}`} className="w-2 h-2">
                {isInLShape && dotData ? <Dot delay={dotData.delay} /> : null}
              </div>
            );
          })}
        </div>
      </div>

      {/* Top Right reverse L-shaped frame */}
      <div className="hidden md:block absolute top-0 right-0 px-8 pt-20">
        <div className="grid grid-cols-12 gap-2">
          {Array.from({ length: gridSize * gridSize }, (_, index) => {
            const row = Math.floor(index / gridSize);
            const col = index % gridSize;
            const isInLShape = row < 3 || col > 8;
            const dotData = topRightDots.find(
              (dot) => dot.id === `tr-${row}-${col}`
            );

            return (
              <div key={`tr-${index}`} className="w-2 h-2">
                {isInLShape && dotData ? <Dot delay={dotData.delay} /> : null}
              </div>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="z-10 py-8 px-8 md:px-28 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Text content */}
          <div className="md:space-y-8 space-y-4 z-10 text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground leading-tight drop-shadow-lg">
              Empowering Your Vision with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient">
                Custom Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl font-medium">
              From web and mobile apps to full-scale software systems,{" "}
              <b>Warq Technology</b> helps you launch faster and smarter with
              reliable tech solutions.
            </p>
            <p>Your Tech Partner for Scalable Growth</p>
            <Button
              size="lg"
              className="mt-6 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-accent hover:to-primary text-xl px-10 py-5 rounded-xl shadow-elegant transition-all duration-300"
            >
              See Our Work
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </div>
          {/* Right side - Business Card */}
          <div className="flip-container flex justify-center md:justify-start w-full">
            <div className="flip-card w-[280px] h-[180px] md:w-[500px] md:h-[300px]">
              <div className="flip-card-front">
                <img
                  src={frontCardImage}
                  className="w-full h-full object-cover rounded-lg"
                  alt="Front of Card"
                />
              </div>
              <div className="flip-card-back">
                <img
                  src={backCardImage}
                  className="w-full h-full object-cover rounded-lg"
                  alt="Back of Card"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DottedFrame;
