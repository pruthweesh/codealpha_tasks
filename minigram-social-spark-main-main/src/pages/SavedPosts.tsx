import { ArrowLeft, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import post1 from "@/assets/post1.jpg";
import post2 from "@/assets/post2.jpg";

interface SavedPostsProps {
  onBack: () => void;
}

const SavedPosts = ({ onBack }: SavedPostsProps) => {
  const savedPosts = [
    { id: 1, image: post1, username: "travel_diaries", caption: "Beautiful sunset at the beach" },
    { id: 2, image: post2, username: "foodie_life", caption: "Delicious pasta night" },
    { id: 3, image: post1, username: "nature_lover", caption: "Mountain hiking adventure" },
    { id: 4, image: post2, username: "cafe_explorer", caption: "Perfect morning coffee" },
    { id: 5, image: post1, username: "wanderlust", caption: "Exploring new places" },
    { id: 6, image: post2, username: "chef_recipes", caption: "Homemade pizza recipe" },
  ];

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 p-4 border-b">
        <Button variant="ghost" size="icon" onClick={onBack} className="h-8 w-8">
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-xl font-semibold">Saved Posts</h1>
          <p className="text-sm text-muted-foreground">{savedPosts.length} posts saved</p>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Grid3X3 className="h-5 w-5" />
        </Button>
      </div>

      {/* Saved Posts Grid */}
      <div className="p-4">
        {savedPosts.length > 0 ? (
          <div className="grid grid-cols-3 gap-1">
            {savedPosts.map((post) => (
              <Card key={post.id} className="aspect-square p-0 overflow-hidden border-0 rounded-lg">
                <img
                  src={post.image}
                  alt={`Saved post by ${post.username}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📌</div>
            <h3 className="text-lg font-semibold mb-2">No saved posts yet</h3>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto">
              Posts you save will appear here. Tap the bookmark icon on any post to save it.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedPosts;