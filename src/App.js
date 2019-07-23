import React from 'react';

import PartyForm from "./components/PartyForm"

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      partySize : 0
    }
  }

  updatePartySize = (size) => {
    this.setState({ partySize : size })
  }

  render() {
    return (
      <div>
        <h1 className="main-title">Billsplitter!</h1>
        <PartyForm onSubmit={this.updatePartySize}/>
      </div>
    )
  }
}