import { styled } from "styled-components";

export const TrashguideStyle = styled.section`
margin: 0vh 3vw;
h1{
    font-size: 30px;
    color: #0E4F2D;
    text-align: center;
    span{
        display: block;
        color: #119B1E;
    }
}

.searchSec{
width: 75%;
box-shadow: -1px 9px 35px 0px rgba(0,0,0,0.41);
margin: 2vh 0vw;
margin-left: 10%;
    border-radius: 50px;
    padding: 2vh 2vw;
    input{
        border: none;
        padding-left: 2vh;
    }
    input::placeholder{
        color: black;
    }

    button{
        border: none;
        margin-left: 20%;
    }
}

.titleArt{
    display: grid;
    grid-template-columns: 75% 30%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    h2{
        color: white;
        padding: 5vh 7vw;
    }

    img{
        height: 15vh;
    width: auto;
    }
}

@media screen and (min-width: 768px) {
    h1{
    font-size: 30px;
    margin-top: 5vh;
    color: #0E4F2D;
    text-align: center;
    span{
        display: block;
        color: #119B1E;
    }
}

.searchSec{
width: 45%;
box-shadow: -1px 9px 35px 0px rgba(0,0,0,0.41);
margin: 2vh 0vw;
margin-left: 25%;
margin-bottom: 20vh;
    border-radius: 50px;
    padding: 2vh 2vw;
    input{
        border: none;
        padding-left: 1vw;
        width: 35vw;
    }
    input::placeholder{
        color: black;
    }

    button{
        border: none;
        margin-left: 10%;
    }
}

.titleArt{
    display: grid;
    grid-template-columns: 92% 8%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    h2{
        color: white;
        padding: 5vh 5vw;
    }

    img{
        height: 15vh;
    width: auto;
    }
}
.categorySec{
display: grid;
grid-template-columns: repeat(4, 1fr);
margin-bottom: 40vh;
}
}
`