import { styled } from "styled-components";

export const StationCardStyle = styled.article`
box-shadow: -1px 2px 15px 0px rgba(0,0,0,0.41);
border-radius: 8px;
margin: 2vh 0vw;
iframe{
    border: none;
    height: 30vh;
width: auto;
}

.title{
    color: black;
    font-size: 16px;
    padding-left: 1vw;
    width: 90%;
}

.text{
    color: black;
    opacity: 50%;
    font-size: 14px;
    padding-left: 1vw;
}

.rating{
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 10vh;
    padding-left: 1vw;
}

@media screen and (min-width: 768px) {
    margin-bottom: 10vh;
    iframe{
    border: none;
    height: 30vh;
width: 100%;
}

.title{
    color: black;
    font-size: 16px;
}

.text{
    color: black;
    opacity: 50%;
    font-size: 14px;
}

.rating{
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 10vh;
}   
}
`