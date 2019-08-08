import React from 'react';

import { Button, Form } from "react-bootstrap";



import "./PartyForm.css";


export default class PartyForm extends React.Component {
  constructor() {
    super()
    this.state = { partySize : 0}
  }
  
  handlePartyFormSubmit = (event) => {
    event.preventDefault();
    let size = event.target[0].value;
    this.setState({ partySize : size })
  }

  // create text inputs for the party member names based on the party size
  createPartyMembersForm = () => {
    let output = []

    for (let i = 0; i < this.state.partySize - 2; i ++) {
      output.push(<input key={i} className="party-member" placeholder="Enter name" required/>)
    }
    output.push(<Button variant="light" type="submit" key={this.state.partySize + 1}>Submit</Button>)
    return output
  }

  // provide app.js with an array of party members and the initial totals for each member
  handlePartyListSubmit = (event) => {
    let party = []
    let emptyTotals = {}
    event.preventDefault();

    for (let i = 0; i < this.state.partySize; i++) {
      party.push(event.target[i].value)
    }

    for (let i = 0; i < party.length; i++) {
      emptyTotals[party[i]] = 0
    }
      
    this.props.partyList(party, emptyTotals)
  }

  render() {
    return (
        <div className="party-form">
          <Form className="party-size-form" onSubmit={this.handlePartyFormSubmit}>
            <Form.Group>
              <Form.Label>How many people are in your party?</Form.Label>
              <input className="size-input" type="number" min="2" required placeholder="2"/>
              <Button variant="light" type="submit" size="sm">Submit</Button>
            </Form.Group>
          </Form>
          <Form className="party-members-form" onSubmit={this.handlePartyListSubmit}>
            <Form.Group> 
              <input className="party-member" placeholder="Enter name" required/>
              <input className="party-member" placeholder="Enter name" required/>
              {this.createPartyMembersForm()}
            </Form.Group>
          </Form>
        </div>
    )
  }
}