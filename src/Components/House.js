import React from 'react' ;
import { NewRoomForm} from './NewRoomForm';


export const House =(props)=> {
    //deconstructs from props. House object and updatehouse Method.
    const {house, updateHouse, deleteHouse} = props; //deconstruct from props. not a hook.
    console.log(house)
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
    
    //How is houseId passed in to differentiate??
    const deleteThisHouse = (houseId) =>{
        console.log("inside deleteThisHouse" +houseId)
         house.filter((y)=> )

        deleteHouse(deleteThisHouse)
    }
    console.log(deleteHouse)

    return(
        <div>
            <h1>{house.name}</h1>
            {/* (house._id) */}
            <button onClick={deleteHouse}>Delete House</button>
            {
                rooms({ rooms, houseId: house._id, deleteRoom})
            }
            <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    );
};