

const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

//Where all our logic to make network calls to the house endpoint will go.
//Goes in its own class and file so we can use it in any class that needs to call these api calls.
//More reusability and not tightly coupled like last project.
//Normal class, has nothing to do with react. Houses normal methods for fetch calls.
class HousesApi {
    //CRUD: Create(Post), XRead(Get), XUpdate(Put), Delete(Delete)
    get = async() => {
        try{
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            return data;
           
        } catch(e){
            console.log('Oops, looks like fetchHouses had an issue.', e) 
        }
    }
    // A house will get passed into here from the house array in HouseList.js . 
    // Each house component will have these attributes 
    put = async (house) => {
        try{
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json()
        } catch(e) {
            console.log('Oops, looks like fetchHouses had an issue.', e);
        }
    }

    ///Test Post
    post = async (house) => {
        try{
             const resp = await fetch(`${HOUSES_ENDPOINT}/`, {
                method: 'POST', 
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same
    
                headers: {
                    'Content-Type': 'application/json'
                },
                // body: JSON.stringify(house) [Incorect way]
                //[correct way] You're structuring the obj before sent to api in a string form.
                body: JSON.stringify({
                    name: house
                })
    
            });
            return await resp.json()
        } catch(e) {
            console.log('Oops, looks like fetchHouses had an issue.', e);
        }
    }
    // Test
    // To delete the movie with the specified id.
    delete = async (id) => {
        try{
            const resp = await fetch(`${HOUSES_ENDPOINT}/${id}`,{
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
                
            });
           // return resp
           const data= await resp.json()
           return data
        }
        catch(e){
            console.log('Delete  http request failed', e)
        }
        
    }
    

}

export const housesApi = new HousesApi();
