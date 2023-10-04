import styled from "styled-components";

export const SignUpStyle = styled.section`
margin: 10vh 2vw;
height: auto;
display: grid;
grid-template-columns: repeat(1, 1fr);
justify-items: center;
.passwordDiv{
    margin-top: 2vh;
    display: grid;
    grid-template-columns: 80% 10%;
    border: 1px solid #DCDBDD;
    width: 25vw;
    border-radius: 12px;
    padding: 3vh 3vw;
    padding-top: 0;
    margin-left: 5%;
    margin-bottom: 2vh;
    font-size: 14px;
    width: 90%;
    height: max-content;
    img{
        margin: 0;
        margin-left: 2vw;
        margin-top: 1.5vh;
        
padding: 0;
border: 0;
height: 100%;
width: 100%;
    }

    input{
        margin: 0;
padding: 1vh 0vw;
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
    width: 100%;
    font-size: 20px;
}
img{
    padding-left: 40vw;
}
h1{    
    margin: 2vh 5%;
    text-align: center;

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
    margin-bottom: 2vh;
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
a{
    display: block;
    text-decoration: none;
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

.logoDiv{
img{
    padding-left: 37vw;
}

}
.loggedInDiv{
    height: fit-content;
    width: 60%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    p{
        margin: 0;
        padding: 0;
    }
}
@media screen and (min-width: 768px) {

    margin: 2vh 2vw;
    height: auto;
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
    margin-top: 0;
    margin-left: 5%;
    margin-bottom: 2vh;
    padding-bottom: 2vh;
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
        margin-top: 40vh;
        img{
            padding-left: 10vw;
            margin-right: 1vw;
        }
          p{
    text-align: center;  
      padding: 0;
    padding-top: 1vh;
    padding-left: 0vh;
    font-size: 22px;
    font-weight: 600;

    width: 30%;
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
    margin: 2vh 10%;
    text-align: left;

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

a{
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
.loggedInDiv{
    margin-left: 65%;
    margin-top: 30%;
    height: fit-content;
    width: 60%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    p{
        margin: 0;
        padding: 0;
    }
}
}
`