import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Styled from "styled-components"

const Recipe = () => {
    const [details , setDetails] = useState({});
    const [activeButton , setActiveButton] = useState({});

    const params = useParams();

    useEffect(() => {
        getDetails();
    } , [params.id]);

    const getDetails = async () => {
        const response = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await response.json();
        setDetails(data);
    }

  return (
    <DetailWrapper>
        <h1 className="text-[50px] font-bold text-center pt-24 pb-12">
            {details.title}
        </h1>
        <div className="flex justify-center items-center pb-12">
            <img 
            src={details.image} 
            alt={details.title}
            className="w-[1000px] h-[500px]"
            />
        </div>
        <div className="flex  lg:flex-col justify-center items-center md:px-4 md:gap-16 lg:gap-10 gap-32 pb-12">
            <div className="flex vsm:flex-col vsm:gap-16 md:gap-12 gap-24">
                <Button className={activeButton === "Instructions" ? "active" : ""} onClick={() => {setActiveButton("Instructions")}}>
                    Instructions
                </Button>
                <Button className={activeButton === "Ingredients" ? "active" : ""} onClick={() => {setActiveButton("Ingredients")}}>
                    Ingredients
                </Button>
            </div>
            <div className="flex vsm:flex-col vsm:gap-16 md:gap-12 gap-24">
                <Button className={activeButton === "DishType" ? "active" : ""} onClick={() => {setActiveButton("DishType")}}>
                    DishType
                </Button>
                <Button className={activeButton === "Price" ? "active" : ""} onClick={() => {setActiveButton("Price")}}>
                    Price
                </Button>
            </div>
        </div>

        <div className="flex justify-center items-center pb-24 vsm:px-0 md:px-6 px-32 leading-8">
            {activeButton === "Instructions" && (
                <div className="flex justify-center items-center vsm:w-full">
                    <h3 className=" text-center" dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
                </div>
            )}

            {activeButton === "Ingredients" && (
                <div>
                    <ul className="list-disc">
                        {details.extendedIngredients && details.extendedIngredients.map((ingredient) => (
                            <li>{ingredient.original}</li>
                        ))}
                    </ul>
                </div>
            )}

            {activeButton === "DishType" && (
                <div>
                    {details.dishTypes && details.dishTypes.map((dishType) => (
                        <ul className="list-disc">
                            <li>{dishType}</li>
                        </ul>
                    ))}
                </div>
            )}

            {activeButton === "Price" && (
                <div>
                    <h3> ${details.pricePerServing} </h3>
                </div>
            )}
        </div>
        
    </DetailWrapper>
  )
}

const DetailWrapper = Styled.div`
    background-color: rgb(82 82 91);
    color: white;
    .active {
        background-color: rgb(146 64 14);
        color: white;
    }
   
`;

const Button = Styled.div`
    width: 128px;
    text-align: center;
    padding:10px 0px;
    background-color: rgb(30 41 59);
    color: white;
    border: 2px solid black;
    margin-right: 10px;
    font-weight: 600;
    align-self: flex-start;
    cursor: pointer;
    border-radius: 10px;
`;

export default Recipe