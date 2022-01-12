import * as React from 'react';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import "../App.css";
import { useState, useEffect } from 'react';
import { SubmitButton } from '../Containers/Buttons';

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

const InputTitle = styled.p`
    color: #BA905F
`

export default function AddRestaurants({open, handleClose}) {
    
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");
    const [tag, setTag] = useState("");
    const [image, setImage] = useState(null);

    // useEffect(()=>{
    //     console.log(window.URL.createObjectURL(image));
    // },[image])

    useEffect(() => {
        if(image){
            console.log(window.URL.createObjectURL(image));
        }
        
    }, [image])

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
                    <InputText 
                        value={title}
                        onChange={(e)=>(setTitle(e.target.value))}
                    />
                  </InputBlock>

                  <InputBlock>
                    <InputTitle>餐廳連結</InputTitle>
                    <InputText
                        value={link}
                        onChange={(e)=>setLink(e.target.value)}/>
                  </InputBlock>

                  <InputBlock>
                    <InputTitle>相關資訊</InputTitle>
                    <InputText 
                        value={tag}
                        onChange={(e)=>setTag(e.target.value)}/>
                  </InputBlock>

                  
                {
                    image?(
                        <>
                        <InputBlock>
                          <InputTitle>餐廳圖片上傳</InputTitle>
                          <label class="custom-file-upload">
                            <input type="file"
                              name="myImage"
                              onChange={(event) => {
                                console.log(event.target.files[0]);
                                setImage(event.target.files[0]);
                              }}
                              />
                            <i class="fa fa-cloud-upload"></i>點擊重新選擇
                          </label>
                        </InputBlock>

                        <InputBlock>
                            <img alt="not fount" 
                                width={"40px"} 
                                height= {"40px"}
                                style={{display: "flex", marginTop: "20px"}}
                                src={window.URL.createObjectURL(image)} />
                        </InputBlock>
                        </>
                        
                    ):(
                        <InputBlock>
                          <InputTitle>餐廳圖片上傳</InputTitle>
                          <label class="custom-file-upload">
                            <input type="file"
                              name="myImage"
                              onChange={(event) => {
                                console.log(event.target.files[0]);
                                setImage(event.target.files[0]);
                              }}
                              />
                            <i class="fa fa-cloud-upload"></i>點擊選擇檔案
                          </label>
                        </InputBlock>
                    )
                }
                  <InputBlock >
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
