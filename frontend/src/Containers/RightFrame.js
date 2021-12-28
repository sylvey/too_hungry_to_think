import React from "react";
import styled from "styled-components";

const Block = styled.div`
    display: flex;
    flex-direction: column;
    width: 190px;
    background-color: #FFEAA1;
    //height: 200px;
    margin: 20px;
    border-radius: 20px;
   // align-items: center;
    //justify-content: center;
`
const Button = styled.div`
    display: flex;
    width:60px;
    background-color: #F9636C;
    height: 30px;
    border-radius: 20px;
    align-self: center;
    justify-content: center;
    align-content: center;
    font-size: 20px;
    color: white;
    margin-bottom: 8px;
`
const Title = styled.div`
    display: flex;
    color: #000000;
    margin: 8px;
`

function RightFrame({restaurants}){
    return(
        <Block>
            <Title>RAMDOM</Title>
            <Button>GO</Button>
        </Block>
    )
}


export default RightFrame;