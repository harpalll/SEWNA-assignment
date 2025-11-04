import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { openDB } from "idb";
import Logo from "./Logo";

interface Design {
  id: number;
  title: string;
  imageBlob: Blob;
}

const dbPromise = openDB("designs-db", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("designs")) {
      db.createObjectStore("designs", { keyPath: "id" });
    }
  },
});

const DesignUpload = () => {
  const [title, setTitle] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0] ?? null;
    setFile(selected);

    if (selected) {
      setPreview(URL.createObjectURL(selected));
    } else {
      setPreview(null);
    }
  };

  const handleUpload = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file || !title.trim()) return;

    const newDesign: Design = {
      id: Date.now(),
      title: title.trim(),
      imageBlob: file,
    };

    const db = await dbPromise;
    await db.put("designs", newDesign);

    setTitle("");
    setFile(null);
    setPreview(null);

    navigate("/portfolio");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 p-4">
      <header className="flex h-[10vh] justify-between items-center fixed top-0 left-5 right-0 z-20 px-4 sm:px-6 md:px-8">
        <Link to={"/"}>
          <Logo />
        </Link>
        <Link to={"/portfolio"}>
          <button className="inline-flex items-center justify-center gap-2 font-medium rounded-full bg-accent text-primary hover:scale-105 transform transition-all duration-300 px-6 py-3 text-lg shadow-md hover:shadow-xl">
            View Your Portfolio
          </button>
        </Link>
      </header>

      <div className="mx-auto flex w-full max-w-[600px] flex-col items-stretch gap-6 rounded-lg bg-card p-8 shadow-lg border border-accent">
        <h1 className="text-3xl font-bold text-accent font-poppins">
          Upload Your Design
        </h1>

        <form onSubmit={handleUpload} className="flex flex-col gap-6 w-full">
          <input
            type="text"
            placeholder="Design Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex h-15 w-full rounded-full bg-gray-100 p-6 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-xl"
          />

          <label
            htmlFor="file-upload"
            className="relative flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-accent transition-all duration-300 hover:scale-[1.05] ease-in-out"
          >
            <div className="flex flex-col items-center justify-center text-center px-4">
              <svg
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6h.1a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="text-gray-700 font-medium">
                Drop your image here or{" "}
                <span className="text-accent font-semibold">
                  click to browse
                </span>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Supports JPG, PNG, WebP up to 10MB
              </p>
            </div>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </label>

          {preview && (
            <div className="mb-4 mt-4">
              <img
                src={preview}
                alt="Preview"
                className="w-full rounded-md border-2 border-gray-200"
              />
            </div>
          )}

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-ring rounded-full bg-accent text-primary hover:scale-110 h-12 px-8 py-4 w-full text-xl transition-all ease-in"
            disabled={!title || !file}
          >
            Upload Design
          </button>
        </form>
      </div>
    </div>
  );
};

export default DesignUpload;
