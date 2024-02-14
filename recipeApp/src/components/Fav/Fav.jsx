import React, {useContext} from "react";
import FavContext from "../../context/favContext";
import { useNavigate } from "react-router-dom";

function Fav(){
  const {favList, removeList} = useContext(FavContext)
  const navigate = useNavigate();
  const handleClick = (e)=>{
    const target = e.target.getAttribute('data-key')
    navigate(`/recipepage/${target}`)
  }

  return(
    <div className="flex flex-wrap justify-center gap-9 m-4">
      {favList.map((item,index)=>(
        <div key={index} className="w-[300px] rounded-md border flex flex-wrap">
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
              onClick={() => removeList(index)}
            >
              Remove from fav
            </button>
              <button
                data-key={item.key}
                onClick={handleClick}
                type="button"
                className="w-full h-8 mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Recipe
              </button>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Fav