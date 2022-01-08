import React from "react";
import styled from "styled-components";
import food from '../hardData/food.png'

export const Background = styled.div`
    display: flex;
    flex-direction: row;
    // width: 100%;
    height: 57em;

    background-size: cover;
    background-position: fixed;

    justify-content: center;
    // background-color: white;
    background-image:url(${food});
    // background-size: cover;
    @media(max-width:1500px){ 

        height: auto;
        background-position: center;
        background-position-y: 0;
        background-attachment: fixed;
   }
    
`
export const CenterDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    max-width: 1200px;
    min-width: 500px;
    //height: 800px;
    //background: red;
    justify-content: center;
`

export const MainDiv = styled.div`
    display: flex;
    flex: 7;
    max-width: 900px;
    min-width: 312.5px;
    //height: 100px;
    //background: yellow;
    align-items: center;
    // justify-content: center;
    margin-top: 170px;
`

export const RightDiv = styled.div`
    flex: 3;
    //display: flex;
    //background-color: red;
    max-width: 500px;
    min-width: 187.5px;
`