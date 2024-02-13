import React, { useState } from "react";
import FavContext from "./favContext";

const FavContextProvider = ({children}) =>{
  const[favList, setFavList] = useState([])

  return(
    <FavContext.Provider value={{favList,setFavList}}>
      {children}
    </FavContext.Provider>
  )
}

export default FavContextProvider