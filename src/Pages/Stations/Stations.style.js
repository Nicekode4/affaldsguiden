import { styled } from "styled-components";

export const StationsStyle = styled.section`
display: grid;
grid-template-columns: repeat(1, 1fr);
justify-items: center;

@media screen and (min-width: 768px) {
    margin: 0vh 2vw;
    margin-top: 20vh;
    margin-bottom: 20vh;
    display: grid;
    //Hvis isDetail er false skal grid kun være en column ellers skal den være 3 columns
grid-template-columns: repeat(${props => props.isDetail ? 3 : 1}, 1fr);
justify-items: center;   
}
`