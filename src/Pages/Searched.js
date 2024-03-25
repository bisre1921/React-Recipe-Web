import { useEffect, useState } from "react";
import {useParams , Link} from "react-router-dom";
import { truncateText } from "../Constants";

const Searched = () => {
    const [searche , setSearch] = useState([]);
    const params = useParams();

    useEffect(() => {
        getSearched(params.search)
    } , [params.search]);

    const getSearched = async (name) => {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
        const data = await response.json();
        setSearch(data.results);
    }
    return (
        <div className="bg-zinc-600 text-white py-24">
            <h1 className="text-center text-[50px] pb-16 font-bold">
                {params.search} Dishes
            </h1>
            <div className="flex gap-16 flex-wrap justify-center items-center px-8">
                {searche.map((item) => (
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

export default Searched