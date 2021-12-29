import React from "react";
import RightFrame from "../Containers/RightFrame";
import { Background, CenterDiv, MainDiv, RightDiv } from "../Containers/BackGround";
import restaurants from "../hardData/restaurants";
import BigFrame from "../Containers/BigFrame";

function Home(){
    return(
        <Background>
            <CenterDiv>
                <MainDiv style={{flexWrap: 'wrap'}}>
                    {
                        restaurants.map((item)=>(
                            <BigFrame {...item}></BigFrame>
                        ))
                    }
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