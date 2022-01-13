import React, {useEffect, useState} from "react";
import RightFrame from "../Containers/RightFrame";
import { Background, CenterDiv, MainDiv, RightDiv } from "../Containers/BackGround";
//import restaurants from "../hardData/restaurants";
import boomb from "../hardData/boomb";
//import BigFrame from "../Containers/BigFrame";
import SelectedBlock from "../Containers/SelectedBlock";
import styled from "styled-components";
import files from "../hardData/files";
import { BigFrame4Personal } from "../Containers/BigFrame";
import { unstable_requirePropFactory } from "@mui/utils";

const Wrap = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    //background-color: yellow;
`

const Title = styled.h1`
    display: flex;
    justify-self: start;
    align-self: start;
    justify-content: center;
    align-items: center;
    margin: 20px;
    // background-color: #F9636C;
    color:  #BA905F;
    font-size: 25px;
    padding-left:7px; 
    padding-right:7px; 
    height: 46px;
    border-radius:23px;    
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


function Folder(props){
    
    const [contents, setContents] = useState(null);
    const [title, setTitle] = useState("");
    // useEffect(() => {
              
    // }, [])

    useEffect(() => {
        console.log(props.match.params.id);
        console.log(files);
        
        for(let i = 0; i < files.length; i++){
            if(files[i].id == props.match.params.id){
                console.log(files[i].collection);
                setTitle(files[i].title);
                setContents(files[i].collection);
                break;
            }
        }  

        console.log(contents);
        
    }, [contents])

    return(

        <Background>
            <CenterDiv>
                <MainDiv style={{ flexDirection:'column'}}>
                    <Title>{title}</Title>
                    
                    <Wrap>
                        {
                            contents? contents.map((item)=>(
                                <BigFrame4Personal {...item}/>
                            )):null
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


export default Folder;