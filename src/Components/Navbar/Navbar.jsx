import React from 'react'
import { NavLink } from 'react-router-dom';
import loggedIn from '../../Images/Layout/icon-unlock.svg'
import styled from "styled-components";

// Min styled components inline styling
export const NavbarStyle = styled.div`
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
    ul{

        height: 100%;
        width: 100%;
        margin-left: 8%;
        display: flex;
        
        list-style: none;
        
        li{
            margin-top: 7vh;
            margin-right: 5vw;
            font-size: 18px;
            a{
                text-decoration: none;
                color: #232F44;
            }
        }
    }
} 

.login{
    margin-top: 6vh;
    height: 5vh;
    margin-left: 15vw;
    width: 2.5vw;
    border-radius: 50px;
    background-color: #D8EADB;
    a{
        border: none;
          img{
            padding: 1vh 0.7vw;
            padding-top: 1vh;
        width: auto;
        height: 3vh;
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
