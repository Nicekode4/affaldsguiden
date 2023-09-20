import { styled } from "styled-components";

export const TrashCardStyle = styled.article`
background-color: ${props => props.color};
width: 90%;
margin-left: 5%;
margin-bottom: 2vh;
border-radius: 6px;
text-align: center;
color: white;

img{
    height: 40vh;
    width: 100%;
}

h2{
    padding: 1vh 1vw;
}

@media screen and (min-width: 768px) {
    width: fit-content;
margin-left: 5%;
margin-bottom: 2vh;
border-radius: 6px;
text-align: center;
color: white;

img{
    height: 40vh;
    width: 100%;
}

h2{
    padding: 1vh 1vw;
}   
}
`