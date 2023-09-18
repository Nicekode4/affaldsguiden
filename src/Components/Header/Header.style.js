import styled from "styled-components";

export const HeaderStyle = styled.header`
border-bottom: 1px solid black;
height: auto;
display: grid;
grid-template-columns: 1fr;
div{
    display: flex;
 img{
    padding: 1vh 2vw;
    height: 75%;
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
div{
    display: flex;
 img{
    padding: 1vh 2vw;
    height: 75%;
}

p{
    color: black;
}   
}
}


`