import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    height: 60px;
    width: 80%;
    background-color: #FFEDE9;
    border-radius: 30px;
    margin-top: 20px;
    align-items: center;
    padding-left: 20px;
`

const Input = styled.input`
    display: flex;
    margin-left: 10px;
    outline: none;
    border-style: none;
    background-color: transparent;
    font-size: 30px;
    &:focus {
        outline: none;
        border-style: none;
    }
`

function SearchBar(){
    return(
        <>
        <Container>
            <img src={require("../hardData/search.png")} width={"30px"} height={"30px"}></img>
            <Input></Input>
        </Container>
        </>
    )
}

export default SearchBar;