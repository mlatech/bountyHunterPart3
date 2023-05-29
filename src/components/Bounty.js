import React, {useState}from "react";

export default function Bounty(props){
    const {firstname, lastname, living, bounty, type, _id} = props
    const [editToggle, setEditToggle] = useState(false)

return(
    <div className="bounty">
      <h2>{firstname} {lastname}</h2>
    </div>
)
}