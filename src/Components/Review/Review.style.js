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
.commentDiv{
    width: 70%;
    display: flex;
    justify-content: center;
background-color: #D8EADB;
color: #80AB87;
padding: 2vh 6vw;
border-radius: 12px;
border: none;
margin-top: 5vh;
margin-bottom: 10vh;
input{
    font-size: 14px;
    font-weight: 500;
    border: none;
    background-color: #D8EADB;
color: #80AB87;
}
img{
    margin-right: 2vh;
    padding-top: 0.5vh;
}
}
span{
    display: block;
}
ul{
    margin-top: 5vh;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    li{
        width: 100%;
        padding: 0vh 0vw;
        display: inline;
        height: fit-content;
        margin-top: 0;
        color: #4F5B79;
    }
    li:first-of-type{
        
    }
    li:last-of-type{
        display: block;
        word-break: break-all;
        color: black;
        top: 0;
        margin-bottom: 5vh;
        margin-top: 1vh;
        height: auto;
        width: 160%;
    }
    
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
.commentDiv{
    width: 9vw;
    display: flex;
background-color: #D8EADB;
color: #80AB87;
padding: 2vh 6vw;
border-radius: 12px;
border: none;
margin-top: 5vh;
margin-bottom: 10vh;
margin-left: 40%;
input{
    font-size: 14px;
    font-weight: 500;
    border: none;
    background-color: #D8EADB;
color: #80AB87;
}
img{
    margin-right: 2vh;
    padding-top: 0.5vh;
}
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
        padding: 0vh 0vw;
        display: inline;
        height: fit-content;
        margin-top: 0;
        color: #4F5B79;
    }
    li:first-of-type{
        margin-right: 74%;
    }
    li:last-of-type{
        display: block;
        word-break: break-all;
        color: black;
        top: 0;
        margin-bottom: 5vh;
        margin-top: 1vh;
        height: auto;
        width: 100%;
    }
    }
    
}   
}
`