import * as React from 'react';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import "../App.css";
import { useState, useEffect } from 'react';
import Stars from "../Components/star";
import IconTint from "react-icon-tint";
import { usePocketHook } from "../hook/pocketProvider";



const BigBlock = styled.div`
    width:600px;
    height:600px;
    display: flex;
    flex-direction: column;
    background-color: #FFEAA1;
    margin-bottom: 80px;
    border-radius: 20px;
//    align-items: center;
//     justify-content: center;

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
    font-size: 21px; 
    color:red;
    //height: 20%;
`

const Lower = styled.div`
    display: flex;
    height:400px;
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

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    //justify-content: center;
    // background-color: red;
`
const CommentBlock = styled.div`
    width:100px;
    height:50px;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-bottom: 80px;
    border-radius: 20px;
//    align-items: center;
//     justify-content: center;

`



export default function Page(props) {
    console.log(props.props.location.state.id);
    const id = props.props.location.state.id;
    const name = props.props.location.state.name;
    const image = props.props.location.state.image;
    const star = props.props.location.state.star;
    const tags = props.props.location.state.tags;

    const [chosen, setChosen] = useState(false);
    const { pocket, saveRestaurant, deleteRestaurant } = usePocketHook();

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
    return(
            <BigBlock>
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
                        <Title>
                            {name}
                        </Title>
                        <Stars num={star} style= {{ width: "50px",height: "10px"}}></Stars>
                    {/* <Row>
                            {
                            tags.map((item)=>(
                                <Tag style={{backgroundColor: item.type === "food"? "#147EFA": item.type === "place"? "#FF0000": "#14FA7E"}}>
                                    {item.name}
                                </Tag>
                            ))
                        }
                        </Row> */}
                        <StarAndBomb>
                            <img style={{ cursor: 'pointer' }} width={"30px"} height={"30px"} src={require("../hardData/emojione_star.png")}/>
                            <img style={{ cursor: 'pointer' }} width={"30px"} height={"30px"} src={require("../hardData/emojione-monotone_bomb.png")}/>
                        </StarAndBomb>
                    
                    </UpperRight>
                    
                </Upper>
                <Lower>
                    <CommentBlock>
                        <Stars num={star} style= {{ width: "50px",height: "10px"}}></Stars>

                        <p>123</p>

                    </CommentBlock>
                </Lower>
            </BigBlock>
        )
}