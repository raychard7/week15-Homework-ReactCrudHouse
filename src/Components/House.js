import React from 'react' ;
import { NewRoomForm} from './NewRoomForm';
import { housesApi } from '../rest/HousesApi';

export const House =(props)=> {
    //deconstructs from props. House object and updatehouse Method.
    const {house, updateHouse} = props; //deconstruct from props. not a hook.

    const deleteRoom = (roomId) => { //Every time room deleted, House is just updated.
        const updatedHouse= {
            ...house,                     //x is the arr element being tested.
            rooms: house.rooms.filter((x) => x._id !==roomId) //filter creates new smaller array with elements that pass the test in the function.
        };
        updateHouse(updatedHouse); //pass our 
    }                                                     // ...house.room brings all rooms from prev array. Then we add another room.
    const addNewRoom = (room) => updateHouse({ ...house, rooms: [...house.rooms, room]});

    const rooms =() => (
        <ul>
          {house.rooms.map((room, index) => (
            <li key={index}>
                <label>{`${room.name} Area: ${room.area}`} </label>
                <button onClick={(e) => deleteRoom(room._id)}>Delete</button>
            </li>
          ))}
        </ul>
    );
    console.log(props)

    return(
        <div>
            <h1>{house.name}</h1>
            <button id='delete' onClick={housesApi.delete}>Delete House</button>
            {
                rooms({ rooms, houseId: house._id, deleteRoom})
            }
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    );
};