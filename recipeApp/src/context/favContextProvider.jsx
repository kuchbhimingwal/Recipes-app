import React, { useState } from "react";
import FavContext from "./favContext";

const FavContextProvider = ({children}) =>{
  const[favList, setFavList] = useState([])

  const removeList = (index)=>{
    setFavList([...favList.slice(0, index), ...favList.slice(index + 1)])
    console.log(favList)
  }
  return(
    <FavContext.Provider value={{favList,setFavList,removeList}}>
      {children}
    </FavContext.Provider>
  )
}

export default FavContextProvider