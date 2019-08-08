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
      begin : true,
      partyList : [],
      partySetUp : false,
      isItemList : false,
      itemList : [],
      costPerItem : {},
      bill : {},
      splitBill : false,
      totals : null,
      totalsCopy : null
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
       },
       bill : {
         ...this.state.bill,
         [name] : []
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
      splitBill : true,
      begin : false,
      partySetUp : false,
      isItemList : false,
      isItemList : false
    })
  }

  updateTotals = (updatedTotals) => {
    this.setState({
      totals : updatedTotals,
      totalsCopy : updatedTotals
    })

  }

  addTip = (tipPercentage) => {
    let tip = (tipPercentage / 100) + 1 
    for (let person in this.state.totals) {
      let newTotal = (this.state.totalsCopy[person] * tip)
      this.setState({
        totals : {
          ...this.state.totals,
          [person] : newTotal
        }
      })
    }
  }

  reset = () => {
    this.setState({
      begin : true,
      splitBill : false,
      partyList : [],
      itemList : [],
      costPerItem : {},
      bill : {},
      totals : null,
      totalsCopy : null
    })
  }

  render() {
    return (
        <Container>
          <h1 className="main-title" style={{textAlign : "center", marginTop : "4%"}}>Billsplitter!</h1>
          {this.state.begin ? <PartyForm partySize={this.updatePartySize} partyList={this.updatePartyList}/> : null}
          {this.state.partySetUp ? <ItemForm itemList={this.updateItemInfo}/> : null}
          {this.state.isItemList ? <ItemsList items={this.state.itemList} party={this.state.partyList} updateBill={this.updateBill} split={this.splitBill} bill={this.state.bill}/> : null}
          {this.state.splitBill ? <TotalsDisplay bill={this.state.bill} party={this.state.partyList} items={this.state.costPerItem} totals={this.state.totals} update={this.updateTotals} tips={this.addTip} reset={this.reset}/> : null}
        </Container>
    )
  }
}