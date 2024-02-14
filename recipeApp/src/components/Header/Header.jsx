import React, {useContext, useEffect, useState } from "react";
import { NavLink, useNavigate} from 'react-router-dom'
import FavContext from "../../context/favContext";
import { recipeData } from "../../data/Data";

function Header (){
    const [searchResult, setsearchResult] = useState([])
    const data = recipeData();
    const {favList} = useContext(FavContext)
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = () =>{
        if(search != ""){
            const namesArray = data.map(obj => obj.name);
            const searchLower = search.toLowerCase();
            // console.log(namesArray);
            setsearchResult(namesArray.filter(name=> name.toLowerCase().includes(searchLower)));
            // console.log(searchResult)
        }else if(search == ""){
            setsearchResult([]);
        }
    }


    const handleClick = (e)=>{
        const namesArray = data.map(obj => obj.name);

        namesArray.map((name,index)=>{
            if(name === e.target.innerText){
                console.log("found" + index)
                navigate(`/recipepage/${index}`);
                setSearch("")
            }
        })

    }

    useEffect(()=>{ 
        handleSearch()
    },[search])
  return(
    <header className="shadow sticky z-50 top-0 top-0 bg-cover bg-center">
          <nav className="bg-white  border-gray-200 px-4 lg:px-6 py-2.5">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                          <li>
                              <NavLink
                                    to="/"
                                  className={(isActive) =>
                                      `block py-2 pr-4 pl-3 duration-200 
                                       ${isActive ? "text-orange-700" : "text-grey-700"}border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                  }
                              >
                                  Home
                              </NavLink>
                          </li>
                          
                          <li>
                              <NavLink
                                    to="/favlist"
                                  className={(isActive) =>
                                      `block py-2 pr-4 pl-3 duration-200 
                                       ${isActive ? "text-orange-700" : "text-grey-700"}border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                  }
                              >
                                  Favourites {favList.length}
                              </NavLink>
                          </li>

                          <li>
                              <NavLink
                                    to="/contact"
                                  className={(isActive) =>
                                      `block py-2 pr-4 pl-3 duration-200 
                                       ${isActive ? "text-orange-700" : "text-grey-700"}border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                  }
                              >
                                  Contact Us
                              </NavLink>
                          </li>

                          <li>
                              <NavLink
                                    to="/github"
                                  className={(isActive) =>
                                      `block py-2 pr-4 pl-3 duration-200 
                                       ${isActive ? "text-orange-700" : "text-grey-700"}border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                  }
                              >
                                  Github
                              </NavLink>
                          </li>
                      </ul>
          </nav>

          <input className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
           placeholder="Search for your recipe"
           value={search}
           onChange={(e)=> setSearch(e.target.value)}
           type="text"  />
           <ul className="bg-white border border-gray-100 w-full mt-2 absolute text-left">
            
            {searchResult.map((item)=>(
                <li key={item} onClick={handleClick} className="pl-8 pr-2 py-1 border-b-2 border-gray-100 relative cursor-pointer hover:bg-yellow-50 hover:text-gray-900">{item}
                </li>  
            ))}                  
           </ul>
    </header>
  )
}

export default Header