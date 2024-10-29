import axios from 'axios'
import {useEffect, useState} from 'react'
import Notfound from './Notfound';

function Homepage(){
    
    const url = 'https://ih-crud-api.herokuapp.com/characters'

    const [characters, setCharacters] = useState(null);

    useEffect(()=>{
        axios
        .get(url)
        .then((response)=>{
            console.log(response.data)
            setCharacters(response.data);
        })
        .catch(e => {
            console.log("Error getting characters from API ...")
        })
    }, []);

    return (
        <>

        {characters === null ?
        <h2>is loading</h2> :
        <h2>List of characters in our API : {characters.length}</h2> }

        {characters && characters.map((characterDetails, index)=>{
           console.log(characterDetails)
           return(
                <div key={index}>
                    {characterDetails.name}
                    {characterDetails.weapon}
                </div>
            );
        })}
        
        </>

    );
}

export default Homepage;
