import { styled } from "styled-components";

export const StationDetailsStyle = styled.section`
width: 95%;
.title{
    color: black;
    font-size: 16px;
    margin: 2vh 0vw;
    font-weight: bold;
}

.text{
    color: black;
    opacity: 50%;
    font-size: 14px;
    margin: 1vh 0vw;
}

iframe{
    border: none;
    height: 40vh;
width: 100%;
}

@media screen and (min-width: 768px) {
    display: block;
    width: 100%;
.title{
    color: black;
    font-size: 16px;
    margin: 2vh 0vw;
    font-weight: bold;
}

.text{
    color: black;
    opacity: 50%;
    font-size: 14px;
    margin: 1vh 0vw;
}

iframe{
    border: none;
    height: 40vh;
width: 100%;
}   
}
`