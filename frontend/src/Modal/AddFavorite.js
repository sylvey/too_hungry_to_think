import * as React from 'react';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "../App.css";
import { useState, useEffect } from 'react';
import { SubmitButton } from '../Containers/Buttons';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { gql } from '@apollo/client';
import files from '../hardData/files';
import { BigFrame4Modal } from '../Containers/BigFrame';
import { width } from '@mui/system';
import { useMutation, useQuery } from '@apollo/client';
const ADD_COLLECTION = gql`
  mutation addCollection($userId: ID!, $restaurantId: ID!,$title:String!){
    addCollection(userId: $userId, restaurantId: $restaurantId,title:$title)
  }
`
const loginData =localStorage.getItem('loginData');
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

const dropDownStyle = {
  display: "flex", 
  alignSelf: "center", 
  justifySelf: "center", 
  color: "#C4C4C4", 
  height: "40px",
  backgroundColor: "white",
  borderStyle: "solid", 
  borderWidth: "1px",
  borderRadius: "20px",
  borderColor: "000000", 
  marginTop: "20px" 
}


export default function AddFavorite({open, handleClose, id, title}) {
    const [addCollection] = useMutation(ADD_COLLECTION);
    const handleSubmit = async ()=>{
      try{
        await addCollection({
        variables:{
        userId: loginData,
        restaurantId: id,
        title: folder.title,
        },
        onCompleted: ()=>{
          console.log("success created collection");
          handleClose();  
        }   
      })}catch(e){
        console.log(e);
      } 
    }
    const [folder, setFolder] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const openAnchor = Boolean(anchorEl);
    const handleClickDropDown = (event) => {
      console.log("event", event.currentTarget);
      setAnchorEl(event.currentTarget);
    };

    const handleCloseAnchor = () => {
      setAnchorEl(null);
    };

    const setDropDownValue = (item)=>{
      setFolder({id: item.id, title: item.title});
      setAnchorEl(null); 
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
              <Typography id="modal-modal-title" variant="h6" component="h2" color={"#BA905F"} style={{display: "flex", alignSelf:"start" }}>
                ??? {" "+title+ " "} ????????????
              </Typography>

              <BigFrame4Modal id={id}></BigFrame4Modal>

              <Typography id="modal-modal-title" variant="h6" component="h2" color={"#BA905F"} style={{display: "flex", alignSelf:"start" }}>
                ???????????????
              </Typography>

              <Button
                id="fade-button"
                style={dropDownStyle}
                aria-controls={openAnchor ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openAnchor ? 'true' : undefined}
                onClick={handleClickDropDown}
              >
                {folder? folder.title: "????????????????????????"}
                <img src={require('../hardData/dropDown.png')} height={"50%"}></img>
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={openAnchor}
                onClose={handleCloseAnchor}
                TransitionComponent={Fade}
              >
                {
                  files.map((item)=>
                    <MenuItem 
                      onClick={()=>setDropDownValue(item)}
                    >{item.title}</MenuItem>
                  )
                }
                
              </Menu>
              <SubmitButton onClick={handleSubmit} style={{marginLeft:0}}>Collect</SubmitButton>
            </Box>
            
          </Modal>
        </div>
    );
}
