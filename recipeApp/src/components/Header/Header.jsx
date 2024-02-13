import React from "react";
import {Link, NavLink} from 'react-router-dom'
function Header (){
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
                                  Favourites
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

          <input type="text" class="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Search..." />
    </header>
  )
}

export default Header