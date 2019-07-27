import React from 'react';

import { Container } from "react-bootstrap";

import './index.css'

import ItemForm from "./components/ItemForm";
import ItemsList from "./components/ItemsList";
import PartyForm from "./components/PartyForm";
import TotalsDisplay from "./components/TotalsDisplay";

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      partySize : 0,
      partyList : [],
      partySetUp : false,
      isItemList : false,
      itemList : [],
      bill : [],
      splitBill : false
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
  updateBill = (item) => {
    this.setState({ bill : [item, ...this.state.bill] })
  }
  

  render() {
    let items = this.state.itemList; 
    let party = this.state.partyList; 
    return (
        <Container>
          <h1 className="main-title" style={{textAlign : "center"}}>Billsplitter!</h1>
          <PartyForm partySize={this.updatePartySize} partyList={this.updatePartyList}/>
          {this.state.partySetUp ? <ItemForm itemList={this.updateItemList}/> : null}
          {this.state.isItemList ? <ItemsList items={items} party={party}/> : null}
          {this.state.splitBill ? <TotalsDisplay/> : null}
        </Container>
    )
  }
}