import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {BigFrame4Right} from "./BigFrame";
import {Wrap} from "../pages/Home"
import restaurantsSelected from "../hardData/restaurantsSelected";
import { usePocketHook } from "../hook/pocketProvider";

const Block = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;

    background-color: #FFFFE9;
    //height: 200px;
    margin-top: 170px;
    margin-bottom: 170px;
    border-radius: 20px;
    border-style: solid;
    border-width: 1px;
    border-color: #BA905F;
    // align-items: center;
    //justify-content: center;
`
const BlockSelected = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;

    background-color: #FFFFE9;
    height: auto;
    margin-bottom: 170px;
    margin-top: 170px;
    border-radius: 20px;
    border-style: solid;
    border-width: 1px;
    border-color: #BA905F;
    // justify-content: center;
    @media(max-width:1500px){ 
        width: 230px;
   }
   @media(max-width:700px){ 
    width: 200px;
}
`

const Button = styled.div`
    display: flex;
    width:60px;
    background-color: #F9636C;
    height: 30px;
    border-radius: 20px;
    align-self: center;
    justify-content: center;
    font-size: 20px;
    color: white;
    margin-bottom: 18px;
`
const Title = styled.div`
    // color: #000000;
    margin: 15px;
    font-size:25px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-style:oblique;	    
    text-decoration:underline;
    color:rgb(223, 162, 121);
    display: flex;
    justify-content: center;
    algin-items: top;
`
const TitleSelected = styled.div`
    font-size:31px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-style:oblique;	    
    text-decoration:underline;
    color:rgb(223, 162, 121);
    
    margin: 15px 0 0 0;
    display: flex;
    justify-content: center;
    algin-items: top;
`


function RightFrame({spin}){
    //const [restaurants, setRestaurants] = useState([]);
    const { pocket } = usePocketHook();

    useEffect(()=>{
        if(pocket){
            console.log(pocket);
        };
    },[pocket])

    return(
        <>
        {pocket
            ?<BlockSelected>
            <TitleSelected>Pocket List</TitleSelected>
            <Wrap>
                    {
                        pocket.map((item)=>(
                            <BigFrame4Right {...item}></BigFrame4Right>
                        ))
                    }
                    </Wrap>
            <Button style={{cursor: 'pointer'}} onClick={spin}>Spin</Button> 
        </BlockSelected>
        :<Block>
        <Title>RANDOM</Title>
        <Button onClick={spin}>GO</Button> 
        </Block>
        }
        
        </>
    )
}


export default RightFrame;