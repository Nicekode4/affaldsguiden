import styled from "styled-components";

export const LoginStyle = styled.section`
margin: 2vh 2vw;
display: grid;
grid-template-columns: repeat(1, 1fr);
justify-items: center;
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
    margin-left: 25%;
    margin-top: 2vh;
    width: 50%;
}
`