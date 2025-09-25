import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface StoryRingProps {
  avatar: string;
  username: string;
  hasStory?: boolean;
  isOwn?: boolean;
  onClick?: () => void;
}

const StoryRing = ({ avatar, username, hasStory = true, isOwn = false, onClick }: StoryRingProps) => {
  return (
    <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={onClick}>
      <div className={`p-0.5 rounded-full ${hasStory ? 'bg-gradient-story' : ''}`}>
        <div className="p-0.5 bg-background rounded-full">
          <Avatar className="h-16 w-16">
            <AvatarImage src={avatar} alt={username} />
            <AvatarFallback>{username[0]?.toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <span className="text-xs text-center max-w-[70px] truncate">
        {isOwn ? "Your story" : username}
      </span>
    </div>
  );
};

export default StoryRing;