import React from 'react';

import { Container } from "react-bootstrap";

import './index.css'

import ItemForm from "./components/ItemForm";
import ItemsList from "./components/ItemsList";
import PartyForm from "./components/PartyForm";

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      partySize : 0,
      partyList : [],
      partySetUp : false,
      isItemList : false,
      itemList : []
    }
  }

  updatePartySize = (size) => {
    this.setState({ partySize : size })
  }
  updatePartyList = (list) => {
    this.setState({ partyList : [list, ...this.state.partyList], partySetUp : true })
  }
  updateItemList = (item) => {
    this.setState({ itemList : [item, ...this.state.itemList], isItemList : true })
  }

  render() {
    
    return (
        <Container>
          <h1 className="main-title" style={{textAlign : "center"}}>Billsplitter!</h1>
          <PartyForm partySize={this.updatePartySize} partyList={this.updatePartyList}/>
          {this.state.partySetUp ? <ItemForm items={this.updateItemList}/> : null}
          {this.state.isItemList ? <ItemsList/> : null}
        </Container>
    )
  }
}