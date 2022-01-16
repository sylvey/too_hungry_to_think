import * as React from 'react';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import "../App.css";
import { gql } from '@apollo/client';
import { useState, useEffect } from 'react';
import { SubmitButton } from '../Containers/Buttons';
import { useMutation, useQuery } from '@apollo/client';
import restaurants from '../hardData/restaurants';
const loginData =localStorage.getItem('loginData');
const ADD_BOMB = gql`
  mutation addBomb($userId: ID!, $restaurantId: ID!){
    addBomb(userId: $ID, restaurantId: $ID)
    {
      type
    }
  }
`
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#FFEDE9',
//   border: '2px solid #000',
  outline: 'none',
  boxShadow: 24,
  p: 4,
  border: "1px solid #BA905F",
  boxSizing: "border-box",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "49px",
};


export default function AddBomb({open, handleClose, id, title}) {
    
    // console.log("title:", title);
    // console.log("id:", id);
    const [addBomb] = useMutation(ADD_BOMB);
    const handleSubmit = async ()=>{
      try{
        await addBomb({
        variables:{
          input:{
            userId: loginData.email,
            restaurantId: id
          }
        },
        onCompleted: ()=>{
          console.log("success created bomb");
          handleClose();  
        }   
      })}catch(e){
        console.log(e);
      }
    }

    return (
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2" color={"#BA905F"}>
                確認新增{" "+title+ " "} 至你的地雷區餐廳?
              </Typography>
              <SubmitButton onClick={handleSubmit}>確認</SubmitButton>
              
            </Box>
          </Modal>
        </div>
    );
}
