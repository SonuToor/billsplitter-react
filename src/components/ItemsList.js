import React from 'react';

import { Button } from "react-bootstrap";

import "./ItemsList.css"

import PartyButtons from "./PartyButtons"


export default class ItemsList extends React.Component {
    constructor () {
        super()
        this.state = { peopleInvolved : []}
    }
    // this method returns an object that contains an item and the party members who are involved with said item
    handlePartyButtonClick = (event) => {
        let button = event.target
        let itemEntry = button.parentNode.parentNode.getAttribute("item");
        let member = event.target.innerHTML

        // toggle botton to show user if the party memeber is selected
        if (button.classList.contains( "btn-outline-secondary")) {
            button.classList.replace("btn-outline-secondary", "btn-secondary")
        }
        else {
            button.classList.replace("btn-secondary", "btn-outline-secondary")
        }
        
        // TO DO
        // how should this be handled?
            // right now if the button is clicked and then unclicked, the member remains in peopleInvolved
                // when the button is unclicked the member needs to be removed
            // right now multiple button clicks puts the member in peopleInvolved multiple times
                // the member should only be put in peopleInvolved once
        if (button.classList.contains("btn-secondary")) {
            this.state.peopleInvolved.push(member)
        }

        console.log(itemEntry, this.state.peopleInvolved)
        // let billEntry = { item : itemEntry, involved : [list of people involved]}

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
