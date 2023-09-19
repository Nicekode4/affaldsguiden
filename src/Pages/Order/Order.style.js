import { styled } from "styled-components";

export const OrderStyle = styled.section`
display: grid;
grid-template-columns: 15% 85%;
height: 100vh;

span{
    display: block;
}

label{
    display: none;
}
.progressSec{
    background-color: #114D46;
    padding: 1vh 1vw;
    img{
        height: auto;
        width: 90%;
    }
}

.formSecOne{
    background-color: #DCDCDC;
    padding-left: 2vw;
    button{
    background-color: #D8EADB;
    color: #0E4F2D;
    border: none;
    border-radius: 10px;
    padding: 2vh 6vw;
    margin: 2vh 70%;
    box-shadow: -1px 3px 6px 0px rgba(0,0,0,0.41);
}
}

.formSecTwo{
    padding-left: 2vw;
    background-color: #DCDCDC;
    input{
        display: block;
        border: none;
        padding: 3vh 3vw;
        margin: 1vh 1vw;
        width: 80%;
    }
    button{
    background-color: #D8EADB;
    color: #0E4F2D;
    border: none;
    border-radius: 10px;
    padding: 2vh 6vw;
    margin: 2vh 2vw;
    box-shadow: -1px 3px 6px 0px rgba(0,0,0,0.41);
}
button:first-of-type{
    margin-left: 30%;
}
}

.progressP{
    font-size: 15px;
    margin: 2vh 0vw;
}

.title{
    font-size: 25px;
    margin: 2vh 0vw;
}

.text{
    font-size: 15px;
    margin: 2vh 0vw;
}

.choiceArt{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-right: 2vw;
}
.option{
    margin: 1vh 1vw;
    background-color: white;
    text-align: center;
    input{
        display: block;
        margin: 2vh 80%;
        
    }
    img{
        height: 10vh;
        width: 20vw;
    }
    p{
        margin: 1vh 1vw;
        color: #576072;
    }
}

.endSec{
 h2{
    margin: 2vh 2vw;
    text-align: center;
    color: #0E4F2D;
}   
}

`