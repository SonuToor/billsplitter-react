import React from 'react';
import { Button } from "react-bootstrap";


export default class PartyForm extends React.Component {
  constructor() {
    super()
    this.state = { partySize : 0}
  }
  
  handlePartyFormSubmit = (event) => {
    event.preventDefault();
    let size = event.target[0].value;
    this.setState({ partySize : size })
    this.props.partySize(size)

  }
  createPartyMembersForm = () => {
    let output = []

    for (let i = 0; i < this.state.partySize - 2; i ++) {
      output.push(<input key={i} className="party-member" placeholder="Enter party members name here"></input>)
    }
    output.push(<button key={this.state.partySize + 1}>Submit</button>)
    return output
  }

  handlePartyListSubmit = (event) => {
    let party = []
    event.preventDefault();
    for (let i = 0; i < this.state.partySize; i++) {
      party.push(event.target[i].value)
    }
    console.log(party)
    this.props.partyList(party)
  }

  render() {
    return (
        <div className="party-form">
          <form className="party-size-form" onSubmit={this.handlePartyFormSubmit}>
              <label>How many people are in your party?</label>
              <input type="number" min="2" required placeholder="2"/>
              <button>Submit</button>
          </form>
          <form className="party-members-form" onSubmit={this.handlePartyListSubmit}>
            <input className="party-member" placeholder="Enter party members name here"/>
            <input className="party-member" placeholder="Enter party members name here"/>
            {this.createPartyMembersForm()}
          </form>
        </div>
    )
  }
}