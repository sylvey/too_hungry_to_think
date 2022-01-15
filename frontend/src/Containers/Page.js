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
    border-radius: 20px;
//    align-items: center;
//     justify-content: center;
    @media(max-width:1200px){ 
        height:60em;
    }
`

const Upper = styled.div`
    display: flex;
    flex-direction: row;
    height: 50%;
    width: 100%;
    // justify-content: center;
    margin-top:10px;
    @media(max-width:1200px){ 
        flex-direction: column;
        height: 51%;
    }

`
const UpperLeft = styled.div`
    margin-top:50px;
  //  background-color: blue;
    display: flex;
    //flex: 4;
    height: 50%;
    width: 50%;
    justify-content: center;
    align-items: center;
    @media(max-width:1200px){ 
        width: 100%;
        height: 15%;
    }
`
const UpperRight = styled.div`
    // margin-left:15px;
    //background-color: green;
    display: flex;
    flex: 3;
    flex-direction: column;
    //background-color: yellow;
    height: 85%;
    width: 50%;
    @media(max-width:1200px){ 
        width: 100%;
        height: 15%;
    }
`

const Img = styled.img`
    margin: 10px;
    // width: 175px;
    height: 175px;
`
const AddButton = styled.img`
    display: flex;
    align-self: end;
    margin-right: 10px;
`

const Title = styled.h4`
    font-size: 45px; 
    color:red;
    //height: 20%;
    margin-top: 30px;
    @media(max-width:1200px){ 
        margin-top: 55px;
    }
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
    height: 30px;
    font-size:15px;
    border-style: solid;
    border-width: 1px;
    border-radius: 17px;
    margin: 5px;
    color: white;
    border-color: #BC915F; 
    padding-left: 7px;
    padding-right: 7px;
    width:60px;
    align-items: center;
    justify-content: center;
    
`

const StarAndBomb = styled.div`
    display:flex;
    flex: 8; 
    //background-color: red;
    //align-items: center;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    //align-content: center;
    //justify-content: center;
    // background-color: red;
`
const CommentBlock = styled.div`
    width:90%;
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

    // const id = props.match.params.id;
    // const name = props.props.match.params.name;
    // const image = props.props.match.params.image;
    // const star = props.props.match.params.star;
    // const tags = props.props.match.params.tags;
    // console.log(id);
    // console.log(name);
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
                <AddButton 
                            src={chosen?require("../hardData/check-circle.png"):require("../hardData/check-circle-empty.png")}
                            width={"20px"}
                            height ={"20px"}
                            style={{marginTop:"10px"}}
                            onClick={handleCheck}/>
                <Upper>
                    <UpperLeft>
                        <Img src = {image}></Img>
                    </UpperLeft>
                    <UpperRight>
                        <Title>
                            {name}
                        </Title>
                        <Stars num={star} style= {{ width: "200px",height: "100px",marginTop:"-40px"}}></Stars>
                        <Row>
                            {
                            tags.map((item)=>(
                                <Tag style={{backgroundColor: item.type === "food"? "#147EFA": item.type === "place"? "#FF0000": "#14FA7E"}}>
                                    {item.name}
                                </Tag>
                            ))
                        }
                        </Row>
                        <StarAndBomb>
                            <img style={{ cursor: 'pointer' }} width={"30px"} height={"30px"} src={require("../hardData/emojione_star.png")}/>
                            <img style={{ cursor: 'pointer' }} width={"30px"} height={"30px"} src={require("../hardData/emojione-monotone_bomb.png")}/>
                        </StarAndBomb>
                    </UpperRight>
                </Upper>
                <Row style={{marginTop: "-50px"}}>
                    <p>Address</p>
                </Row>

                <Lower>
                    <CommentBlock>
                        <Stars num={1} style= {{ width: "50px",height: "10px"}}></Stars>

                        <p>123</p>

                    </CommentBlock>
                </Lower>
            </BigBlock>
        )
}