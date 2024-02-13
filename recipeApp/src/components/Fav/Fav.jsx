import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavContext from "../../context/favContext";

function Fav(){

  const {favList} = useContext(FavContext)

  return(
    <div className="flex flex-wrap justify-center gap-9 m-4">
      <h1>Favourites</h1>
      {favList.map((item,index)=>(
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

            <button
              type="button"
              className="w-full h-8 mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => addList(index)}
            >
              Add to fav
            </button>
          <Link to={`/recipepage/${index}`}>
              <button
                type="button"
                className="w-full h-8 mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Recipe
              </button>
            </Link>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Fav