import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Stars from "../Components/star";
import IconTint from "react-icon-tint";
import { usePocketHook } from "../hook/pocketProvider";

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
`
const UpperRight = styled.div`
    display: flex;
    flex: 3;
    flex-direction: column;
    //background-color: yellow;

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


const BigFrame = ({id, name, image, star, tags})=>{
    console.log(JSON.parse(window.sessionStorage.getItem('pocketList')).find(item=>item.id === id)? true: false);
    const {pocket, saveRestaurant, deleteRestaurant } = usePocketHook();
    const [chosen, setChosen] = useState(pocket.find(item=>item.id === id)? true: false);

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
        setChosen(pocket.find(item=>item.id === id)? true: false);
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
                        <Tag style={{backgroundColor: item.type === "food"? "#147EFA": item.type === "place"? "#FF0000": "#14FA7E"}}>
                            {item.name}
                        </Tag>
                    ))
                }
                </Row>
                
                <Row>
                    <StarAndBomb>
                        {/* <img style={{ cursor: 'pointer' }} width={"30px"} height={"30px"} src={require("../hardData/emojione_star.png")}/>
                        <img style={{ cursor: 'pointer' }} width={"30px"} height={"30px"} src={require("../hardData/emojione-monotone_bomb.png")}/> */}
                        <img style={{ cursor: 'pointer' }} width={"30px"} height={"30px"} src={require("../img/star.png")}/>
                        <img style={{ cursor: 'pointer' }} width={"30px"} height={"30px"} src={require("../img/bomb.png")}/>
                    </StarAndBomb>
                    <More>
                        <p style={{display: "flex", marginRight: "2px", marginTop: "12px"}}>more</p>
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
                        <Tag style={{backgroundColor: item.type === "food"? "#147EFA": item.type === "place"? "#FF0000": "#14FA7E"}}>
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
                        <p style={{display: "flex", marginRight: "2px", marginTop: "12px"}}>more</p>
                        <img width={"10px"} height={"10px"} src={require("../hardData/more.png")}></img>
                    </More>
                </Row>
            </Lower>
        </Block>
    )
}




export default BigFrame;
export {BigFrame4Right}