import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import "../App.css";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#FFEDE9',
//   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  border: "1px solid #BA905F",
  boxSizing: "border-box",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "49px",
};

const InputBlock = styled.div`
    //display: flex;
    marginTop: 20px;
    marginLeft: 20px;
    //background-color: red;
`
const InputText = styled.input`
    display: flex;
    outline: none;
    border-style: solid;
    border-color: #BA905F;
    border-width: 1px;
    border-radius: 8px;
    background-color: transparent;
    color: #BA905F;
    font-size: 16px;
    &:focus {
        outline: none;
        border-style: solid;
    }
`
const SubmitButton = styled.button`
    display: flex;
    margin-top: 20px;
    border-radius: 8px;
    background-color: #F9636C;
    color: white;
    font-size: 16px;
`

const InputTitle = styled.p`
    color: #BA905F
`

export default function AddRestaurants({open, handleClose}) {
  

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
            新增餐廳
          </Typography>
          <form>
              <InputBlock>
                <InputTitle>餐廳名稱</InputTitle>
                <InputText/>
              </InputBlock>
                        
              <InputBlock>
                <InputTitle>餐廳連結</InputTitle>
                <InputText/>
              </InputBlock>

              <InputBlock>
                <InputTitle>相關資訊</InputTitle>
                <InputText/>
              </InputBlock>

              <InputBlock>
                <InputTitle>餐廳圖片上傳</InputTitle>
                <label class="custom-file-upload">
                  <input type="file"/>
                  <i class="fa fa-cloud-upload"></i>點擊選擇檔案
                </label>
              </InputBlock>
              
              <InputBlock style={{diplay:"flex", alignItems: "center"}}>
                <SubmitButton
                  type = "submit"
                  >新增</SubmitButton>
              </InputBlock>
              
          </form>
        </Box>
      </Modal>
    </div>
  );
}
