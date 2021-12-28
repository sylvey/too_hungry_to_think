import React from "react";
import RightFrame from "../Containers/RightFrame";
import { Background, CenterDiv, MainDiv, RightDiv } from "../Containers/BackGround";

function Home(){
    return(
        <Background>
            <CenterDiv>
                <MainDiv>
                    
                </MainDiv>
                <RightDiv>
                    <RightFrame></RightFrame>
                </RightDiv>
               
            </CenterDiv>
           
            {/* <RightFrame></RightFrame> */}
            {/* <RightFrame></RightFrame> */}
        </Background>
    )
}


export default Home;