import styled from "styled-components";

export const ReviewStyle = styled.article`
margin-top: 5vh;
label{
    display: block;
}
span{
    display: block;
}
ul{
    margin-top: 5vh;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    div{
        display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 3vh 0vw;
    }
}
`