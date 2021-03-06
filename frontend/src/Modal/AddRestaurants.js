import * as React from 'react';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styled from 'styled-components';
import "../App.css";
import {v4 as uuid4} from "uuid";
import { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { SubmitButton } from '../Containers/Buttons';
import { gql } from '@apollo/client';
import { Tag } from '../Containers/BigFrame';
import { autocompleteClasses } from '@mui/material';
import { SettingsTwoTone } from '@mui/icons-material';
const CREATE_RESTAURANT = gql`
  mutation createRestaurant($input: RestaurantInput! ){
    createRestaurant(input: $input){
      id
    }
  }
`
const CREATE_TAG = gql`
  mutation CreateTag($id: ID!, $type: String!, $name: String!){
    createTag(id: $id, type: $type, name: $name){
      id
      name
      type
    }
  }
`
const SEARCH_TAG = gql`
  query SearchTag($keyword: String!){
    searchTag(keyword: $keyword){
      id
      type
      name
    }
  }
`

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 500,
  bgcolor: '#FFEDE9',
  // overflow: "auto",
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

const RowScroll = styled.div`
  display: flex;
  flex-direction: row;
  width: inherit;
  // height: 60px;
  overflow-x: auto;
  // background-color: red;
  // position: relative;
  &::-webkit-scrollbar {
    width: inherit;
    height: 7px;
    border-radius: 6px;
  }
`

const FormScroll = styled.form`
  display: flex;
  flex-direction: column; 
  height: 400px;  
  overflow: auto;
  &::-webkit-scrollbar {
    width: inherit;
    height: 7px;
    border-radius: 6px;
  }
`

export default function AddRestaurants({open, handleClose}) {
    
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [link, setLink] = useState("");
    const [tag, setTag] = useState("");
    const [image, setImage] = useState("");
    const [chosenTagsId, setChosenTagsId] = useState([]);
    const [chosenTags, setChosenTags] = useState([]);
    
    
    //get tags
    const {data, subscribeToMore, refetch} = useQuery(SEARCH_TAG,  { variables:{keyword: tag}}, (e)=>{console.log(e)})
    useEffect(()=>{
      try{
        refetch({keyword: tag});
      }catch(e){
        console.log(e);
      }
      console.log(data? data.searchTag: data);
    }, [tag, chosenTags])

    //create tag
    const [createTag] = useMutation(CREATE_TAG);
    const handleAddNewTag = async()=>{
      let newId = uuid4();
      let newChosenTagsId = [...chosenTagsId, newId];
      let newChosenTags = [...chosenTags, {id: newId, type: "other", name: tag}];
      setChosenTagsId(newChosenTagsId);
      setChosenTags(newChosenTags);
      console.log(chosenTagsId);
      console.log(chosenTags);
      await createTag({
        variables:{
          id: newId,
          type: "other",
          name: tag
        },
        onCompleted: ()=>{
          console.log("success");
        }
      })
    }
    const handleAddOldTag = (item)=>{
      let newChosenTagsId = [...chosenTagsId, item.id];
      let newChosenTags = [...chosenTags, item];
      setChosenTagsId(newChosenTagsId);
      setChosenTags(newChosenTags);
      console.log(chosenTagsId);
      console.log(chosenTags);
    }

    //submit
    const [createRestaurant] = useMutation(CREATE_RESTAURANT);
    const handleSubmit = async()=>{
      if(title !== "" && image !== "" && chosenTagsId !== [] && link !== ""){
          console.log("have title");
          const id = uuid4();
          try{
            await createRestaurant({
            variables:{
              input:{
                id: id,
                title: title,
                photo: image,
                link: link,
                tagIds: chosenTagsId
              }
            },
            onCompleted: ()=>{
              console.log("success created restaurants");
              handleClose();  
            }   
          })}catch(e){
            console.log(e);
          }
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
                ????????????
              </Typography>
              <FormScroll>
                  <InputBlock>
                    <InputTitle>????????????</InputTitle>
                    <InputText 
                        value={title}
                        onChange={(e)=>(setTitle(e.target.value))}
                        required
                    />
                    {titleError!== "" ?<InputTitle>{titleError}</InputTitle>: null}

                  </InputBlock>

                  <InputBlock>
                    <InputTitle>????????????</InputTitle>
                    <InputText
                        value={link}
                        onChange={(e)=>setLink(e.target.value)}
                        required/>
                  </InputBlock>

                  <InputBlock>
                    <InputTitle>????????????</InputTitle>
                    <RowScroll>
                      {
                        chosenTags.map((item)=>
                          <Tag style={{ 
                            cursor:"pointer",
                            backgroundColor: item.type === "food"? "#147EFA": 
                                      item.type === "place"? "#FF0000": 
                                            item.type === "takeInOrOut"?"#14FA7E": "yellow"}}
                            >
                          {item.name}
                          </Tag>
                        )
                      }
                    </RowScroll>
                    <InputText 
                        value={tag}
                        onChange={(e)=>setTag(e.target.value)}/>
                    <RowScroll>
                        { tag !==""?
                          <Tag style = {{cursor:"pointer", backgroundColor:"yellow", color: "black"}}      
                               onClick={()=>handleAddNewTag()}
                          >{tag}</Tag>
                          :null
                        }
                        {
                          data? data.searchTag.map((item)=>
                            <Tag onClick={()=>handleAddOldTag(item)}
                                  style={{ 
                                  cursor:"pointer",
                                  backgroundColor: item.type === "food"? "#147EFA": 
                                            item.type === "place"? "#FF0000": 
                                                  item.type === "takeInOrOut"?"#14FA7E": "yellow"}}
                                  >
                                {item.name}
                            </Tag>
                          ):null
                        }
                    </RowScroll>
                    
                    
                  </InputBlock>
                   
                  <InputBlock>
                    <InputTitle>??????????????????</InputTitle>
                    <InputText
                        value={image}
                        onChange={(e)=>setImage(e.target.value)}
                        required
                    />
                  </InputBlock>

                  <InputBlock >
                    <SubmitButton
                      onClick={()=>handleSubmit()}
                      >??????</SubmitButton>
                  </InputBlock>

              </FormScroll>
            </Box>
          </Modal>
        </div>
    );
}