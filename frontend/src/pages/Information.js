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



export default function Information({display, handleClose}) {
    return(
        <Background>
            {/* <Modal
                display={display}
                handleClose={handleClose}
                // aria-labelledby="modal-modal-title"
                // aria-describedby="modal-modal-description"
            > */}
           
            <CenterDiv>
                <MainDiv>
                    <Page></Page>
                </MainDiv>
                <RightDiv>
                    <RightFrame></RightFrame>
                </RightDiv> 
            </CenterDiv>         
            {/* </Modal> */}
        </Background>

    )
}