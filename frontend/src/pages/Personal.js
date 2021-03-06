import React, {useEffect, useState} from "react";
import RightFrame from "../Containers/RightFrame";
import { Background, CenterDiv, MainDiv, RightDiv } from "../Containers/BackGround";
//import restaurants from "../hardData/restaurants";
import boomb from "../hardData/boomb";
//import BigFrame from "../Containers/BigFrame";
import SelectedBlock from "../Containers/SelectedBlock";
import styled from "styled-components";
import files from "../hardData/files";
import { unstable_requirePropFactory } from "@mui/utils";
import { Link } from "react-router-dom";
import { gql } from '@apollo/client';
import { useMutation, useQuery } from '@apollo/client';
const loginData =localStorage.getItem('loginData');
const CREATE_FILE = gql`
  mutation createFile($userId: ID!,$title:String!){
    createFile(userId: $userId,title:$title)
  }
`
const FILES = gql`
  query files($userId: ID!){
    files(userId: $ID)
  }
`
const COLLECTION = gql`
  query collection($fileID: ID!){
    collection(fileID: $ID)
  }
`
const BOMB = gql`
    query files($userId: ID!){
      files(userId: $ID)
  }
`
const Wrap = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    //background-color: yellow;
`

const Title = styled.div`
    display: flex;
    justify-self: start;
    align-self: start;
    justify-content: center;
    align-items: center;
    margin: 20px;
    background-color: #F9636C;
    color: black;
    font-size: 25px;
    padding-left:7px; 
    padding-right:7px; 
    height: 46px;
    border-radius:23px;    
`

const File = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFEAA1;
    width: 200px;
    height: 170px;
    margin: 20px;
    border-radius: 10px;
    border-style: solid;
    border-width: 3px;
    border-color: #BA905F;
    align-items: center;
    justify-content: center;
    color: #BA905F;
    font-size: 30px;
    cursor: pointer;
`

const AddCatForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
`

const AddCatInput = styled.input`
    display: flex;
    border-style: none;
    background-color: transparent;
    width: 70%;
    color: #BA905F;
    font-size: 30px;
    &:focus {
        outline: none;
        border-style: none;
        color: #BA905F;
    }
    ::placeholder{
        color: #BA905F;
    }
`


function Personal(){
    const [showAddCat, setShowAddCat] = useState(false);
    const [newCat, setNewCat] = useState("");
    const [createFile] = useMutation(CREATE_FILE);
    const handleAddCat = async () =>{
            try{
              await createFile({
              variables:{
              userId: loginData,
              title:newCat,
              },
              onCompleted: ()=>{
                console.log("success created collection");
                setShowAddCat(false);
              }   
            })}catch(e){
              console.log(e);
              setShowAddCat(false);
            } 
            console.log(newCat) 

    }
    
    return(
        <Background>
            <CenterDiv>
                <MainDiv style={{ flexDirection:'column'}}>
                    <Title>Favorites</Title>
                    
                    <Wrap>
                        <File onClick = {()=>{setShowAddCat(true)
                                              setNewCat("")}}>
                             {
                                 showAddCat? (
                                 <AddCatForm
                                         onSubmit= {()=> {handleAddCat()}}>
                                    <AddCatInput
                                           value = {newCat}
                                           placeholder="New File"
                                           onChange = {(e)=>setNewCat(e.target.value)}/>
                                 </AddCatForm>
                                 ):(
                                    <img src = {require("../hardData/folder-add.png")} width={"40px"} height={"40px"}></img>
                                 )
                             } 
                         </File>
                        {
                            files.map((item)=>(
                                <File>
                                    <Link to={{pathname: "/Folder/" + item.id}}
                                          style = {{color:"#BA905F"}}>{item.title}</Link>
                                </File>
                            ))
                        }
                    </Wrap>

                    <Title>Booomb</Title>
                    <Wrap>
                    {
                        boomb.map((item)=>(
                            <SelectedBlock {...item}></SelectedBlock>
                        ))
                    }
                    </Wrap>
                </MainDiv>

                <RightDiv>
                    <RightFrame></RightFrame>
                </RightDiv>
            </CenterDiv>
        </Background>
    )
}


export default Personal;