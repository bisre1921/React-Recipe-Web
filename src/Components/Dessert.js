import { useEffect, useState } from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "../Constants";
import { truncateText } from "../Constants";
import {Link} from "react-router-dom";

const Dessert = () => {
    const [dessert , setDessert] = useState([]);

    useEffect(() => {
        getDessert();
    } ,[]);

    const getDessert = async () => {
        const checkLocalStorage = localStorage.getItem("dessert");
        if(checkLocalStorage) {
            setDessert(JSON.parse(checkLocalStorage));
        } else {
            const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=dessert`);
            const data = await response.json();
            localStorage.setItem("dessert" , JSON.stringify(data.recipes));
            setDessert(data.recipes);
        }
        
    }
  return (
    <div className=" text-white overflow-x-hidden pt-24 px-8">
        <h2 className="text-[50px] font-bold pb-8 flex justify-center">
            Dessert Picks
        </h2>
        <Slider {...settings}>
            {dessert.map((recipe) => (
                <div key={recipe.id} className="w-full">
                    <div className="flex justify-center items-center pb-8">
                        <img 
                            src={recipe.image} 
                            alt={recipe.title}
                            className="w-[300px] h-[300px]"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-xl font-bold h-16 overflow-hidden text-center">{truncateText(recipe.title, 40)}</h2>
                        <Link to={"/recipe/" + recipe.id}>
                            <button className="bg-slate-800 px-4 py-2 rounded-xl hover:bg-transparent hover:border-2">
                                Watch Detail
                            </button>
                        </Link>
                        
                    </div>
                
                </div>
            ))}
        </Slider>
    </div>
  )
}

export default Dessert