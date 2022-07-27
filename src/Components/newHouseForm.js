import React, {useState} from 'react'
import {housesApi} from '../rest/HousesApi.js'


export const NewHouseForm = (props) => {
    const [name,setName] = useState('');

    const onSubmit = (e) => {
        console.log(`inside newHouseForm, onSubmit()`);
        e.preventDefault();
        //name has to have a value to be true
        if(name) {
            console.log('New house Name:' + name);
            console.log('props:',props);
           
            housesApi.post(name)
             //posts new house with name written
            setName(''); //after house posted to api, reset name to blank ' '
            
        } else {
            console.log('invalid input')
        }
    };
    
    return (
        <div>
            <h1> Add a new House</h1>
            <form onSubmit={onSubmit}>
              <input
                type= 'text'
                placeholder= 'House Name'
                //e is the event of change in the input box(target)
                onChange={(e)=> setName(e.target.value)} //when text input changes, call setName to enter value.
                //onchange updates setName state.
                //state name updates the value in the input.
                value={name}
             />
             <button id='create-new-home' type='submit'>New House</button>
            </form>
        </div>
    )
}
    
