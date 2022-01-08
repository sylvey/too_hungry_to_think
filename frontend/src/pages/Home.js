import React from "react";
import RightFrame from "../Containers/RightFrame";
import { Background, CenterDiv, MainDiv, RightDiv } from "../Containers/BackGround";
import restaurants from "../hardData/restaurants";
import BigFrame from "../Containers/BigFrame";
import SearchBar from "../Components/SearchBar";
import styled from "styled-components";
import AddRestaurants from "../Modal/AddRestaurants";

const Wrap = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
`
const Row = styled.div`
    display: flex;
    width: 100%;
    //justify-content: center;
    align-items: center;
    flex-direction: row;
`

function Home(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <Background>
            <CenterDiv>
                <MainDiv style={{ flexDirection:'column'}}>
                    <Row>
                        <SearchBar></SearchBar> 
                        <img src={require("../hardData/add.png")} 
                                width={"30px"} height={"30px"} 
                                style={{marginTop: "20px", marginLeft: "5px"}}
                                onClick={handleOpen}></img>
                    </Row>
                    
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
            <AddRestaurants open = {open} handleClose={handleClose}></AddRestaurants>
        </Background>
    )
}


export default Home;
export {Wrap};