import {Route , Routes} from "react-router-dom";
import Main from "../Components/Main";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import About from "./About";
import ContactUs from "./ContactUs";

const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
  )
}

export default Pages