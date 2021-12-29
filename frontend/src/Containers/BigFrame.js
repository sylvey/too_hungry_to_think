import React from "react";
import styled from "styled-components";
import Stars from "../Components/star";

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

const AddButton = 
    <img src={require("../hardData/check-circle.png")}
         width={"20px"}
         height={"20px"}
style={{display: "flex", alignSelf: 'end', marginRight: "10px"}}></img>

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

const More = styled.div`
    display:flex;
    flex-direction: row;
    align-self: end;
    //background-color: red;
    align-items: center;
    //justify-content: center;
    margin-right: 10px;
`
const Row = styled.div`
    display: flex;
    flex-direction: row;
`


const BigFrame = ({name, image, star, tags})=>{
    console.log(name);
    return(
        <Block>
            <Upper>
                <UpperLeft>
                    <Img src = {image}></Img>
                </UpperLeft>
                <UpperRight>
                    {/* <div style={{height:"20px"}}></div> */}
                    {AddButton}
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
                
                <More>
                    <p style={{display: "flex", marginRight: "2px", marginTop: "12px"}}>more</p>
                    <img width={"10px"} height={"10px"} src={require("../hardData/more.png")}></img>
                </More>

            </Lower>
        </Block>
    )
}


export default BigFrame;