import { styled } from "styled-components";

export const TrashguideItemStyle = styled.section`
div{
    margin: 4vh 0vw;
    display: flex;
    justify-content: center;
    img{
        border-radius: 20px;
        height: 15vh;
        width: auto;
    }
    h2{
        padding-top: 5vh;
        margin-left: 2vw;
    }
}

ul{
    li{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin: 2vh 0vw;
        .allowed{
            background-color: #D8EADB;
            color: #3F7749;
            padding: 1vh 1vw;
            border-radius: 10px;
            text-align: center;
            width: 50%;

        }
        .notAllowed{
            background-color: #EAD8D8;
            color: #773F3F;
            padding: 1vh 1vw;
            border-radius: 10px;
            text-align: center;
            width: 50%;
        }
        p:first-of-type{
            font-weight: bold;

        }
    }
}
`