import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import styled from "styled-components";

export const NavbarStyle = styled.div`
button{
    margin: 0;
    width: 15vw;
    background-color: #ffffff00;
    border: none;
    display: block;
    hr{
        height: 0.5vh;
        background-color: black;
    }
}
.active{
    color: red;
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
                color: black;
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
             
            
            <>
            <button onClick={() => document.getElementById('navbar').style.display === 'none' ?  document.getElementById('navbar').style.display = 'block' : document.getElementById('navbar').style.display = 'none'}>
                <hr />
                <hr />
                <hr />
            </button>
            <nav id='navbar' >
               <ul>
                    <li><NavLink to={'/'}>Forside</NavLink></li>
                    <li><NavLink to={'/login'}>Login</NavLink></li>
                    <li><NavLink to={'/review'}>Review</NavLink></li>
                    <li><NavLink to={'/ticket'}>Billetter</NavLink></li>
                    <li>Item 5</li>
                </ul>
            </nav>
            </> 
            
            
    </NavbarStyle>

  )
}

export default Navbar
