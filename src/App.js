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
      partyList : [],
      partySetUp : false,
      isItemList : false,
      itemList : [],
      costPerItem : {},
      bill : {},
      splitBill : false,
      totals : null
    }
  }
  updatePartyList = (list, initialTotals) => {
    this.setState({
       partyList : [list, ...this.state.partyList], 
       partySetUp : true,
       totals : initialTotals
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

  updateTotals = (updatedTotals) => {
    this.setState({
      totals : updatedTotals
    })
  }

  render() {
    return (
        <Container>
          <h1 className="main-title" style={{textAlign : "center"}}>Billsplitter!</h1>
          <PartyForm partySize={this.updatePartySize} partyList={this.updatePartyList}/>
          {this.state.partySetUp ? <ItemForm itemList={this.updateItemInfo}/> : null}
          {this.state.isItemList ? <ItemsList items={this.state.itemList} party={this.state.partyList} bill={this.updateBill} split={this.splitBill}/> : null}
          {this.state.splitBill ? <TotalsDisplay bill={this.state.bill} party={this.state.partyList} items={this.state.costPerItem} totals={this.state.totals} update={this.updateTotals}/> : null}
        </Container>
    )
  }
}