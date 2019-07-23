import React from 'react';

import ItemForm from "./components/ItemForm"
import PartyForm from "./components/PartyForm"

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      partySize : 0,
      partyList : [],
      partySetUp : false
    }
  }

  updatePartySize = (size) => {
    this.setState({ partySize : size })
  }
  updatePartyList = (list) => {
    this.setState({ partyList : [list, ...this.state.partyList], partySetUp : true })
  }

  render() {
    
    return (
      <div>
        <h1 className="main-title">Billsplitter!</h1>
        <PartyForm partySize={this.updatePartySize} partyList={this.updatePartyList}/>
        {this.state.partySetUp ? <ItemForm /> : null}
      </div>
    )
  }
}