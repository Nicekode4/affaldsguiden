import styled from "styled-components";

export const FooterStyle = styled.footer`
height: auto;
background-color: #114D46;
color: white;
text-align: center;

p{
    padding: 2vh 0vw;
}

.logo{
    padding: 2vh 0vw;
    padding-left: 30%;
    display: flex;
    img{
        margin-right: 2vw; 
        height  :6vh ;
    }

    p{
        font-weight: bold;
    }
}
.text{

}
.copyright{

}
.toTop{

}

@media screen and (min-width: 768px) {
    height: auto;
background-color: #114D46;
color: white;
text-align: start;
padding-left: 5%;
display: grid;
grid-template-columns: 80% 20%;

p{
    padding: 2vh 0vw;
    width: 50%;
}

.logo{
    padding: 2vh 0vw;
    display: flex;
    img{
        margin-right: 2vw; 
        height  :6vh ;
    }

    p{
        font-weight: bold;
    }
}
.text{

}
.copyright{

}
.toTop{
    margin-top: 21vh;
    display: flex;
p{
    text-align: end;
    margin-right: 1vw;

}
img{
    padding-top: 2vh;
    height: 3vh;
    width: auto;
}
}   
}
`