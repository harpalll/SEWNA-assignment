// src/components/CustomRequest.jsx
import { useState, type ReactEventHandler } from "react";

export function CustomRequest() {
  const [image, setImage] = useState(null);
  const [note, setNote] = useState("");

  const handleImageChange: ReactEventHandler = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleSubmit: ReactEventHandler = (e) => {
    e.preventDefault();
    console.log({ note, image });
    alert("Request submitted!");
  };

  return (
    <div className="w-full max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-black">
        Custom Design Request
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border p-2 rounded"
        />
        {image && (
          <img
            src={image}
            alt="preview"
            className="w-full h-48 object-cover rounded mt-2"
          />
        )}
        <textarea
          placeholder="Describe your design idea..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="border p-2 rounded resize-none h-24"
        />
        <button
          type="submit"
          className="bg-[#00b67f] text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
