import React from 'react'
import { NavLink } from 'react-router-dom';
import loggedIn from '../../Images/Layout/icon-unlock.svg'
import styled from "styled-components";

// Min styled components inline styling
export const NavbarStyle = styled.div`

height: auto;
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

.login{
    margin: 5vh 45%;
    height: 8vh;
    width: fit-content;
    border-radius: 50px;
    background-color: #D8EADB;
    a{
        border: none;
          img{
        width: auto;
        height: 5vh;
    }  
    }

}

/* Media query for desktop screens */
@media screen and (min-width: 768px) {
    button{
        display: none;
    }
    .active{
    color: #6DA830;
    border-top: 1px solid #6DA830;
    margin-top: 1vh;
    padding-top: 2vh;
}
    nav{
    height: 100%;
    display: block;
    ul{
        height: 100%;
        width: 90%;
        margin-left: 10%;
        display: grid;
        grid-template-columns: repeat(4, auto) 35%;
        list-style: none;
        
        li{
            margin-top: 7vh;
            font-size: 18px;
        }
    }
} 

.login{
    margin-top: 6vh;
    height: 5vh;
    margin-left: 20vw;
    width: 2.5vw;
    border-radius: 50px;
    background-color: #D8EADB;
    a{
        border: none;
          img{
            padding: 0;
            padding-top: 1vh;
        width: auto;
        height: 3vh;
    }  
    }

}
}
`

function Navbar() {
  return (
    <NavbarStyle>
             

            <nav>    
                {/* ternary operator til at gemme knappen når der klikkes på den         */}
            <button onClick={() => document.getElementById('navElements').style.display === 'none' ?  document.getElementById('navElements').style.display = 'block' : document.getElementById('navElements').style.display = 'none'}>
                <hr />
                <hr />
                <hr />
            </button>
               <ul id='navElements'>
                {/* NavLinks som på siden opføre sig ligesom et anchor tag som smider folk hen til den side der er ved to={} */}
                    <li><NavLink to={'/'}>Forside</NavLink></li>
                    <li><NavLink to={'/sorting'}>Sotering</NavLink></li>
                    <li><NavLink to={'/stations'}>Genbrugsstationer</NavLink></li>
                    <li><NavLink to={'/order'}>Bestil beholder</NavLink></li>
                    <li className='login' ><NavLink to={'/login'}> <img src={loggedIn} alt="Lock" /></NavLink></li>
                </ul>
            </nav>
            
            
    </NavbarStyle>

  )
}

export default Navbar
