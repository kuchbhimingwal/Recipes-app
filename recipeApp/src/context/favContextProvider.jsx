import React, { useState } from "react";
import FavContext from "./favContext";

const FavContextProvider = ({children}) =>{
  const[favList, setFavList] = useState([])

  return(
    <FavContextProvider value={{favList,setFavList}}>
      {children}
    </FavContextProvider>
  )
}

export default FavContextProvider