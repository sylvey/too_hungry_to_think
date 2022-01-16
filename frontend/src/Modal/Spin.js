import * as React from 'react';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "../App.css";
// import WheelComponent from 'react-wheel-of-prizes';
import { usePocketHook } from "../hook/pocketProvider";
import { useState, useEffect } from 'react';
import { BigFrame4Modal } from '../Containers/BigFrame';
import { ListItemSecondaryAction } from '@mui/material';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
const RESTAURANTS_DEFAULT = gql`
    query restaurants{
        restaurants{
            id
        }
    }
`

const style = {
  display:"flex",
  flexDirection: "column",
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#FFEDE9',
//   border: '2px solid #000',
  outline: 'none',
  boxShadow: 24,
  justifyContent: "center",
  alignItems: "center",
  p: 4,
  border: "1px solid #BA905F",
  boxSizing: "border-box",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "49px",
};

export default function Spin({open, handleClose}) {
    
    const { pocket, saveRestaurant, deleteRestaurant } = usePocketHook();
    const [choose, setChoose] = useState("");
    const {data} = useQuery(RESTAURANTS_DEFAULT, (e)=>{console.log(e)});
    useEffect(() => {
      if(pocket.length !== 0){
        console.log(pocket);
        console.log("choose:", choose);
        setChoose(pocket[Math.floor(Math.random()*pocket.length)].id);
      }
      else{
        if(data){
          setChoose(data.restaurants[Math.floor(Math.random()*data.restaurants.length)].id); 
        }
      }
    }, [open])

    // useEffect(() => {
    //   console.log("choose:", choose);
    // }, [choose])
    
    return (
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2" color={"#BA905F"} style={{display: "flex", alignSelf:"start" }}>
                Let's choose this!
              </Typography>

              <BigFrame4Modal id={choose}></BigFrame4Modal>

            </Box>
            
          </Modal>
        </div>
    );
}
