import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Heart, Send, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import post1 from "@/assets/post1.jpg";
import post2 from "@/assets/post2.jpg";
import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";

interface StoryViewerProps {
  isOpen: boolean;
  onClose: () => void;
  initialStoryIndex?: number;
}

const StoryViewer = ({ isOpen, onClose, initialStoryIndex = 0 }: StoryViewerProps) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(initialStoryIndex);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const stories = [
    {
      id: 1,
      username: "alex_coffee",
      avatar: avatar1,
      slides: [
        { id: 1, type: "image", content: post1, timestamp: "2h" },
        { id: 2, type: "image", content: post2, timestamp: "1h" },
      ]
    },
    {
      id: 2,
      username: "foodie_life",
      avatar: avatar2,
      slides: [
        { id: 3, type: "image", content: post2, timestamp: "3h" },
      ]
    }
  ];

  const currentStory = stories[currentStoryIndex];
  const currentSlide = currentStory?.slides[currentSlideIndex];

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Move to next slide or story
          if (currentSlideIndex < currentStory.slides.length - 1) {
            setCurrentSlideIndex(prev => prev + 1);
          } else if (currentStoryIndex < stories.length - 1) {
            setCurrentStoryIndex(prev => prev + 1);
            setCurrentSlideIndex(0);
          } else {
            onClose();
          }
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [isOpen, currentStoryIndex, currentSlideIndex, onClose]);

  const handlePrevious = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    } else if (currentStoryIndex > 0) {
      setCurrentStoryIndex(prev => prev - 1);
      setCurrentSlideIndex(stories[currentStoryIndex - 1].slides.length - 1);
    }
    setProgress(0);
  };

  const handleNext = () => {
    if (currentSlideIndex < currentStory.slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    } else if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(prev => prev + 1);
      setCurrentSlideIndex(0);
    } else {
      onClose();
    }
    setProgress(0);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      console.log(`Sending message to ${currentStory.username}: ${message}`);
      setMessage("");
    }
  };

  if (!isOpen || !currentStory) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Story Progress Bars */}
      <div className="absolute top-4 left-4 right-4 z-10">
        <div className="flex gap-1">
          {currentStory.slides.map((_, index) => (
            <div key={index} className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden">
              <Progress 
                value={
                  index < currentSlideIndex ? 100 : 
                  index === currentSlideIndex ? progress : 0
                } 
                className="h-full bg-white"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Story Header */}
      <div className="absolute top-8 left-4 right-4 z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8 border-2 border-white">
            <AvatarImage src={currentStory.avatar} alt={currentStory.username} />
            <AvatarFallback>{currentStory.username[0]?.toUpperCase()}</AvatarFallback>
          </Avatar>
          <span className="text-white font-semibold text-sm">{currentStory.username}</span>
          <span className="text-white/70 text-xs">{currentSlide?.timestamp}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-white">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Story Content */}
      <div className="relative w-full h-full flex items-center justify-center">
        {currentSlide?.type === "image" && (
          <img
            src={currentSlide.content}
            alt="Story"
            className="w-full h-full object-cover"
          />
        )}

        {/* Navigation Areas */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-0 w-1/3 h-full z-10"
          disabled={currentStoryIndex === 0 && currentSlideIndex === 0}
        />
        <button
          onClick={handleNext}
          className="absolute right-0 top-0 w-1/3 h-full z-10"
        />
      </div>

      {/* Story Footer */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <div className="flex items-center gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={`Message ${currentStory.username}...`}
            className="flex-1 bg-transparent border-white/20 text-white placeholder:text-white/70"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <Button variant="ghost" size="icon" className="text-white" onClick={handleSendMessage}>
            <Send className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Navigation Arrows (visible on hover) */}
      {currentStoryIndex > 0 && (
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/20 text-white opacity-0 hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}
      
      {(currentStoryIndex < stories.length - 1 || currentSlideIndex < currentStory.slides.length - 1) && (
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/20 text-white opacity-0 hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default StoryViewer;