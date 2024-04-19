import { useState } from "react";
const Profile = ()=>{
    const [firstName, setFirstName]=useState("Irene")
    return (
        <>
            <h2>Firstname: {firstName}</h2>
            <button onClick={()=>setFirstName('Obianuju')}>change Firstname</button>
        </>
    )
}

export default Profile;