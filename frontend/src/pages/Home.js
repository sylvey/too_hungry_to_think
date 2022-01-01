import React from "react";
import RightFrame from "../Containers/RightFrame";
import { Background, CenterDiv, MainDiv, RightDiv } from "../Containers/BackGround";
import restaurants from "../hardData/restaurants";
import BigFrame from "../Containers/BigFrame";
import SearchBar from "../Components/SearchBar";
import styled from "styled-components";

const Wrap = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
`

function Home(){
    return(
        <Background>
            <CenterDiv>
                <MainDiv style={{ flexDirection:'column'}}>
                    <SearchBar></SearchBar>
                    <Wrap>
                    {
                        restaurants.map((item)=>(
                            <BigFrame {...item}></BigFrame>
                        ))
                    }
                    </Wrap>
                </MainDiv>
                <RightDiv>
                    <RightFrame></RightFrame>
                </RightDiv>
               
            </CenterDiv>
        </Background>
    )
}


export default Home;