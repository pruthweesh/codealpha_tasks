import { Play, Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import post1 from "@/assets/post1.jpg";
import post2 from "@/assets/post2.jpg";
import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";

const Reels = () => {
  const reels = [
    {
      id: 1,
      username: "alex_coffee",
      avatar: avatar1,
      thumbnail: post1,
      caption: "Coffee art tutorial ☕✨",
      likes: 5432,
      views: "12.5K",
    },
    {
      id: 2,
      username: "foodie_life",
      avatar: avatar2,
      thumbnail: post2,
      caption: "Quick healthy bowl recipe 🥗",
      likes: 3821,
      views: "8.2K",
    },
  ];

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      <div className="space-y-6">
        {reels.map((reel) => (
          <Card key={reel.id} className="relative overflow-hidden aspect-[9/16] max-h-[600px] shadow-post border-0">
            {/* Video Thumbnail */}
            <div className="relative w-full h-full">
              <img
                src={reel.thumbnail}
                alt="Reel thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button variant="ghost" size="icon" className="h-16 w-16 rounded-full bg-black/50 hover:bg-black/70">
                  <Play className="h-8 w-8 text-white fill-white" />
                </Button>
              </div>

              {/* User Info */}
              <div className="absolute bottom-4 left-4 right-16 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Avatar className="h-8 w-8 border-2 border-white">
                    <AvatarImage src={reel.avatar} alt={reel.username} />
                    <AvatarFallback>{reel.username[0]?.toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold text-sm">{reel.username}</span>
                </div>
                <p className="text-sm">{reel.caption}</p>
                <p className="text-xs text-white/80 mt-1">{reel.views} views</p>
              </div>

              {/* Action Buttons */}
              <div className="absolute bottom-4 right-4 flex flex-col gap-4">
                <div className="flex flex-col items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full text-white hover:bg-white/20">
                    <Heart className="h-6 w-6" />
                  </Button>
                  <span className="text-xs text-white">{reel.likes}</span>
                </div>
                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full text-white hover:bg-white/20">
                  <MessageCircle className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full text-white hover:bg-white/20">
                  <Send className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full text-white hover:bg-white/20">
                  <Bookmark className="h-6 w-6" />
                </Button>
                <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full text-white hover:bg-white/20">
                  <MoreHorizontal className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reels;