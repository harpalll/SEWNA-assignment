import { useEffect, useState } from "react";
import { openDB } from "idb";
import { Link } from "react-router-dom";
import Logo from "./Logo";

interface Design {
  id: number;
  title: string;
  image: string;
}

const dbPromise = openDB("designs-db", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("designs")) {
      db.createObjectStore("designs", { keyPath: "id" });
    }
  },
});

const Portfolio = () => {
  const [designs, setDesigns] = useState<Design[]>([]);

  useEffect(() => {
    const fetchDesigns = async () => {
      const db = await dbPromise;
      const allDesigns = await db.getAll("designs");
      setDesigns(
        allDesigns.map((d: any) => ({
          ...d,
          image: URL.createObjectURL(d.imageBlob),
        }))
      );
    };
    fetchDesigns();
  }, []);

  return (
    <div className="relative">
      {/* Fixed Header */}
      <header className="flex h-[10vh] justify-between items-center fixed top-0 left-5 right-0 z-20 px-4 sm:px-6 md:px-8">
        <Link to={"/"}>
          <Logo />
        </Link>
        <Link to={"/designUpload"}>
          <button className="inline-flex items-center justify-center gap-2 font-medium rounded-full bg-accent text-primary hover:scale-105 transform transition-all duration-300 px-6 py-3 text-lg shadow-md hover:shadow-xl">
            Upload New Design
          </button>
        </Link>
      </header>

      {/* Main content */}
      <main className="p-6 pt-[12vh] min-h-screen bg-gray-50">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-900">My Portfolio</h1>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
          {designs.map((d) => (
            <div
              key={d.id}
              className="mb-6 break-inside-avoid rounded-xl overflow-hidden shadow-lg relative group bg-white"
            >
              {/* Image */}
              <img
                src={d.image}
                alt={d.title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <p className="p-4 text-white text-xl font-bold">{d.title}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
