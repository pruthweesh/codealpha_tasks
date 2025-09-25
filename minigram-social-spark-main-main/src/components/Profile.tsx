import { useState } from "react";
import { Settings, Menu, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import avatar1 from "@/assets/avatar1.jpg";
import post1 from "@/assets/post1.jpg";
import post2 from "@/assets/post2.jpg";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");

  const highlights = [
    { id: 1, title: "Travel", image: post1, stories: 5 },
    { id: 2, title: "Food", image: post2, stories: 8 },
    { id: 3, title: "Coffee", image: post1, stories: 3 },
    { id: 4, title: "Life", image: post2, stories: 12 },
  ];

  const posts = [
    { id: 1, image: post1, likes: 1234, comments: 45 },
    { id: 2, image: post2, likes: 892, comments: 23 },
    { id: 3, image: post1, likes: 567, comments: 12 },
    { id: 4, image: post2, likes: 345, comments: 8 },
    { id: 5, image: post1, likes: 234, comments: 15 },
    { id: 6, image: post2, likes: 123, comments: 6 },
  ];

  const saved = [
    { id: 1, image: post1 },
    { id: 2, image: post2 },
  ];

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Profile Header */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">your_username</h2>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Plus className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={avatar1} alt="Profile" />
            <AvatarFallback>YU</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center gap-6 mb-3">
              <div className="text-center">
                <div className="font-semibold text-lg">124</div>
                <div className="text-xs text-muted-foreground">posts</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-lg">2,543</div>
                <div className="text-xs text-muted-foreground">followers</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-lg">312</div>
                <div className="text-xs text-muted-foreground">following</div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" className="flex-1">
                Edit profile
              </Button>
              <Button variant="secondary" size="sm" className="flex-1">
                Share profile
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-1 mb-4">
          <div className="font-semibold">Your Name</div>
          <div className="text-sm">
            ✨ Living life one coffee at a time<br/>
            📍 New York City<br/>
            🔗 yourwebsite.com
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {highlights.map((highlight) => (
              <div key={highlight.id} className="flex flex-col items-center min-w-[70px]">
                <div className="relative mb-1">
                  <div className="w-16 h-16 rounded-full bg-muted overflow-hidden border-2 border-muted">
                    <img
                      src={highlight.image}
                      alt={highlight.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <span className="text-xs text-center max-w-[70px] truncate">
                  {highlight.title}
                </span>
              </div>
            ))}
            
            {/* Add new highlight */}
            <div className="flex flex-col items-center min-w-[70px]">
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-muted flex items-center justify-center mb-1">
                <Plus className="h-6 w-6 text-muted-foreground" />
              </div>
              <span className="text-xs text-center text-muted-foreground">
                New
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 rounded-none border-b bg-transparent">
          <TabsTrigger value="posts" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground">
            Posts
          </TabsTrigger>
          <TabsTrigger value="reels" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground">
            Reels
          </TabsTrigger>
          <TabsTrigger value="saved" className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground">
            Saved
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="posts" className="p-0 mt-0">
          <div className="grid grid-cols-3 gap-1">
            {posts.map((post) => (
              <Card key={post.id} className="aspect-square p-0 overflow-hidden border-0 rounded-none">
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full h-full object-cover"
                />
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="reels" className="p-4 mt-0">
          <div className="text-center text-muted-foreground py-8">
            <div className="text-4xl mb-4">🎬</div>
            <p>No reels yet</p>
            <p className="text-sm">Your reels will appear here</p>
          </div>
        </TabsContent>
        
        <TabsContent value="saved" className="p-0 mt-0">
          <div className="grid grid-cols-3 gap-1">
            {saved.map((item) => (
              <Card key={item.id} className="aspect-square p-0 overflow-hidden border-0 rounded-none">
                <img
                  src={item.image}
                  alt="Saved post"
                  className="w-full h-full object-cover"
                />
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;