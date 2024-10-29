import { useParams } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function CharacterDetails(){
    
    const {characterId} = useParams();

    const[character,setCharacter] = useState(null)
    
    useEffect(()=>{
        axios.get(`https://ih-crud-api.herokuapp.com/characters/${characterId}`)
        .then((response) =>{
            setCharacter(response.data);
        })
        .catch(e=>{
            console.log(e)
        })
    
    },[]);

    return (
        <>

        { character && 
        <div className="box">
            <p>Name : {character.name}</p>
            <p>Occupation : {character.occupation}</p>
            <p>Weapon : {character.weapon}</p>
            <Link to={"/"}>Back</Link>
        </div>
        }
        </>
    )
}
export default CharacterDetails;