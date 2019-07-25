import React from 'react';

import { Button } from "react-bootstrap";

import "./ItemsList.css"

import PartyButtons from "./PartyButtons"


export default class ItemsList extends React.Component {

    handlePartyButtonClick = (event) => {
        // TO DO!
            // Look at the Clio notebook first and plan out the order of operations. 
            
            // Need to return a data structure to App.js
                // the data structure will be used to calculate totals and to generate the table to display totals

                // what structure for this purpose?

            // Should the buttons be rendered disabled after it's clicked?
                // Why or why not?
        let user = event.target.innerHTML

    }

    render() {
        let userButtons = <PartyButtons members={this.props.party} handleClick={this.handlePartyButtonClick}/>
        return (
            <div>
                <h2 style={{textAlign : "center"}}>Your Items!</h2>
                <ul className="items-list">
                {this.props.items.map((entry, i) => 
                    <li className="item-entry" key={i}>
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
