import styled from "styled-components";

export const HeaderStyle = styled.header`
box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.41);
height: auto;
display: grid;
grid-template-columns: 1fr;
gap: 0vh;
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
    width: auto;
}

p{
    color: black;
}   
}
}


`