import React from 'react';

import { Button } from "react-bootstrap";

import "./ItemsList.css"

import PartyButtons from "./PartyButtons"


export default class ItemsList extends React.Component {

    render() {
        let userButtons = <PartyButtons members={this.props.party} />
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
