import styled from "styled-components";

export const TicketStyle = styled.section`
 .textDiv{
    
        h2{
            text-align: center;
            text-transform: capitalize;
            font-family: 'Playfair Display', serif;
        color:  #D39D5B;
        font-size: 65px;
        font-weight: 100;
        }
        h3{
            text-align: center;
            margin: 0;
            padding: 0;
        }
        p{
            text-align: center;
            margin: 0;
            padding: 0;
            margin-bottom  :5vh ;
        }
        text-align: end;
        text-transform: uppercase;
        label{
            margin-right: 1vw;
            font-family: Titillium Web;
        }
        input{
            color: #D39D5B;
            text-transform: uppercase;
            padding: 1vh 1vw;
            margin-bottom: 1vh;
        }
.inputDiv{
    display: grid;
    grid-template-columns: 12% 50%;
    margin-left: 20%;
}
    .streetDiv{
        margin-left: 20%;
        display: grid;
        grid-template-columns: 12% 25% 25%;
            input:last-of-type{             
        border-left: none;
    }
    input:first-of-type{
        border-right: none;
    }

    }

    .cityDiv{
        margin-left: 20%;
        display: grid;
    grid-template-columns: 12% 25% 25%;
    input:last-of-type{             
        border-left: none;
    }
    input:first-of-type{
        border-right: none;
    }
    }
    .numSelection{
        margin-left: 35%;
        display: grid;
        grid-template-columns: repeat(5, auto);
        margin-top: 10vh;
        margin-right: 0;
        padding-right: 0;
        justify-items: end;
        width: 25%;
        
        label{
            text-align: end;
            padding-top: 1vh;
        }
        button{
            
            text-align: center;
            width: 3vw;
            height: 5vh;
            border: none;
            background-color: #DEDEDE;
        }
        p{
            padding: 1vh 0vw;
            margin: 0;
            
        }
        div{
            margin: 0;
            text-align: start;
            h4{
                font-size: 20px;
                margin: 0;
                padding: 0;
                height: 3vh;
            }
            p{
                margin-top: 0;
                padding: 0;
                font-size: 9px;
            }
        }
    }
}
`