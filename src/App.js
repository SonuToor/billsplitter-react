import React from 'react';
import ItemForm from "./components/ItemForm";
import ItemsList from "./components/ItemsList";
import Layout from "./components/Layout"
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

  // store the names of the different members of the partipants in the party
  // setting partySetUp to true, means that there is a party set up and the items form can be rendered
  updatePartyList = (list, initialTotals) => {
    this.setState({
       partyList : [list, ...this.state.partyList], 
       partySetUp : true,
       totals : initialTotals
      })
  }

  // store each item in a list, once itemList is set true, the user now has the option to split the bill or continue adding items
  // store the costPerItem for each item that is inputted
  // add the item to the bill, the bill is an object that has an item name with an array of the participants who partook in the item 
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
  // update the bill based on who is currently selected for the item 
  updateBill = (item, peopleInvolved) => {
    this.setState({
            bill : {
              ...this.state.bill,
              [item] : peopleInvolved 
            }
          })
  }

  // after the split bill button is clicked, now render the totals table, while removing the previous forms from the DOM
  splitBill = () => {
    this.setState({
      splitBill : true,
      begin : false,
      partySetUp : false,
      isItemList : false,
    })
  }

  // calculate the totals per each participant
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

  // if the user decides to restart, empty whatever is stored in state, and rerender the page to it's initial state
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
        <Layout>
          <h1 className="main-title" style={{textAlign : "center", marginTop : "4%"}}>Billsplitter!</h1>
          {this.state.begin ? <PartyForm partySize={this.updatePartySize} partyList={this.updatePartyList}/> : null}
          {this.state.partySetUp ? <ItemForm itemList={this.updateItemInfo}/> : null}
          {this.state.isItemList ? <ItemsList items={this.state.itemList} party={this.state.partyList} updateBill={this.updateBill} split={this.splitBill} bill={this.state.bill}/> : null}
          {this.state.splitBill ? <TotalsDisplay bill={this.state.bill} party={this.state.partyList} items={this.state.costPerItem} totals={this.state.totals} update={this.updateTotals} tips={this.addTip} reset={this.reset}/> : null}
        </Layout>
    )
  }
}