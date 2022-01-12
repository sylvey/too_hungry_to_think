import React, {useState} from "react";
import RightFrame from "../Containers/RightFrame";
import { Background, CenterDiv, MainDiv, RightDiv } from "../Containers/BackGround";
import restaurants from "../hardData/restaurants";
import BigFrame from "../Containers/BigFrame";
import SearchBar from "../Components/SearchBar";
import styled from "styled-components";
import AddRestaurants from "../Modal/AddRestaurants";
import AddBomb from "../Modal/AddBomb";
import AddFavorite from "../Modal/AddFavorite";


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
    //for add restaurant block
    const [addRestaurantOpen, setAddRestaurantOpen] = useState(false);
    const handleAddRestaurantOpen = () => setAddRestaurantOpen(true);
    const handleAddRestaurantClose = () => setAddRestaurantOpen(false);

    //for add collection block
    const [favoriteId, setFavoriteId] = useState("");
    const [favoriteTitle, setFavoriteTitle] = useState("");
    const [addFavoriteOpen, setAddFavoriteOpen] = useState("");
    const handleAddFavoriteOpen = (id, title) => {
        setFavoriteId(id);
        setFavoriteTitle(title);
        setAddFavoriteOpen(true);
    }
    const handleAddFavoriteClose = () =>{
        setAddFavoriteOpen(false);
    }


    //for add bomb block
    const [bombId, setBombId] = useState("");
    const [bombTitle, setBombTitle] = useState("");
    const [addBombOpen, setAddBombOpen] = useState(false);
    const handleAddBombOpen = (id, title) => {
        setBombId(id);
        setBombTitle(title);
        setAddBombOpen(true)
    };
    const handleAddBombClose = () => {
        setAddBombOpen(false);
    } 




    return(
        <Background>
            <CenterDiv>
                <MainDiv style={{ flexDirection:'column'}} 
                // onClick={handleDisplay}
                    >
                    <Row>
                        <SearchBar></SearchBar> 
                        <AddButton onClick={handleAddRestaurantOpen}>Add!</AddButton> 
                    </Row>
                    
                    <Wrap>
                    {
                        restaurants.map((item)=>(
                            <BigFrame
                               openAddBomb={handleAddBombOpen}
                               openAddFavorite={handleAddFavoriteOpen}
                               {...item}></BigFrame>
                        ))
                    }
                    </Wrap>
                </MainDiv>
                <RightDiv>
                    <RightFrame></RightFrame>
                </RightDiv>
               
            </CenterDiv>
            <AddRestaurants open = {addRestaurantOpen} handleClose={handleAddRestaurantClose}></AddRestaurants>
            <AddBomb open={addBombOpen} handleClose={handleAddBombClose} title = {bombTitle} id = {bombId}></AddBomb>
            <AddFavorite open = {addFavoriteOpen} handleClose={handleAddFavoriteClose} id = {favoriteId} title = {favoriteTitle}></AddFavorite>
        </Background>
    )
}


export default Home;
export {Wrap};