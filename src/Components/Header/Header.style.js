import styled from "styled-components";

export const HeaderStyle = styled.header`
border-bottom: 1px solid black;
height: auto;
display: grid;
grid-template-columns: 1fr;
gap: 2vh;
div{
    p{
        display: none;
    }
    display: flex;
    justify-content: center;
 img{
    padding: 1vh 2vw;
    height: 10vh;
}

p{
    color: black;
}   
}
@media screen and (min-width: 768px) {
    border-bottom: 1px solid black;
height: auto;
display: grid;
grid-template-columns: 20% 80%;
.logoDiv{
    display: flex;
    p{
        display: block;
        margin-top: 6.5vh;
        font-size: 22px;
        font-weight: 600;
    }
 img{
    padding: 5vh 1vw;
    height: 35%;
}

p{
    color: black;
}   
}
}


`