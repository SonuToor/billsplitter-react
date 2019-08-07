import React from 'react';

import { Button } from "react-bootstrap";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import "./ItemsList.css"

import PartyButtons from "./PartyButtons"


export default class ItemsList extends React.Component {
    constructor () {
        super()
        this.state = {
            error : false
        }
    }
    // this method returns an object that contains an item and the party members who are involved with said item
    handlePartyButtonClick = (event) => {
        let button = event.target
        let itemEntry = button.parentNode.parentNode.getAttribute("item");
        let memberButtons = Array.from(button.parentNode.children);

        // toggle botton to show user if the party memeber is selected
        if (button.classList.contains( "btn-outline-secondary")) {
            button.classList.replace("btn-outline-secondary", "btn-secondary")  
        }
        else {
            button.classList.replace("btn-secondary", "btn-outline-secondary")
        }

        let involved = []; 
        for (let i = 0; i < memberButtons.length; i++) {
            let classes = Array.from(memberButtons[i].classList)
            if (classes.includes("btn-secondary")) {
                involved.push(memberButtons[i].innerHTML)
            }
        }

        this.props.updateBill(itemEntry, involved)
    }

    handleBillSplit = (event) => {
        event.preventDefault(); 

        let empties = 0; 
        
        for (var item in this.props.bill) {
            if (this.props.bill[item].length < 1) {
                empties = empties + 1
            }
          }
        if (empties === 0) {
            this.setState({
                error : false
            })
            this.props.split()
        }
        else {
            this.setState({
                error : true
            })
        }
    }

    componentWillUnmount() {
        console.log("did this fire?")
      }

    render() {
        let userButtons = <PartyButtons members={this.props.party} handleClick={this.handlePartyButtonClick}/>
        return (
            <div>
                <h2 style={{textAlign : "center"}}>Your Items!</h2>
                <p style={{textAlign : "center"}}>Select the party members who are paying for each item.</p>
                <ul className="items-list">
                {this.props.items.map((entry) => 
                    <li className="item-entry" key={entry.item} item={entry.item}>
                        <span className="item item-name">{entry.item}</span>
                        <span className="item item-details">  Quantity: {entry.quantity} Price: ${entry.price}</span>
                        {userButtons}
                    </li>)}
                </ul>
                {this.state.error ? <p style={{textAlign : "center", color : "red"}}>Make sure there is at least one member selected per item</p> : null}
                <Button variant="secondary" className="billsplit-button" onClick={this.handleBillSplit}>Split my bill!</Button>
            </div>
        )
    }
}
