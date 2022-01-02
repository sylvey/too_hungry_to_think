import React from "react";
import styled from "styled-components";
import food from '../hardData/food.png'

export const Background = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    background-color: white;
    background-image:url(${food});
    background-size: cover;
    background-position: center;
`
export const CenterDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    max-width: 800px;
    min-width: 500px;
    //height: 800px;
    //background: red;
    justify-content: center;
`

export const MainDiv = styled.div`
    display: flex;
    flex: 7;
    max-width: 600px;
    min-width: 312.5px;
    //height: 100px;
    //background: yellow;
    align-items: center;
    justify-content: center;
`

export const RightDiv = styled.div`
    flex: 2;
    //display: flex;
    //background-color: red;
    max-width: 200px;
    min-width: 187.5px;
`