import React from 'react'
import { NavLink } from 'react-router-dom';
import loggedIn from '../../Images/Layout/icon-unlock.svg'
import styled from "styled-components";

// Min styled components inline styling
export const NavbarMobileStyle = styled.div`

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
        display: grid;
        grid-template-columns: repeat(1, 1fr);
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
`

function NavbarMobile() {
  return (
    <NavbarMobileStyle>
             

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
            
            
    </NavbarMobileStyle>

  )
}

export default NavbarMobile
