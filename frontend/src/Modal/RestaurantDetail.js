import * as React from 'react';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import "../App.css";
import { useState, useEffect } from 'react';
import BigFrame, { BigFrame4Right } from "../Containers/BigFrame";

const Example=styled.div`
    width:900px;
    height:900px;
`

export default function RestaurantsDetail({display, handleClose}) {
    return(
        <div>
            <Modal
                display={display}
                handleClose={handleClose}
                // aria-labelledby="modal-modal-title"
                // aria-describedby="modal-modal-description"
            >
                <BigFrame></BigFrame>
            </Modal>
        </div>

    )
}