import React, {useState}from "react";
import AddBountyForm from "./AddBountyForm";

export default function Bounty(props){
    const {firstname, lastname, living, bounty, type, _id} = props
    const [editToggle, setEditToggle] = useState(false)

    
return(
    <div className="bounty">
        { !editToggle ?
        <>
      <h2>Name: {firstname} {lastname}</h2>
      <p>Living: {living ? 'Yes' : 'No'}</p>
      <p>Bounty Number: {bounty}</p>
      <p>Type: {type}</p>
      <button 
        className="delete-btn"
        onClick={() => props.deleteBounty(_id)}>
        Delete
        </button>
        <button
        className="edit-btn"
        onClick={()=> setEditToggle(prevToggle => !prevToggle)}>
        Edit
        </button>
        </>
:
<>
        <AddBountyForm
        firstname ={firstname}
        lastname={lastname}
        living={living}
        bounty={bounty}
        type={type}
        _id={_id}
        setEditToggle ={setEditToggle}
        btnText="Submit Edit"
        />
        <button
        onClick={()=> setEditToggle(prevToggle => !prevToggle)}>Close</button>
        </>
}
    </div>
)
}