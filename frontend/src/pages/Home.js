import React, {useState, useEffect} from "react";
import RightFrame from "../Containers/RightFrame";
import { Background, CenterDiv, MainDiv, RightDiv } from "../Containers/BackGround";
// import restaurants from "../hardData/restaurants";
import BigFrame from "../Containers/BigFrame";
import SearchBar from "../Components/SearchBar";
import styled from "styled-components";
import AddRestaurants from "../Modal/AddRestaurants";
import AddBomb from "../Modal/AddBomb";
import AddFavorite from "../Modal/AddFavorite";
import Spin from "../Modal/Spin";
import { gql, useQuery } from "@apollo/client";

const RESTAURANTS_DEFAULT = gql`
    query restaurants{
        restaurants{
            id
            title
            stars
            photo
            link
            tags{
                id
                type
                name
            }
            
        }
    }
`
const SEARCH_RESTAURANTS = gql`
    query searchRestaurants($keyword: String!){
        searchRestaurants(keyword: $keyword){
            id
            title
            stars
            photo
            link
            tags{
                id
                type
                name
            }
        }
    }
`
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
const Button = styled.div`
    padding: 0 5px 0 5px;
    display: flex;
    height: 60px;
    width: 65px;
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

    const [restaurants, setRestaurants] = useState([]);
    //search
    const [keyword, setKeyword] = useState("");
    const {data} = useQuery(RESTAURANTS_DEFAULT, (e)=>{console.log(e)});
    const searchRestaurants = useQuery(SEARCH_RESTAURANTS, {variables: {keyword:""}}, (e)=>{console.log(e)});
    const handleSearch = async()=>{
        console.log("handle search here");
        try{
            searchRestaurants.refetch({keyword:keyword});
            console.log(searchRestaurants.data);
        }catch(e){
            console.log(e);
        }
        
    }


    // console.log(data);
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

    //spin
    const [spinOpen, setSpinOpen] = useState(false);
    const handleSpinOpen = () => {
        setSpinOpen(true)
    };
    const handleSpinClose = () => {
        setSpinOpen(false);
    } 


    
    useEffect(() => {
        if(data){
            if(data.restaurants){
                // console.log("data.restaurants:", data.restaurants);
                setRestaurants(data.restaurants);  
            }
        }
        if(searchRestaurants.data && keyword !== ""){
            if(searchRestaurants.data.searchRestaurants){
                // console.log("data.restaurants:", data.restaurants);
                setRestaurants(searchRestaurants.data.searchRestaurants);  
            }
        }
    }, [data, handleSearch])

    return(
        <Background>
            <CenterDiv>
                <MainDiv style={{ flexDirection:'column'}} 
                // onClick={handleDisplay}
                    >
                    <Row>
                        <SearchBar 
                            keyword={keyword}
                            setKeyword={setKeyword}
                            handleSearch = {handleSearch}>
                        </SearchBar> 
                        <img 
                            src={require("../hardData/add.png")} 
                            style={{ 
                                height: "60px",
                                width: "65px",
                                marginTop: "20px",
                                cursor: "pointer",
                            }}
                            onClick={handleAddRestaurantOpen}
                            alt="Add"
                        />
                    </Row>
                    
                    <Wrap>
                    {
                        restaurants? restaurants.map((item)=>(
                            <BigFrame
                               openAddBomb={handleAddBombOpen}
                               openAddFavorite={handleAddFavoriteOpen}
                               {...item}>

                               </BigFrame>
                        )):null
                    }
                    </Wrap>
                </MainDiv>
                <RightDiv>
                    <RightFrame spin={handleSpinOpen}></RightFrame>
                </RightDiv>
               
            </CenterDiv>
            <AddRestaurants open = {addRestaurantOpen} handleClose={handleAddRestaurantClose}></AddRestaurants>
            <AddBomb open={addBombOpen} handleClose={handleAddBombClose} title = {bombTitle} id = {bombId}></AddBomb>
            <AddFavorite open = {addFavoriteOpen} handleClose={handleAddFavoriteClose} id = {favoriteId} title = {favoriteTitle}></AddFavorite>
            <Spin open={spinOpen} handleClose={handleSpinClose}></Spin>
        </Background>
    )
}


export default Home;
export {Wrap};