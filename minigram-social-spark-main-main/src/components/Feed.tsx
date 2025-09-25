import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import StoryRing from "./StoryRing";
import Post from "./Post";
import StoryViewer from "./StoryViewer";
import post1 from "@/assets/post1.jpg";
import post2 from "@/assets/post2.jpg";
import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";

interface FeedProps {
  onSavedPostsClick?: () => void;
}

const Feed = ({ onSavedPostsClick }: FeedProps) => {
  const [storyViewerOpen, setStoryViewerOpen] = useState(false);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(0);
  
  const stories = [
    { id: 1, username: "your_story", avatar: avatar1, isOwn: true },
    { id: 2, username: "alex_coffee", avatar: avatar1 },
    { id: 3, username: "foodie_life", avatar: avatar2 },
    { id: 4, username: "travel_tales", avatar: avatar1 },
    { id: 5, username: "art_daily", avatar: avatar2 },
  ];

  const posts = [
    {
      id: 1,
      username: "alex_coffee",
      avatar: avatar1,
      image: post1,
      caption: "Perfect start to the day ☕✨ #coffee #morningvibes",
      likes: 1234,
      timeAgo: "2 hours ago",
    },
    {
      id: 2,
      username: "foodie_life",
      avatar: avatar2,
      image: post2,
      caption: "Healthy eating never looked so good! 🥗💚 #healthyfood #nutrition",
      likes: 892,
      timeAgo: "4 hours ago",
    },
    {
      id: 3,
      username: "travel_tales",
      avatar: avatar1,
      image: post1,
      caption: "Adventure awaits! 🌍✈️ #travel #wanderlust #adventure",
      likes: 2156,
      timeAgo: "6 hours ago",
    },
    {
      id: 4,
      username: "art_daily",
      avatar: avatar2,
      image: post2,
      caption: "Creating magic with colors 🎨✨ #art #creative #painting",
      likes: 687,
      timeAgo: "8 hours ago",
    },
    {
      id: 5,
      username: "fitness_life",
      avatar: avatar1,
      image: post1,
      caption: "No pain, no gain! 💪🔥 #fitness #gym #motivation",
      likes: 1543,
      timeAgo: "10 hours ago",
    },
    {
      id: 6,
      username: "music_lover",
      avatar: avatar2,
      image: post2,
      caption: "Lost in the rhythm 🎵🎧 #music #vibes #goodtimes",
      likes: 934,
      timeAgo: "12 hours ago",
    },
  ];

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Stories Section */}
      <div className="p-4 border-b">
        <ScrollArea className="w-full">
          <div className="flex gap-4 pb-2">
            {stories.map((story, index) => (
              <StoryRing
                key={story.id}
                username={story.username}
                avatar={story.avatar}
                isOwn={story.isOwn}
                onClick={() => {
                  setSelectedStoryIndex(index);
                  setStoryViewerOpen(true);
                }}
              />
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Posts Section */}
      <div className="space-y-6 p-4">
        {posts.map((post) => (
          <Post
            key={post.id}
            username={post.username}
            avatar={post.avatar}
            image={post.image}
            caption={post.caption}
            likes={post.likes}
            timeAgo={post.timeAgo}
            onSaveClick={onSavedPostsClick}
          />
        ))}
      </div>

      {/* Story Viewer */}
      <StoryViewer
        isOpen={storyViewerOpen}
        onClose={() => setStoryViewerOpen(false)}
        initialStoryIndex={selectedStoryIndex}
      />
    </div>
  );
};

export default Feed;