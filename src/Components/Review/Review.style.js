import styled from "styled-components";

export const ReviewStyle = styled.article`
margin-left: 10%;
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
    width: 90%;
    display: grid;
    grid-template-columns: 50% 5% 50%;
    padding-left: 1vw;

    input{
    border: none;
    width: 100%;
    height: 4vh;
}
input::placeholder{
    font-size: 15px;
    color: black;
}
}
button{
background-color: #D8EADB;
color: #80AB87;
padding: 2vh 8vw;
border-radius: 12px;
border: none;
margin-top: 5vh;
margin-left: 25%;
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
    width: 100%;
    }
    li{
        width: auto;
    }
}

@media screen and (min-width: 768px) {
    margin-left: 10%;
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
    width: 90%;
    display: grid;
    grid-template-columns: 25% 60% 25%;
    padding-left: 1vw;

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
margin-top: 5vh;
margin-left: 35%;
}
span{
    display: block;
}
ul{
    margin-top: 5vh;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2vw;
    div:first-of-type{
        display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 3vh 0vw;
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;

    }
    li{
        width: auto;
        border: 1px solid black;
        margin-top: 0;
        color: #4F5B79;
    }
}   
}
`