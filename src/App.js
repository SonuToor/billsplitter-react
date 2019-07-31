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
      costPerItem : {},
      bill : {},
      splitBill : false
    }
  }

  updatePartySize = (size) => {
    this.setState({
       partySize : size 
      })
  }
  updatePartyList = (list) => {
    this.setState({
       partyList : [list, ...this.state.partyList], 
       partySetUp : true 
      })
  }
  updateItemInfo = (itemEntry, name, totalCost) => {
    this.setState({
       itemList : [itemEntry, ...this.state.itemList], 
       isItemList : true,
       costPerItem : {
         ...this.state.costPerItem,
         [name] : totalCost
       }
      })
  }
  updateBill = (item, peopleInvolved) => {
    this.setState({
            bill : {
              ...this.state.bill,
              [item] : peopleInvolved 
            }
          })
  }

  splitBill = () => {
    this.setState({
      splitBill : true
    })
  }
  

  render() {
    let items = this.state.itemList; 
    let party = this.state.partyList; 
    return (
        <Container>
          <h1 className="main-title" style={{textAlign : "center"}}>Billsplitter!</h1>
          <PartyForm partySize={this.updatePartySize} partyList={this.updatePartyList}/>
          {this.state.partySetUp ? <ItemForm itemList={this.updateItemInfo}/> : null}
          {this.state.isItemList ? <ItemsList items={items} party={party} bill={this.updateBill} split={this.splitBill}/> : null}
          {this.state.splitBill ? <TotalsDisplay bill={this.state.bill} party={this.state.partyList} items={this.state.costPerItem}/> : null}
        </Container>
    )
  }
}