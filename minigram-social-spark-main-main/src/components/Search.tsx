import { useState } from "react";
import { Search as SearchIcon, Hash, MapPin, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";
import post1 from "@/assets/post1.jpg";
import post2 from "@/assets/post2.jpg";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = {
    accounts: [
      { id: 1, username: "alex_coffee", name: "Alex Johnson", avatar: avatar1, followers: "2.3k" },
      { id: 2, username: "foodie_life", name: "Sarah Smith", avatar: avatar2, followers: "1.8k" },
      { id: 3, username: "travel_tales", name: "Mike Chen", avatar: avatar1, followers: "5.2k" },
    ],
    hashtags: [
      { id: 1, tag: "coffee", posts: "1.2M posts" },
      { id: 2, tag: "food", posts: "890K posts" },
      { id: 3, tag: "travel", posts: "2.1M posts" },
    ],
    places: [
      { id: 1, name: "Coffee Shop Downtown", posts: "245 posts" },
      { id: 2, name: "Central Park", posts: "18.3K posts" },
    ],
    posts: [
      { id: 1, image: post1, likes: 1234 },
      { id: 2, image: post2, likes: 892 },
    ]
  };

  const filteredResults = {
    accounts: searchResults.accounts.filter(account => 
      account.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      account.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    hashtags: searchResults.hashtags.filter(hashtag => 
      hashtag.tag.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    places: searchResults.places.filter(place => 
      place.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    posts: searchResults.posts
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      {/* Search Input */}
      <div className="relative mb-6">
        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-muted/30 border-0 focus-visible:ring-1"
        />
      </div>

      {searchQuery ? (
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="accounts">Accounts</TabsTrigger>
            <TabsTrigger value="hashtags">Tags</TabsTrigger>
            <TabsTrigger value="places">Places</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4 mt-4">
            {/* Accounts */}
            {filteredResults.accounts.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-semibold text-sm text-muted-foreground">ACCOUNTS</h3>
                {filteredResults.accounts.map((account) => (
                  <div key={account.id} className="flex items-center justify-between p-2">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={account.avatar} alt={account.username} />
                        <AvatarFallback>{account.username[0]?.toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-sm">{account.username}</p>
                        <p className="text-xs text-muted-foreground">{account.name} • {account.followers} followers</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Follow</Button>
                  </div>
                ))}
              </div>
            )}

            {/* Hashtags */}
            {filteredResults.hashtags.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-semibold text-sm text-muted-foreground">HASHTAGS</h3>
                {filteredResults.hashtags.map((hashtag) => (
                  <div key={hashtag.id} className="flex items-center gap-3 p-2">
                    <div className="p-2 bg-muted rounded-full">
                      <Hash className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">#{hashtag.tag}</p>
                      <p className="text-xs text-muted-foreground">{hashtag.posts}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="accounts" className="space-y-2 mt-4">
            {filteredResults.accounts.map((account) => (
              <div key={account.id} className="flex items-center justify-between p-2">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={account.avatar} alt={account.username} />
                    <AvatarFallback>{account.username[0]?.toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{account.username}</p>
                    <p className="text-xs text-muted-foreground">{account.name} • {account.followers} followers</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Follow</Button>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="hashtags" className="space-y-2 mt-4">
            {filteredResults.hashtags.map((hashtag) => (
              <div key={hashtag.id} className="flex items-center gap-3 p-2">
                <div className="p-2 bg-muted rounded-full">
                  <Hash className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-sm">#{hashtag.tag}</p>
                  <p className="text-xs text-muted-foreground">{hashtag.posts}</p>
                </div>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="places" className="space-y-2 mt-4">
            {filteredResults.places.map((place) => (
              <div key={place.id} className="flex items-center gap-3 p-2">
                <div className="p-2 bg-muted rounded-full">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{place.name}</p>
                  <p className="text-xs text-muted-foreground">{place.posts}</p>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      ) : (
        <div className="space-y-6">
          {/* Recent Searches */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Recent</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={avatar1} alt="alex_coffee" />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">alex_coffee</span>
                </div>
                <Button variant="ghost" size="sm" className="text-xs">Clear</Button>
              </div>
            </div>
          </div>

          {/* Discover Grid */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Discover</h3>
            <div className="grid grid-cols-3 gap-1">
              {searchResults.posts.map((post) => (
                <Card key={post.id} className="aspect-square p-0 overflow-hidden border-0">
                  <img src={post.image} alt="Discover post" className="w-full h-full object-cover" />
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;