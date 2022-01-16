import * as React from 'react';
import styled from 'styled-components';
import "../App.css";
import { useState, useEffect } from 'react';
import Stars from "../Components/star";
import StarChoose from "../Components/starChoose";
import { usePocketHook } from "../hook/pocketProvider";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_RESTARURANT = gql`
    query restaurant($restaurantId: ID!){
        restaurantDetail(restaurantId: $restaurantId){
            id
            title
            stars
            photo
            link
            tags{
                id
                type
                name
            }
        
        }
    }
`

const BigBlock = styled.div`
    width:600px;
    height:600px;
    display: flex;
    flex-direction: column;
    background-color: #FFEAA1;
    border-radius: 20px;
    @media(max-width:1200px){ 
        height:60em;
    }
`

const Upper = styled.div`
    display: flex;
    flex-direction: row;
    height: 50%;
    width: 100%;
    // justify-content: center;
    margin-top:10px;
    @media(max-width:1200px){ 
        flex-direction: column;
        height: 51%;
    }
`
const UpperLeft = styled.div`
    margin-top:50px;
    display: flex;
    //flex: 4;
    height: 50%;
    width: 50%;
    justify-content: center;
    align-items: center;
    @media(max-width:1200px){ 
        width: 100%;
        height: 15%;
    }
`
const UpperRight = styled.div`
    display: flex;
    flex: 3;
    flex-direction: column;
    //background-color: yellow;
    height: 85%;
    width: 50%;
    @media(max-width:1200px){ 
        width: 100%;
        height: 15%;
    }
`

const Img = styled.img`
    margin: 10px;
    height: 175px;
`
const AddButton = styled.img`
    display: flex;
    align-self: end;
    margin-right: 10px;
`

const Title = styled.h4`
    font-size: 45px; 
    color:red;
    margin-top: 30px;
    @media(max-width:1200px){ 
        margin-top: 55px;
    }
`

const Lower = styled.div`
    display: flex;
    height:400px;
    flex-direction: column;
    padding-left: 10px;
`
const Tag = styled.div`
    display: flex;
    height: 30px;
    font-size:15px;
    border-style: solid;
    border-width: 1px;
    border-radius: 17px;
    margin: 5px;
    color: white;
    border-color: #BC915F; 
    padding-left: 7px;
    padding-right: 7px;
    width:60px;
    align-items: center;
    justify-content: center;
    
`

const StarAndBomb = styled.div`
    display:flex;
    flex: 8; 
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
`
const CommentBlock = styled.div`
    width:90%;
    height:50px;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin-bottom: 80px;
    border-radius: 20px;
`
const CommentBlockLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
`
const CommentBlockLeftTopOrBottom = styled.div`
    height: 50%;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top:5px;
    margin-bottom:15px;
    
`

const Text = styled.input`
    width:20%;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius:20px;
    text-align:center;
    height: 40px;
`
const Input = styled.input`
    display: flex;
    margin-left: 10px;
    outline: none;
    border-style: none;
    background-color: white;
    font-size: 30px;
    width:70%;
    &:focus {
        outline: none;
        border-style: none;
    }
`

export default function Page(props) {
    console.log(props.props.location.state.id);
    // const [id, setId] = useState(props.props.location.state.id);
    // const name = props.props.location.state.name;
    // const image = props.props.location.state.image;
    // const star = props.props.location.state.star;
    // const tags = props.props.location.state.tags;

    // const id = props.match.params.id;
    // const name = props.props.match.params.name;
    // const image = props.props.match.params.image;
    // const star = props.props.match.params.star;
    // const tags = props.props.match.params.tags;
    // console.log(id);
    // console.log(name);
    // const [chosen, setChosen] = useState(false);

    const [restaurant, setRestaurant] = useState(null);
    const [num, setNum] = useState(0);
    const { pocket, saveRestaurant, deleteRestaurant } = usePocketHook();
    const [chosen, setChosen] = useState(pocket? (pocket.find(item=>item.id === props.props.location.state.id)? true : false): false);
    
    const handleCheck = ()=>{
        setChosen(!chosen);
    }

    const {data, refetch} = useQuery(GET_RESTARURANT,  { variables:{restaurantId: props.props.location.state.id}}, (e)=>{console.log(e)})

    useEffect(() => {
        refetch({restaurantId: props.props.location.state.id});
    }, [])

    useEffect(()=>{
        // console.log(id);
        console.log("data", data);
        if(data){
            if(data.restaurantDetail){
                console.log(data.restaurantDetail);
                setRestaurant(data.restaurantDetail);
            }
        }
        else{
            refetch({restaurantId: props.props.location.state.id});
        }
    }, [data])

    useEffect(()=>{
        if(restaurant){
            if(chosen){
                console.log("restaurant:", restaurant);
                saveRestaurant({id: props.props.location.state.id, name: restaurant.title, image: restaurant.photo, star: restaurant.stars, tags: restaurant.tags});
            }
            else{
                deleteRestaurant(props.props.location.state.id);
            }
        }
    },[chosen])

    return(<>{
        restaurant?
            (<BigBlock>
                <AddButton 
                    src={chosen?require("../hardData/check-circle.png"):require("../hardData/check-circle-empty.png")}
                    width={"20px"}
                    height ={"20px"}
                    style={{marginTop:"10px"}}
                    onClick={handleCheck}/>
                <Upper>
                    <UpperLeft>
                        <Img src = {restaurant.photo}></Img>
                    </UpperLeft>
                    <UpperRight>
                        <Title>
                            {restaurant.title}
                        </Title>
                        <Stars num={restaurant.star} style= {{ width: "200px",height: "100px",marginTop:"-40px"}}></Stars>
                        <Row>
                            {
                            restaurant.tags.map((item)=>(
                                <Tag style={{backgroundColor: item.type === "food"? "#147EFA": item.type === "place"? "#FF0000": "#14FA7E"}}>
                                    {item.name}
                                </Tag>
                            ))
                        }
                        </Row>
                        <StarAndBomb>
                            <img style={{ cursor: 'pointer' }} width={"30px"} height={"30px"} src={require("../hardData/emojione_star.png")}/>
                            <img style={{ cursor: 'pointer' }} width={"30px"} height={"30px"} src={require("../hardData/emojione-monotone_bomb.png")}/>
                        </StarAndBomb>
                    </UpperRight>
                </Upper>
                <Row style={{marginTop: "-50px"}}>
                    <p >Address:
                    <a href={restaurant.link}>Click me</a>
                    </p>
                </Row>

                <Lower>
                <Container>
                    <Text value={"comment"} 
                                // value= {{userName}}
                                >
                    </Text>
                    <Input/>
                </Container>
                <Container>
                    <Text value={"rank"}>
                    </Text>
                    <StarChoose 
                        num={num}
                        setNum={setNum} 
                        style= {{ width: "50%",height: "35px", cursor: 'pointer', marginLeft: "10px"}} 
                        />
                </Container>
                <button style= {{ backgroundColor: "red", cursor: 'pointer',marginTop: "15px", marginRight: "10px", border:"0", color:"white", borderRadius: "10px", height: "30px"}} >Send</button>
                    {/* {
                        tags.map((item)=>(
                            <CommentBlock style={{backgroundColor:"white"}}>
                                <CommentBlockLeft>
                                    <CommentBlockLeftTopOrBottom>
                                        <h1>{item.userName}</h1>
                                    </CommentBlockLeftTopOrBottom>
                                    <CommentBlockLeftTopOrBottom>
                                        <Stars num={item.star} style= {{ width: "50px",height: "10px"}}></Stars>
                                    </CommentBlockLeftTopOrBottom>
                                </CommentBlockLeft>
                                    <p>123</p>
                            </CommentBlock>
                        ))
                    } */}
                </Lower>
            </BigBlock>)
            : null
        }</>
        )
}