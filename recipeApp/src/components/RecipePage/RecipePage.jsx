import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

function RecipePage(){
  const {cardid} = useParams();
  const recipeData = useLoaderData()[cardid];
  return(
  <div className="m-8 max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
    <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
      <h1 className="mt-1 text-lg font-semibold text-black sm:text-slate-900 md:text-2xl dark:sm:text-black">{recipeData.name}</h1>
    </div>
    <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
      <img src={recipeData.imgTag} alt={recipeData.name} className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy"/>
      <img src={recipeData.imgTag2} alt="" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"/>
      <img src={recipeData.imgTag3} alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"/>
    </div>
    <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
      <a  href={recipeData.youtubeLink} target="_blank">
      <button type="button" className="rounded-lg shadow m-4 dark:bg-gray-800 w-60 h-8 mt-4  px-2.5 py-1 text-[10px] font-semibold text-white  hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Recipe Video</button></a>
    </div>
    <div className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
      {recipeData.recipe.map((step)=>(
        <p key={step} className="m-2">{step}</p>
      ))}
    </div>
    
  </div>
  )
}

export default RecipePage