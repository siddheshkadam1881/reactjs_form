import './App.css';
import { useState } from 'react';
 // import UserForm from './UserForm'

function AddPlayer() {


    let [ player,setPlayer ] = useState("");
    let [ favnumber,setfavnumber ] = useState("");
    let [ submitted,setSubmitted ] = useState(false);

    let [ error,setError ] = useState(false);

    

    

    const handleName = (e) => {
        console.log("e.target.value",e.target.value)
        setPlayer(e.target.value);
        setSubmitted(false);
        console.log("handleFavNumplayer",player)

    };

    const handleFavNum= (e) => {
        console.log("handleFavNum",e.target.value)
        setfavnumber(e.target.value)
        setSubmitted(false);
        console.log("handleFavNum",favnumber)

    }

    const submit=(e) =>{
        console.log("player",favnumber)
        e.preventDefault();
        console.log("submit",favnumber === "" || player === "" )
        if (favnumber === "" || player === "" ) {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    }


    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? "" : "none",
                }}
            >
                <h1>User {player} successfully registered!!</h1>
            </div>
        );
    };
 
    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? "" : "none",
                }}
            >
                              <h1>Please enter all the fields </h1>

            </div>
        );
    };

  return (
    <div className="AddPlayer">
        <h1>Player Registration </h1>

   {/* Calling to the methods */}
   <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
           <h3>Enter Player Name</h3>
           <input onChange={handleName} type="text" id="Name" name="Name" value={player}/>


           <h3>Enter Favourite Number</h3>
           <input onChange={handleFavNum} type="text" id="favnumber" name="favnumber" value={favnumber}/>
      

           <input type="submit" value="Submit" onClick={submit}/>



    </div>
  );
}

export default AddPlayer;