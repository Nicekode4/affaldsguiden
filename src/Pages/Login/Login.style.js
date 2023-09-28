import styled from "styled-components";

export const LoginStyle = styled.section`
margin: 10vh 2vw;
height: auto;
display: grid;
grid-template-columns: repeat(1, 1fr);
justify-items: center;
.passwordDiv{
    margin-top: 2vh;
    display: grid;
    grid-template-columns: 85% 10%;
    border: 1px solid #DCDBDD;
    width: 25vw;
    border-radius: 12px;
    padding: 3vh 3vw;
    
    margin-left: 5%;
    margin-bottom: 2vh;
    font-size: 14px;
    width: 90%;
    height: max-content;
    img{
        margin: 0;
        margin-left: 2vw;
        
padding: 0;
border: 0;
height: 100%;
width: 100%;
    }

    input{
        margin: 0;
padding: 0;
padding-left: 0vw;
border: 0;
width: 100%;
height: 100%;
outline: none;
}
}
span{
    display: block;
    text-align: center;
}
p{
    text-align: center;
}
img{
    padding-left: 10vw;
}
h1{    
    margin: 2vh 5%

}
form{
label{
    display: none;
}
input{
    border: 1px solid #DCDBDD;
    border-radius: 12px;
    padding: 3vh 3vw;
    margin-left: 5%;
    font-size: 14px;
    width: 90%;
}
input::placeholder{
    color: #84818A;
}
}
button{
    color: white;
    background-color: #114D46;
    border: none;
    padding: 2vh 5vw;
    border-radius: 6px;
    margin-left: 15%;
    margin-top: 2vh;
    width: 70%;
    height: fit-content;
}

@media screen and (min-width: 768px) {

    margin: 2vh 2vw;
    height: 90vh;
display: grid;
grid-template-columns: repeat(2, 1fr);
justify-items: start;

.passwordDiv{
    display: grid;
    grid-template-columns: 85% 10%;
    border: 1px solid #DCDBDD;
    width: 25vw;
    border-radius: 12px;
    padding: 3vh 3vw;
    
    margin-left: 5%;
    margin-bottom: 2vh;
    font-size: 14px;
    width: 90%;
    height: max-content;
    img{
        margin: 0;
        margin-left: 2vw;
        
padding: 0;
border: 0;
height: 100%;
width: 100%;
    }

    input{
        margin: 0;
padding: 0;
padding-left: 0vw;
border: 0;
width: 100%;
height: 100%;
outline: none;
}
}
.logoDiv{

        display: flex;
        margin-left: 7vw;
        margin-bottom: 5vh;
        margin-top: 30vh;
          p{
    text-align: center;  
      padding: 0;
    padding-top: 1vh;
    padding-left: 0vh;
    font-size: 22px;
    font-weight: 600;

    width: 30%;
}
img{
}  

}
p{
    width: 75%;
    padding-left: 6vw;
    font-size: 30px;
}
span{
    display: block;
    text-align: center;
}
h1{    
    margin: 2vh 10%

}
form{
    margin: 20vh 0vw;
    margin-right: 20vw;
label{
    display: none;
}
input{
    border: 1px solid #DCDBDD;
    border-radius: 12px;
    padding: 3vh 3vw;
    margin-left: 5%;
    margin-bottom: 2vh;
    font-size: 14px;
    width: 90%;
    outline: none;
}
input::placeholder{
    color: #84818A;
}
}
button{
    color: white;
    background-color: #114D46;
    border: none;
    padding: 2vh 1vw;
    border-radius: 6px;
    margin-left: 25%;
    margin-top: 2vh;
    width: 50%;
    height: fit-content;
}   
.btnDiv{
    display: flex;
    justify-content: center;
    padding-left: 2vw;
    width: 100%;
    button{
    color: white;
    background-color: #114D46;
    border: none;
    padding: 2vh 1vw;
    border-radius: 6px;
    margin-left: 2vw;
    margin-top: 2vh;
    width: 50%;
    height: fit-content;
}  
}
}
`