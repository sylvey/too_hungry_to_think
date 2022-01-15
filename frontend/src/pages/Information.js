import * as React from 'react';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import "../App.css";
import { useState, useEffect } from 'react';
import Page from "../Containers/Page";
import RightFrame from "../Containers/RightFrame";
import { Background, CenterDiv, MainDiv, RightDiv } from "../Containers/BackGround";
import food from '../hardData/food.png'

const BackgroundInf = styled.div`
    display: flex;
    flex-direction: row;
    // width: 100%;
    height: 65em;

    background-size: cover;
    background-position: fixed;

    justify-content: center;
    // background-color: white;
    background-image:url(${food});
    // background-size: cover;
    @media(max-width:1900px){ 

        height: 90em;
        // background-position: center;
        // background-position-y: 0;
        // background-attachment: fixed;
   }
    @media(max-width:1300px){ 

        height: 100em;
        // background-position: center;
        // background-position-y: 0;
        // background-attachment: fixed;
   }
    
`

const CenterDivInf = styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    max-width: 1200px;
    min-width: 500px;
    //height: 800px;
    //background: red;
    // justify-content: center;
`

export const MainDivInf = styled.div`
    display: flex;
    flex: 7;
    max-width: 900px;
    min-width: 312.5px;
    //height: 100px;
    //background: yellow;
    // align-items: center;
    // justify-content: center;
    margin-top: 180px;
`

export const RightDivInf = styled.div`
    flex: 4;
    //display: flex;
    //background-color: red;
    max-width: 500px;
    min-width: 187.5px;
    margin-top: 10px;
`

export default function Information(props) {
    console.log(props.location.state.id);
    return(
        <BackgroundInf>
            <CenterDivInf>
                <MainDivInf>
                    <Page
                    props={props}/>
                </MainDivInf>
                <RightDivInf>
                    <RightFrame/>
                </RightDivInf> 
            </CenterDivInf>         
        </BackgroundInf>
    )
}