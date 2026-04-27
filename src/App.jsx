import React, { useState } from "react";
const data = [
  {
    title: "Product 1",
    description: "This is the description of product 1.",
    image: "https://picsum.photos/200?random=1"
  },
  {
    title: "Product 2",
    description: "This is the description of product 2.",
    image: "https://picsum.photos/200?random=2"
  },
  {
    title: "Product 3",
    description: "This is the description of product 3.",
    image: "https://picsum.photos/200?random=3"
  },
  {
    title: "Product 4",
    description: "This is the description of product 4.",
    image: "https://picsum.photos/200?random=4"
  },
  {
    title: "Product 5",
    description: "This is the description of product 5.",
    image: "https://picsum.photos/200?random=5"
  },
  {
    title: "Product 6",
    description: "This is the description of product 6.",
    image: "https://picsum.photos/200?random=6"
  },
  {
    title: "Product 7",
    description: "This is the description of product 7.",
    image: "https://picsum.photos/200?random=7"
  },
  {
    title: "Product 8",
    description: "This is the description of product 8.",
    image: "https://picsum.photos/200?random=8"
  },
  {
    title: "Product 9",
    description: "This is the description of product 9.",
    image: "https://picsum.photos/200?random=9"
  },
  {
    title: "Product 10",
    description: "This is the description of product 10.",
    image: "https://picsum.photos/200?random=10"
  },
  {
    title: "Product 11",
    description: "This is the description of product 11.",
    image: "https://picsum.photos/200?random=11"
  },
  {
    title: "Product 12",
    description: "This is the description of product 12.",
    image: "https://picsum.photos/200?random=12"
  },
  {
    title: "Product 13",
    description: "This is the description of product 13.",
    image: "https://picsum.photos/200?random=13"
  },
  {
    title: "Product 14",
    description: "This is the description of product 14.",
    image: "https://picsum.photos/200?random=14"
  },
  {
    title: "Product 15",
    description: "This is the description of product 15.",
    image: "https://picsum.photos/200?random=15"
  },
  {
    title: "Product 16",
    description: "This is the description of product 16.",
    image: "https://picsum.photos/200?random=16"
  },
  {
    title: "Product 17",
    description: "This is the description of product 17.",
    image: "https://picsum.photos/200?random=17"
  },
  {
    title: "Product 18",
    description: "This is the description of product 18.",
    image: "https://picsum.photos/200?random=18"
  },
  {
    title: "Product 19",
    description: "This is the description of product 19.",
    image: "https://picsum.photos/200?random=19"
  },
  {
    title: "Product 20",
    description: "This is the description of product 20.",
    image: "https://picsum.photos/200?random=20"
  }
];

function App() {
  const [search, setSearch] = useState("");

  const filteredImages = data.filter((img) =>
    img.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      

    
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search images"
          
          onChange={(e) => setSearch(e.target.value)}
          className="w-72 px-4 py-2 rounded-lg border border-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="w-20 rounded-lg border border-black p-2 ml-4 hover:bg-blue-500 cursor-pointer">search</button>
      </div>

      
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredImages.length > 0 ? (
          filteredImages.map((img) => (
            <div
              key={img.title}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <img
                src={img.image}
                alt={img.description}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {img.title}
                </h2>
              </div>
            </div>
          ))
        ) 
        : (
          <p className="text-center col-span-full text-gray-500">
            test
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
