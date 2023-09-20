import styled from "styled-components";

export const ReviewStyle = styled.article`
margin-top: 5vh;
label{
    display: none;
}
textarea{
    width: 90%;
    border-radius: 20px;
    border: none;
    padding-left: 1vw;
}
.subjectRatingDiv{
    display: grid;
    grid-template-columns: 25% 60% 15%;

    input{
    border: none;
    width: 100%;
    height: 4vh;
}
input::placeholder{
    font-size: 25px;
    color: black;
}
}
button{
background-color: #D8EADB;
color: #80AB87;
padding: 2vh 8vw;
border-radius: 12px;
border: none;
margin-left: 35%;
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