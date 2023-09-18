import { styled } from "styled-components";

export const TrashguideStyle = styled.section`
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
    }
}
`