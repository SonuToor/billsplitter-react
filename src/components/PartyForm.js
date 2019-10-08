import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import PartyMemberInput from "./PartyMemberInput";


const PartyForm = (props) => {

  const [partySize, updatePartySize] = useState(0);

  const handlePartyFormSubmit = (event) => {
    event.preventDefault();
    let size = event.target[0].value;
    updatePartySize(size)
  }

  // create text inputs for the party member names based on the party size
  const createPartyMembersForm = () => {
    let output = []

    for (let i = 0; i < partySize - 2; i ++) {
      output.push(<PartyMemberInput key={i}/>)
    }
    output.push(<Button variant="light" type="submit" key={partySize + 1}>Submit</Button>)

    return output
  }

  // provide app.js with an array of party members and the initial totals for each member
  const handlePartyListSubmit = (event) => {
    let party = []
    let emptyTotals = {}
    event.preventDefault();

    for (let i = 0; i < partySize; i++) {
      party.push(event.target[i].value)
    }

    for (let i = 0; i < party.length; i++) {
      emptyTotals[party[i]] = 0
    }
      
    props.partyList(party, emptyTotals)
  }

  return (
    <div className="party-form">
      <Form className="party-size-form" onSubmit={handlePartyFormSubmit}>
        <Form.Group>
          <Form.Label>How many people are in your party?</Form.Label>
          <input className="size-input" type="number" min="2" required placeholder="2"/>
          <Button variant="light" type="submit" size="sm">Submit</Button>
        </Form.Group>
      </Form>
      <Form className="party-members-form" onSubmit={handlePartyListSubmit}>
        <Form.Group> 
          <PartyMemberInput />
          <PartyMemberInput />
          {createPartyMembersForm()}
        </Form.Group>
      </Form>
    </div>
  )
}

export default PartyForm