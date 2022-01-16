import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Stars from "../Components/star";
import IconTint from "react-icon-tint";
import { usePocketHook } from "../hook/pocketProvider";
import restaurants from "../hardData/restaurants";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_RESTARURANT = gql`
    query restaurant($restaurantId: ID!){
        restaurantDetail(restaurantId: $restaurantId){
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

const Block = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFEAA1;
    width: 200px;
    height: 170px;
    margin: 20px;
    border-radius: 20px;
   // align-items: center;
    //justify-content: center;
`
const BlockWide = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFEAA1;
    width: 300px;
    // height: 170px;
    margin: 20px;
    border-radius: 20px;
   // align-items: center;
    //justify-content: center;  
`
const Upper = styled.div`
    display: flex;
    flex-direction: row;
    //flex: 3;
    height: 60%;
    width: 100%;

    //background-color: red;
     justify-content: center;
     align-items: center;
`
const UpperLeft = styled.div`
    display: flex;
    flex: 4;
    justify-content: center;
    align-items: center;
    // background-color: red;
`
const UpperRight = styled.div`
    display: flex;
    flex: 3;
    flex-direction: column;
    // background-color: yellow;

`
const Img = styled.img`
    margin: 10px;
    width: 90px;
    height: 90px;
`
const AddButton = styled.img`
    display: flex;
    align-self: end;
    margin-right: 10px;
`
const Title = styled.h4`
    font-size: 15px; 
    //height: 20%;
`
const Lower = styled.div`
    display: flex;
    height: 40%;
    flex-direction: column;
   // background-color: red;
    padding-left: 10px;
`
const Tag = styled.div`
    display: flex;
    height: 15px;
    font-size:5px;
    white-space: nowrap;
    border-style: solid;
    border-width: 1px;
    border-radius: 7px;
    margin: 5px;
    color: white;
    border-color: #BC915F; 
    padding-left: 7px;
    padding-right: 7px;
    
`
const StarAndBomb = styled.div`
    display:flex;
    flex: 8; 
    //background-color: red;
    align-items: center;
`
const More = styled.div`
    display:flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
     margin-right: 10px;
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    //justify-content: center;
    // background-color: red;
`


const BigFrame = ({id, title, photo, star, tags, openAddBomb, openAddFavorite})=>{
    // console.log(JSON.parse(window.sessionStorage.getItem('pocketList')).find(item=>item.id === id)? true: false);
    const {pocket, saveRestaurant, deleteRestaurant } = usePocketHook();
    const [chosen, setChosen] = useState(pocket? (pocket.find(item=>item.id === id)? true : false): false);

    // const imageQuery = useQuery(IMAGE, {variables:{imageId: photo}});
    // const imageQuery = useQuery(IMAGE, { variables:{keyword: tag}}, (e)=>{console.log(e)})
    const handleCheck = ()=>{
        setChosen(!chosen);
    }

    useEffect(()=>{
        if(chosen){
            saveRestaurant({id, name:title, image:photo, star, tags});
        }
        else{
            deleteRestaurant(id);
        }
        // console.log(name);
    },[chosen])

    useEffect(()=>{
        if(pocket){
            setChosen(pocket.find(item=>item.id === id)? true: false);
        }
    },[pocket])


    console.log(tags);

    return(
        <Block>
            <Upper>
                <UpperLeft>
                    <Img src = {photo}></Img>
                </UpperLeft>
                <UpperRight>
                    <AddButton 
                        src={chosen?require("../hardData/check-circle.png"):require("../hardData/check-circle-empty.png")}
                        width={"20px"}
                        height ={"20px"}
                        onClick={handleCheck}
                    ></AddButton>
                    <Title>{title}</Title>
                    <Stars num={star} style= {{ width: "50px",height: "10px"}}></Stars>
                </UpperRight>
                
            </Upper>
            <Lower>
                <Row>
                {
                    tags.map((item)=>(
                        <Tag style={{
                            backgroundColor: item.type === "food"? "#147EFA": 
                                      item.type === "place"? "#FF0000": 
                                            item.type === "takeInOrOut"?"#14FA7E": "yellow"}}
                            >
                            {item.name}
                        </Tag>
                    ))
                }
                </Row>
                
                <Row>
                    <StarAndBomb>
                        <img style={{ cursor: 'pointer' }} width={"30px"} height={"30px"} src={require("../img/star.png")} onClick={()=>openAddFavorite(id, title)}/>
                        <img style={{ cursor: 'pointer' }} width={"30px"} height={"30px"} src={require("../img/bomb.png")} onClick={()=>openAddBomb(id, title)}/>
                    </StarAndBomb>
                    <More>
                    <Link 
                        style={{display: "flex", marginRight: "6px", marginBottom: "8px"}}
                        to={{pathname: "/Information",
                                state: {
                                id: id
                            }
                        }}
                    >more</Link>
                        <img width={"10px"} height={"10px"} src={require("../hardData/more.png")}></img>
                    </More>
                </Row>
            </Lower>
        </Block>
    )
}

const BigFrame4Right = ({id, name, image, star, tags})=>{
    // console.log(name);
    const {deleteRestaurant } = usePocketHook();

    const handleDelete = ()=>{
        deleteRestaurant(id);
    }

    return(
        <Block>
            <Upper>
                <UpperLeft>
                    <Img src = {image}></Img>
                </UpperLeft>
                <UpperRight>
                    <AddButton 
                        src={require("../hardData/deletion.png")}
                        width={"20px"}
                        height ={"20px"}
                        onClick={handleDelete}
                    ></AddButton>
                    <Title>{name}</Title>
                    <Stars num={star} style= {{ width: "50px",height: "10px"}}></Stars>
                </UpperRight>
                
            </Upper>
            <Lower>
                <Row>
                {
                    tags.map((item)=>(
                        <Tag style={{
                            backgroundColor: item.type === "food"? "#147EFA": 
                                      item.type === "place"? "#FF0000": 
                                            item.type === "takeInOrOut"?"#14FA7E": "yellow"}}
                            >
                            {item.name}
                        </Tag>
                    ))
                }
                </Row>
                <Row>
                    <StarAndBomb>
                        <img width={"30px"} height={"30px"} src={require("../hardData/emojione_star.png")}/>
                        <img width={"30px"} height={"30px"} src={require("../hardData/emojione-monotone_bomb.png")}/>
                        
                    </StarAndBomb>
                    <More>
                    <Link 
                        style={{display: "flex", marginRight: "6px", marginBottom: "8px"}}
                        to={{pathname: "/Information",
                                state: {
                                id: id
                            }
                        }}
                    >more</Link>
                        <img width={"10px"} height={"10px"} src={require("../hardData/more.png")}></img>
                    </More>
                </Row>
            </Lower>
        </Block>
    )
}

const BigFrame4Modal = ({id})=>{

    const [restaurant, setRestaurant] = useState(null);
    const {data, refetch} = useQuery(GET_RESTARURANT,  { variables:{restaurantId: id}}, (e)=>{console.log(e)})
    useEffect(() => {
        refetch({restaurantId: id});
    }, [])

    useEffect(()=>{
        console.log("data", data);
        if(data){
            if(data.restaurantDetail){
                console.log(data.restaurantDetail);
                setRestaurant(data.restaurantDetail);
            }
        }
    }, [data])

    return(
        <>
        {
            restaurant? (
                <BlockWide>
                    <Upper>
                        <UpperLeft style={{flex: 1}}>
                            <Img src = {restaurant.photo}></Img>
                        </UpperLeft>
                        <UpperRight style={{flex: 3}}>
                            <Title style={{marginBottom:"5px"}}>{restaurant.title}</Title>
                            <Stars num={restaurant.star} style= {{width: "50px",height: "10px"}}></Stars>
                            <Row>
                            {
                                restaurant.tags.map((item)=>(
                                    <Tag style={{
                                        backgroundColor: item.type === "food"? "#147EFA": 
                                                  item.type === "place"? "#FF0000": 
                                                        item.type === "takeInOrOut"?"#14FA7E": "yellow"}}
                                        >
                                        {item.name}
                                    </Tag>
                                ))
                            }
                            </Row>
                            <More style={{  width: "20%", justifySelf:"end", alignSelf:"end", height:"2px", marginRight: "20px"}}>
                            <Link 
                        style={{display: "flex", marginRight: "6px", marginBottom: "8px"}}
                        to={{pathname: "/Information",
                                state: {
                                id: id
                            }
                        }}
                    >more</Link>
                                <img width={"10px"} height={"10px"} src={require("../hardData/more.png")}></img>
                            </More>
                        </UpperRight>

                    </Upper>
                </BlockWide>
            ):null
        }
        
        
        </>
    )
}

const BigFrame4Personal = ({id, name, image, star, tags})=>{
    // console.log(JSON.parse(window.sessionStorage.getItem('pocketList')).find(item=>item.id === id)? true: false);
    const {pocket, saveRestaurant, deleteRestaurant } = usePocketHook();
    const [chosen, setChosen] = useState(pocket? (pocket.find(item=>item.id === id)? true : false): false);

    const handleCheck = ()=>{
        setChosen(!chosen);
    }

    useEffect(()=>{
        if(chosen){
            saveRestaurant({id, name, image, star, tags});
        }
        else{
            deleteRestaurant(id);
        }
    },[chosen])

    useEffect(()=>{
        if(pocket){
            setChosen(pocket.find(item=>item.id === id)? true: false);
        }
    },[pocket])


    return(
        <Block>
            <Upper>
                <UpperLeft>
                    <Img src = {image}></Img>
                </UpperLeft>
                <UpperRight>
                    <AddButton 
                        src={chosen?require("../hardData/check-circle.png"):require("../hardData/check-circle-empty.png")}
                        width={"20px"}
                        height ={"20px"}
                        onClick={handleCheck}
                    ></AddButton>
                    <Title>{name}</Title>
                    <Stars num={star} style= {{ width: "50px",height: "10px"}}></Stars>
                </UpperRight>
                
            </Upper>
            <Lower>
                <Row>
                {
                    tags.map((item)=>(
                        <Tag style={{backgroundColor: item.type === "food"? "#147EFA": item.type === "place"? "#FF0000": item.type === "takeInOrOut"?"#14FA7E": "yellow"}}>
                            {item.name}
                        </Tag>
                    ))
                }
                </Row>
                
                <Row>
                    <StarAndBomb>
                        <img style={{ cursor: 'pointer' }} width={"30px"} height={"30px"} src={require("../img/star.png")}/>
                        <img style={{ cursor: 'pointer' }} width={"30px"} height={"30px"} src={require("../img/bomb.png")}/>
                    </StarAndBomb>
                    <More>
                    <Link 
                        style={{display: "flex", marginRight: "6px", marginBottom: "8px"}}
                        to={{pathname: "/Information",
                                state: {
                                id: id
                            }
                        }}
                    >more</Link>
                        <img width={"10px"} height={"10px"} src={require("../hardData/more.png")}></img>
                    </More>
                </Row>
            </Lower>
        </Block>
    )
}




export default BigFrame;
export {BigFrame4Right};
export {BigFrame4Modal};
export {BigFrame4Personal};
export {Tag};