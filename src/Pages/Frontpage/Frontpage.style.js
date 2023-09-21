import styled from "styled-components";

export const FrontpageStyle = styled.section`

button{
    color: white;
    background-color: #114D46;
    border: none;
    padding: 2vh 5vw;
    border-radius: 6px;
}

.CTASec{
    margin-top: 2vh;
    margin-bottom: 2vh;
    margin-right: 2vh;
    background-color: #D8EADB;
    border-radius: 6px;
    padding: 2vh 20vw;
    h1{
        color: #222A41;
        text-align: center;
        margin-bottom: 3vh;
    }
    button{
    color: white;
    background-color: #114D46;
    border: none;
    padding: 2vh 5vw;
    border-radius: 6px;
    margin-left: 1vw;
}

}
.desktopImg{
    display: none;
}
.mobileImg{
    display: block;
}
.textSec{
    margin-left: 2vw;
margin-right: 2vw;
    text-align: center;
    strong {
      position: relative;
  }

  strong::before {
      /* Highlight color */
      background-color: #62BB65;
      opacity: 50%;

      content: "";
      position: absolute;
      width: calc(100% + 4px);
      height: 20%;
      left: -2px;
      bottom: 8px;
      z-index: -1;
  }
  
   h2{
    color: #222A41;
    margin-bottom: 2vh;
    margin-top: 2vh;
}

p{
    color: #222A41;
    margin-bottom: 2vh;
    margin-top: 2vh;
}

button{
    color: white;
    background-color: #114D46;
    border: none;
    padding: 2vh 5vw;
    border-radius: 6px;
    margin-bottom: 2vh;
    margin-top: 2vh;
}

img{
    width: 100%;
} 
}
.sliderSec{
    display: none;
}
@media screen and (min-width: 768px) {
    .sliderSec{
        display: grid;
        grid-template-columns: 10% 80% 10%;
        width: 100%;
            height: 60vh;
        background-size: cover;
        margin: 0;
        padding: 0;
        margin-bottom: 20vh;
        button{
    color: white;
    width: fit-content;
    height: 5vh;
    margin-top: 30vh;
    margin-left: 4vh;
    border-radius: 50px;
    background-color: none;
    border: none;
    padding: 0vh 1.5vw;
}
    }


.CTASec{
    position: absolute;
    top: 500px;
    text-align: center;
    margin-top: 2vh;
    margin-bottom: 2vh;
    margin-left: 30%;
    background-color: #D8EADB;
    border-radius: 6px;
    padding: 4vh 4vw;
    width: 35%;
    article{
        width: max-content;
         button{
    color: white;
    background-color: #114D46;
    border: none;
    padding: 2vh 5vw;
    border-radius: 6px;
    margin-left: 1vw;
}   
    }
    h1{
        color: #222A41;
        text-align: center;
        margin-bottom: 3vh;
    }


}
.mobileImg{
    display: none;
    width: 100%;
    height: auto;
}

.desktopImg{
    display: block;
    width: 100%;
    height: auto;
}
.textSec{
    text-align: start;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20vh;
    strong {
        display: inline-block;
      position: relative;
      font-weight: 400;
  }

  strong::before {
      /* Highlight color */
      background-color: #62BB65;
      opacity: 50%;

      content: "";
      position: absolute;
      width: calc(100% + 20px);
      height: 20%;
      left: -2px;
      bottom: 25px;
      z-index: -1;
  }
  
   h2{
    color: #222A41;
    margin-bottom: 2vh;
    margin-top: 2vh;
    font-size: 74px;
    font-weight: 400;
}

p{
    color: #222A41;
    margin-bottom: 2vh;
    margin-top: 2vh;
}

button{
    color: white;
    background-color: #114D46;
    border: none;
    padding: 2vh 5vw;
    border-radius: 6px;
    margin-bottom: 2vh;
    margin-top: 2vh;
}

img{
    width: 100%;
    height: auto;
} 

}
}

`