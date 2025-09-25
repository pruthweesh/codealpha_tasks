import { useState } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Feed from "@/components/Feed";
import Reels from "@/components/Reels";
import Search from "@/components/Search";
import Profile from "@/components/Profile";
import SavedPosts from "@/pages/SavedPosts";

const Index = () => {
  const [activeTab, setActiveTab] = useState("feed");
  const [showSavedPosts, setShowSavedPosts] = useState(false);

  const handleSavedPostsClick = () => {
    setShowSavedPosts(true);
  };

  const handleBackFromSaved = () => {
    setShowSavedPosts(false);
  };

  if (showSavedPosts) {
    return <SavedPosts onBack={handleBackFromSaved} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case "feed":
        return <Feed onSavedPostsClick={handleSavedPostsClick} />;
      case "reels":
        return <Reels />;
      case "search":
        return <Search />;
      case "activity":
        return (
          <div className="flex items-center justify-center h-64">
            <p className="text-muted-foreground">Activity feed coming soon!</p>
          </div>
        );
      case "profile":
        return <Profile />;
      default:
        return <Feed onSavedPostsClick={handleSavedPostsClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-16 md:pb-0">
        {renderContent()}
      </main>
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;