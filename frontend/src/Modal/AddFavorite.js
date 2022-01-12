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
  color: "#BA905F", 
  borderStyle: "solid", 
  borderWidth: "1px",
  borderColor: "#BA905F", 
  marginTop: "20px" 
}


export default function AddFavorite({open, handleClose, id, title}) {
    
    const handleSubmit = ()=>{
      handleClose();
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const openAnchor = Boolean(anchorEl);
    const handleClickDropDown = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleCloseAnchor = () => {
      setAnchorEl(null);
    };
   

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
                將 {" "+title+ " "} 加入至你的收藏餐廳
              </Typography>

              <Button
                id="fade-button"
                style={dropDownStyle}
                aria-controls={openAnchor ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openAnchor ? 'true' : undefined}
                onClick={handleClickDropDown}
              >
                請選擇收藏資料夾
                <img></img>
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
                <MenuItem onClick={handleCloseAnchor}>Profile</MenuItem>
                <MenuItem onClick={handleCloseAnchor}>My account</MenuItem>
                <MenuItem onClick={handleCloseAnchor}>Logout</MenuItem>
              </Menu>
              <SubmitButton onClick={handleSubmit} style={{marginLeft:0}}>Collect</SubmitButton>
            </Box>
            
          </Modal>
        </div>
    );
}
