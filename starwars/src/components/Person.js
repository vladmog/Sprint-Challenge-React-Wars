import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MaleDiv = styled.div`
    display: flex;
    flex-direction: column;
    color: yellow;
    border: solid black 1px;
    border-radius: 15px;
    width: 100%;
    background-color: blue;
    box-shadow: 5px 5px black;
    padding: 0px 10px;
    height: 100%;
`;
const FemaleDiv = styled(MaleDiv)`
    color: black;
    border-radius: 15px;
    background-color: tomato;
`;
const ThingDiv = styled(MaleDiv)`
    color: black;
    background-color: yellow;
`;

function Person (props) {
    const [homeworld, setHomeWorld] = useState("");


    useEffect(() => {
        axios.get(props.person.homeworld)
          .then (res => setHomeWorld(res.data.name)
          )
          .catch (err => console.log(err))
      }, [])

    let message = `${props.person.name} whose eyes were ${props.person.eye_color} as the snow on ${homeworld}`
    return (
        props.person.gender === "male" 
            ? <MaleDiv><p>{message}</p></MaleDiv> 
            : props.person.gender === "female" 
                ? <FemaleDiv> <p>{message}</p></FemaleDiv> 
                : <ThingDiv><p>{message}</p></ThingDiv>
             
        
    )
}

export default Person;