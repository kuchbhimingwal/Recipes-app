import React from "react";
import { useLoaderData } from "react-router-dom";

function Home(){
  const prop= useLoaderData()

  return(
    <div className="flex flex-wrap justify-center gap-9 m-4">
      {prop.map((item) => (
        <div className="w-[300px] rounded-md border flex flex-wrap">
        <img
          src={item.imgTag}
          alt={item.name}
          className="h-[200px] w-full rounded-md object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold">{item.name}</h1>
          <p className="mt-3 text-sm text-gray-600">
            {item.description}
          </p>

          <a href={item.youtubeLink} target="_blank" rel="noopener noreferrer">
            <button
              type="button"
              className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Watch Video
            </button>
          </a>
        </div>
      </div>
      
      ))}
  </div>
  )
}

export default Home