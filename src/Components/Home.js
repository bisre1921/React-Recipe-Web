import { useEffect, useState  } from "react";
import { IoIosSearch } from "react-icons/io";
import Typed from 'typed.js';
import {useNavigate} from "react-router-dom";

const Home = () => {

   
   useEffect(() => {
    const typed = new Typed(".title-text" , {
        strings : ["TastyBites" , "Delicious"] , 
        typeSpeed : 100 , 
        backSpeed : 100 , 
        backDelay : 500 , 
        loop : true , 
        showCursor: false
    });

    return () => {
        typed.destroy();
      };
    
   } , []) 

   const [searchInput , setSearchInput] = useState("");
   const navigate = useNavigate();

   const handleSearchInput = (event) => {
        event.preventDefault();
        navigate("/searched/" + searchInput);
   }
    
  return (
    <section className="px-11 md:pt-36 pt-12 ">
        <form action="" onSubmit={handleSearchInput}>
            <div className="relative w-full  text-center">
                <input 
                    type="text"
                    onChange={(event) => {setSearchInput(event.target.value)}}
                    value={searchInput}
                    className="border-2 rounded-full px-10 py-2 outline-none md:w-full w-1/2 text-lg"
                />
                <IoIosSearch className="absolute top-1/2 left-1/4 md:left-0 translate-x-full -translate-y-1/2"/>
            </div>
        </form>
        <h1 className="title-text h-[100px] p-[10px] items-center text-center md:text-[40px] text-[70px] text-white font-bold">
            TastyBites
        </h1>
        
    </section>
  )

}

export default Home
