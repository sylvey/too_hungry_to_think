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



export default function Information(props) {
    console.log(props.location.state.id);
    return(
        <Background>
            <CenterDiv>
                <MainDiv>
                    <Page
                    props={props}/>
                </MainDiv>
                <RightDiv>
                    <RightFrame/>
                </RightDiv> 
            </CenterDiv>         
        </Background>
    )
}