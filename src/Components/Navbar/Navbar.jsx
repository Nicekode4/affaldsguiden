import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import styled from "styled-components";

export const NavbarStyle = styled.div`


button{
    margin-bottom: 2vh;
    margin-left: 45%;
    width: 10vw;
    background-color: #ffffff00;
    border: none;
    hr{
        margin: 0.1vh 0vw;
        height: 1vh;
        background-color: black;
    }
}
.active{
    color: #6DA830;
    border-top: 1px solid #6DA830;
}
nav{
    width: 100%;
    height: auto;
    ul{
        
        list-style: none;
        text-align: center;
        li{
            margin-top: 1vh;
            a{
                text-decoration: none;
                color: #232F44;
            }
        }
    }
}


/* Media query for desktop screens */
@media screen and (min-width: 768px) {
    button{
        display: none;
    }
    nav{
    height: 100%;
    display: block;
    ul{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        list-style: none;
        li{
            margin-top: 1vh;
        }
    }
} 
}
`

function Navbar() {
    const [menuOne, setMenuOne] = useState(false)


  return (
    <NavbarStyle>
             

            <nav>            
            <button onClick={() => document.getElementById('navElements').style.display === 'none' ?  document.getElementById('navElements').style.display = 'block' : document.getElementById('navElements').style.display = 'none'}>
                <hr />
                <hr />
                <hr />
            </button>
               <ul id='navElements'>
                    <li><NavLink to={'/'}>Forside</NavLink></li>
                    <li><NavLink to={'/sortering'}>Sotering</NavLink></li>
                    <li><NavLink to={'/stations'}>Genbrugsstationer</NavLink></li>
                    <li><NavLink to={'/ticket'}>Bestil beholder</NavLink></li>
                    <li>Item 5</li>
                </ul>
            </nav>
            
            
    </NavbarStyle>

  )
}

export default Navbar
