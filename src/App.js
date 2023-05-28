import React, {useState, useEffect} from "react"
import axios from "axios"
import Bounty from "./components/Bounty"


export default function App(){
  const [bounties, setBounties] = useState([])

  function getBounties(){
    axios.get("/bounties")
    .then(res => setBounties(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounties()
    }, [])
  return(
    <div className="bounty-container">
      {bounties.map(bounty => <Bounty {...bounty} key={bounty.firstname}/>)}
    </div>
  )
}