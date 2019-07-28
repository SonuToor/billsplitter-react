import React from 'react';

import { Button } from "react-bootstrap";

import "./ItemsList.css"

import PartyButtons from "./PartyButtons"

export default class ItemsList extends React.Component {
    // this method returns an object that contains an item and the party members who are involved with said item
    handlePartyButtonClick = (event) => {
        let button = event.target
        let itemEntry = button.parentNode.parentNode.getAttribute("item");
        let memberButtons = Array.from(button.parentNode.children);

        let involved = []; 
        // toggle botton to show user if the party memeber is selected
        if (button.classList.contains( "btn-outline-secondary")) {
            button.classList.replace("btn-outline-secondary", "btn-secondary")  
        }
        else {
            button.classList.replace("btn-secondary", "btn-outline-secondary")
            console.log("remove member from the item")
        }

        for (let i = 0; i < memberButtons.length; i++) {
            let classes = Array.from(memberButtons[i].classList)
            if (classes.includes("btn-secondary")) {
                involved.push(memberButtons[i].innerHTML)
            }
            
        }
        // if i pass this up to App.js, the bill will have multiple entries for the same item
        let billEntry = { item : itemEntry, involved : involved }
        console.log(billEntry)

    }

    render() {
        let userButtons = <PartyButtons members={this.props.party} handleClick={this.handlePartyButtonClick}/>
        return (
            <div>
                <h2 style={{textAlign : "center"}}>Your Items!</h2>
                <ul className="items-list">
                {this.props.items.map((entry) => 
                    <li className="item-entry" key={entry.item} item={entry.item}>
                        <span className="item item-name">{entry.item}</span>
                        <span className="item item-details">  Quantity: {entry.quantity} Price: ${entry.price}</span>
                        {userButtons}
                    </li>)}
                </ul>
                <Button variant="secondary" className="billsplit-button">Split my bill!</Button>
            </div>
        )
    }
}
