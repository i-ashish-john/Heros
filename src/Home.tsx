import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./theme-provider";

interface Card {
  id: number;
  name: string;
  description: string;
  image: string;
}

const Home: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const cards: Card[] = [
    {
      id: 1,
      name: "Superman",
      description: "The Man of Steel, a superhero from Krypton.",
      image: "/superman.jpeg",
    },
    {
      id: 2,
      name: "Iron Man",
      description: "Tony Stark, the genius billionaire superhero.",
      image: "/ironman.jpeg",
    },
    {
      id: 3,
      name: "Tommy Shelby",
      description: "Leader of the Peaky Blinders gang.",
      image: "/Peaky Blinders.jpeg",
    },
  ];

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <nav className={`w-full shadow-md ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <Link to="/" className="font-bold text-4xl">
            
          </Link>
          <button onClick={toggleTheme} className="p-2 rounded-full">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-2">How is your favourite?</h1>
        <p className="mb-8">Discover great heroes and stories below:</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Link key={card.id} to={`/details/${card.id}`}>
              <div
                className={`rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 ${
                  theme === "dark" ? "bg-gray-700" : "bg-white"
                }`}
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-80 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{card.name}</h2>
                  <p className="text-sm mb-4">{card.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="w-full py-6 text-center bg-gray-200 text-gray-700">
        <p>Crafted with ❤️ by Ashish</p>
      </footer>
    </div>
  );
};

export default Home;
