import {NavLink} from "react-router-dom";
import styled from "styled-components";
import { FaPizzaSlice } from "react-icons/fa";
import { GiNoodles , GiSlicedBread , GiSushis } from "react-icons/gi";
import { LiaHotdogSolid } from "react-icons/lia";

const Country = () => {
  return (
    <div className="flex lg:flex-col justify-center lg:items-center text-white bg-slate-800 gap-16 py-8">
        <div className="flex lg:flex-row vsm:gap-4 gap-12">
            <Slink to={"/cuisine/Italian"}>
                <FaPizzaSlice />
                Italian
            </Slink>
            <Slink to={"/cuisine/American"}>
                <LiaHotdogSolid />
                <h3>American</h3>
            </Slink>
        </div>
       
       <div className="flex lg:flex-row vsm:gap-4 gap-12">
            <Slink to={"/cuisine/Chinese"}>
                <GiNoodles />
                <h3>Chinese</h3>    
            </Slink>
            <Slink to={"/cuisine/Indian"}>
                <GiSlicedBread />
                <h3>Indian</h3>
            </Slink>
       </div>
        
        <Slink to={"/cuisine/Japanese"}>
            <GiSushis />
            <h3>Japanese</h3>
        </Slink>
    </div>
  )
};

const Slink = styled(NavLink) `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background-color: rgb(82 82 91);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);


    h4 {
        color: white;
        font-size: 0.8rem;
    }

    svg {
        color: white;
        font-size: 1.5rem;
    }

    &.active {
        background-color : rgb(146 64 14);

        svg {
            color: white;
        }
        h4 {
            color: white;
        }
    }
`

export default Country