import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTheme } from "./theme-provider";
import {characters}  from "./data";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const characterId = parseInt(id || "0", 10); // Default to 0 if id is undefined
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<string>("about");
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);

  const character = characters.find((char) => char.id === characterId);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    // Reset active tab when character changes
    setActiveTab("about");
    setSelectedGalleryImage(null);
    setIsImageLoaded(false); // Reset image loaded state
  }, [characterId]);

  if (!character) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}>
        <div className={`max-w-2xl mx-auto p-8 rounded-lg shadow-lg ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}>
          <h1 className="text-3xl font-bold mb-6">Character Not Found</h1>
          <p className="mb-6">Sorry, we couldn't find the character you're looking for.</p>
          <Link to="/" className={`inline-block px-6 py-3 rounded-lg font-medium transition-colors ${
            theme === "dark" 
              ? "bg-blue-600 hover:bg-blue-700 text-white" 
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Background</h3>
              <p className="whitespace-pre-line">{character.backstory}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Quote</h3>
              <blockquote className={`italic p-4 border-l-4 ${
                theme === "dark" ? "border-blue-400 bg-gray-700" : "border-blue-500 bg-gray-100"
              }`}>
                "{character.quote}"
              </blockquote>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">First Appearance</h3>
              <p>{character.firstAppearance}</p>
            </div>
          </div>
        );
      case "powers":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Powers & Abilities</h3>
              <ul className="list-disc pl-5 space-y-2">
                {character.powers.map((power, index) => (
                  <li key={index}>{power}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Weaknesses</h3>
              <ul className="list-disc pl-5 space-y-2">
                {character.weaknesses.map((weakness, index) => (
                  <li key={index}>{weakness}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      case "relationships":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Allies</h3>
              <ul className="list-disc pl-5 space-y-2">
                {character.allies.map((ally, index) => (
                  <li key={index}>{ally}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Enemies</h3>
              <ul className="list-disc pl-5 space-y-2">
                {character.enemies.map((enemy, index) => (
                  <li key={index}>{enemy}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      case "recent":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-2">Recent Events</h3>
            <p className="whitespace-pre-line">{character.recentEvents}</p>
          </div>
        );
      case "gallery":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-2">Image Gallery</h3>
            {selectedGalleryImage ? (
              <div className="relative">
                <button 
                  onClick={() => setSelectedGalleryImage(null)}
                  className="absolute top-4 right-4 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-100 transition-all"
                  aria-label="Close image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img 
                  src={selectedGalleryImage} 
                  alt={`${character.name} gallery image`} 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            ) : character.gallery.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {character.gallery.map((image, index) => (
                  <div 
                    key={index} 
                    className="relative overflow-hidden rounded-lg shadow-md h-64 cursor-pointer transition-transform hover:scale-105"
                    onClick={() => setSelectedGalleryImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`${character.name} gallery image ${index + 1}`} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <p className="font-medium">Click to enlarge</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No gallery images available for this character.</p>
            )}
          </div>
        );
      default:
        return <div>Select a tab to see more information</div>;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
    }`}>
      <nav className={`w-full shadow-md ${theme === "dark" ? "bg-gray-800" : "bg-white"} sticky top-0 z-50`}>
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-xl">
            Home
          </Link>
          <h1 className="text-2xl font-bold">{character.name}</h1>
          <div className="w-20"></div> {/* Spacer for alignment */}
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className={`relative rounded-lg overflow-hidden shadow-xl mb-8 ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          }`}>
            <div className="relative h-96 w-full bg-gradient-to-r from-blue-500 to-purple-600">
              {!isImageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <img
                src={character.image}
                alt={character.name}
                className={`w-full h-full object-cover ${isImageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                onLoad={() => setIsImageLoaded(true)}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/1200x600?text=Character+Image';
                  setIsImageLoaded(true);
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h1 className="text-5xl font-bold mb-2">{character.name}</h1>
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${
                  character.role === "Hero" 
                    ? "bg-green-500" 
                    : character.role === "Villain" 
                    ? "bg-red-500" 
                    : "bg-yellow-500"
                }`}>
                  {character.role}
                </div>
                <p className="text-lg max-w-2xl">{character.bio}</p>
              </div>
            </div>
          </div>

          {/* Content Tabs */}
          <div className={`rounded-lg shadow-lg overflow-hidden ${
            theme === "dark" ? "bg-gray-800" : "bg-white"
          }`}>
            <div className={`sticky top-16 z-40 flex border-b ${
              theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            }`}>
              <div className="flex overflow-x-auto scrollbar-hide">
                {["about", "powers", "relationships", "recent", "gallery"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                      activeTab === tab 
                        ? theme === "dark" 
                          ? "border-b-2 border-blue-400 text-blue-400" 
                          : "border-b-2 border-blue-500 text-blue-500"
                        : theme === "dark" ? "text-gray-400 hover:text-gray-300" : "text-gray-600 hover:text-gray-800"
                    }`}
                    aria-selected={activeTab === tab}
                    role="tab"
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-6">
              {renderTabContent()}
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8 text-center">
            <Link 
              to="/" 
              className={`inline-block px-6 py-3 rounded-lg font-medium transition-colors ${
                theme === "dark" 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <footer className={`w-full py-6 text-center ${
        theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-gray-200 text-gray-700"
      }`}>
        <p>Crafted with ❤️ by Ashish</p>
      </footer>
    </div>
  );
};

export default Details;