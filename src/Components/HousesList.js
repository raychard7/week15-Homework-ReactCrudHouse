import React from 'react';
import {House} from './House';
import {housesApi} from '../rest/HousesApi.js'
import { NewHouseForm } from './newHouseForm';

export  class HousesList extends React.Component {
     state = {
         houses: [ ]
     };

     //all house methods.
     componentDidMount() {
         this.fetchHouses();
     }

     fetchHouses = async () => {
    //houses = get http request method './HousesApi' line 11. Returns object?
         const houses = await housesApi.get();
         this.setState({houses})  //{houses}: value that returns from api.
     }
     //Why not use id? How is argument being decided?
     // Is it because How is a whole object? and Id is just a piece?
     updateHouse = async ( updatedHouse) =>{
         await housesApi.put(updatedHouse);
         this.fetchHouses();
     };

     //Later when called will take in newHouse as argument.
    
     newHouse = async (newHouse) => {
        await housesApi.post(newHouse);
        console.log(newHouse);
        this.fetchHouses();
     }

     //How to know what argument to choose for each method?
    //  deleteHouse = async (house) => {
    //     await housesApi.delete(house.id);
    //     this.fetchHouses()
    //  }
     
     render() {
         return(
            
             <div className= "house-list">
                <NewHouseForm  />
                {/* maps through houses state array [] of each house.
                    and creates a new instance of house component from that data.
                */}
                 {this.state.houses.map((house)=>(
                     <House
                     house={house} //all data from that house in array passed in as props.
                     key={house._id}  //always want to set a key which is the id here.
                     updateHouse={this.updateHouse} //passing in a method as props.
                    //  deleteHouse={this.deleteHouse}
                     />
                 ))}
             </div>
           )
        }
}