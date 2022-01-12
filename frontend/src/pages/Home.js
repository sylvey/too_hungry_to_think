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
const AddButton = styled.div`
    padding: 0 5px 0 5px;
    display: flex;
    height: 60px;
    width: 65px;
    // max-width:95px
    // min-width:20px;
    background-color: #FFEDE9;
    border-radius: 30px;
    margin-top: 20px;
    align-items: center;
    justify-content:center;
    padding-left: 10px;
    border: 1px solid #BA905F;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size:25px;
    color:red;
    :hover{
        opacity:0.85;
        cursor:pointer;
        transition-duration:0.2s;
    }
    @media(max-width:700px){ 
        width: 60px;
`
function Home(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const [display, setDisplay] = React.useState(false);
    // const handleDisplay = () => {
    //     setDisplay(true);
    //     console.log(display);
    // }

    return(
        <Background>
            <CenterDiv>
                <MainDiv style={{ flexDirection:'column'}} 
                // onClick={handleDisplay}
                    >
                    <Row>
                        <SearchBar></SearchBar> 
                        <AddButton onClick={handleOpen}>Add!</AddButton> 
                            {/* <img src={require("../hardData/add.png")} 
                                width={"30px"} height={"30px"} 
                                style={{marginTop: "20px", marginLeft: "5px"}}
                                onClick={handleOpen}></img> */}
                    </Row>
                    
                    <Wrap>
                    {
                        restaurants.map((item)=>(
                            <BigFrame
                            //  href = "/Information"
                             {...item}></BigFrame>
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