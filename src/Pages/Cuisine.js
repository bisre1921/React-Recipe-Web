import { useEffect, useState } from "react"
import {Link , useParams} from "react-router-dom";
import { truncateText } from "../Constants";

const Cuisine = () => {
    const [cuisine , setCuisine] = useState([]);
    let params = useParams();

    useEffect(() => {
        getCuisine(params.type);
    } , [params.type]);


    const getCuisine = async (name) => {
        const checkLocalStorage = localStorage.getItem(`${name} Recipes`);
        if(checkLocalStorage) {
            setCuisine(JSON.parse(checkLocalStorage));
        } else {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`);
            const data = await response.json();
            localStorage.setItem(`${name} Recipes` , JSON.stringify(data.results));
            setCuisine(data.results);
        }
        
    }


    return (
        <div className="bg-zinc-600 text-white py-24">
            <h1 className="text-center text-[50px] pb-16 font-bold">
                {params.type} Dishes
            </h1>
            <div className="flex gap-16 flex-wrap justify-center items-center px-8">
            {cuisine.map((item) => (
                    <div className="text-center">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="sm:w-[350px] sm:h-[350px] w-[400px] h-[400px] object-cover"
                        />
                        <h3 className="text-lg font-bold overflow-hidden text-center py-6">
                            {truncateText(item.title, 40)}
                        </h3>
                        <Link to={"/recipe/" + item.id}>
                            <button className="bg-slate-800 px-4 py-2 rounded-xl hover:bg-transparent hover:border-2">
                                watch more
                            </button>
                        </Link>
                       
                    </div>
            ))}
            </div>
        </div>
    )
}

export default Cuisine