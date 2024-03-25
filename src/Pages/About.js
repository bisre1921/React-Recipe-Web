import {Link} from "react-router-dom";
import aboutImage from '../Assets/about.jpg';

const About = () => {
  return (
    <div className="bg-zinc-600 pb-24 text-white">
        <h1 className="text-center text-[50px] font-bold pb-16">About Us</h1>
        <div className="flex lg:flex-col lg:flex-col-reverse  gap-8 md:px-4 px-24">
            <div className="flex flex-col justify-center items-center flex-1">
                <p className="text-center leading-8 pb-12">
                Welcome to TastyBites, a culinary haven where passion meets flavor! At TastyBites, we believe that cooking is not just a task; it's an art form that brings people together, creating memorable experiences around the dining table. Our journey began with a shared love for exploring diverse cuisines, experimenting with ingredients, and savoring the joy that a well-cooked meal brings.
                Join us on this flavorful expedition as we share recipes, cooking tips, and stories that make the culinary world so enchanting. TastyBites is more than just a recipe hub; it's a community where food lovers come together to explore, create, and share the joy of delicious meals. Thank you for being a part of our culinary journey, and we look forward to being your trusted companion in the kitchen!
                </p>
                <Link to={"/contact-us"}>
                    <button className="bg-slate-800 px-4 py-2 rounded-xl hover:bg-transparent hover:border-2">
                        Contact Us
                    </button>
                </Link>
            </div>
            <div className="flex-1 justify-center items-center">
                <img 
                    src={aboutImage} 
                    alt="about image"
                    className="rounded-2xl object-cover lg:h-full xl:h-[500px]"
                />
            </div>
        </div>
    </div>
  )
}

export default About