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
    padding-left: 2vw;
}
textarea::placeholder{
    color: black;
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
    margin-left: 0%;
margin-top: 5vh;
label{
    display: none;
}
textarea{
    width: 80%;
    border-radius: 20px;
    border: none;
    padding-left: 1vw;
    margin-left: 10%;
}
.subjectRatingDiv{
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
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
margin-left: 40%;
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
    row-gap: 0;
    height: auto;
    div{
        display: inline;
    height: auto;
    margin: 3vh 0vw;
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
li{
        width: 100%;
        padding: 0vh 4vw;
        display: inline;
        height: fit-content;

        margin-top: 0;
        color: #4F5B79;
    }
    li:last-of-type{
        display: block;
        top: 0;
        margin-bottom: 5vh;
        margin-top: 1vh;
        height: auto;
        width: auto;
    }
    }
    
}   
}
`