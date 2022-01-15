import React from "react";
import styled from "styled-components";


const star = [1, 2, 3, 4, 5];



const Stars = ({num, style})=>{
    const AStar = styled.img`
        display: flex;
        width: 20%;
    `
    const Row = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        ${style};
    `
    // console.log(style)
    
    return (
        <>
        <Row>
        {
            star.map((item)=>(
                <AStar src={item - num >= 1? require("../hardData/StarGrey.png"): 
                                    num - item >= 1? require("../hardData/StarWhite.png") : 
                                                require("../hardData/StarGold.png") }>
                </AStar>
            ))
        }
        </Row>
        </>
    )
    
}


export default Stars;