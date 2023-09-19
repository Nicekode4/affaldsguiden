import { styled } from "styled-components";

export const StationCardStyle = styled.article`
margin: 2vh 0vw;
iframe{
    border: none;
    height: 50vh;
width: auto;
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
`