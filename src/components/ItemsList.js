import React from 'react';
import { Button } from "react-bootstrap";
import { CSSTransitionGroup } from 'react-transition-group';
import PartyButtons from "./PartyButtons"


export default class ItemsList extends React.Component {
    constructor () {
        super()
        this.state = {
            error : false
        }
    }
    // this method updates the bill object in app.js, where each entry is the item and the value is an array of people who are involved with that item 
    handlePartyButtonClick = (event) => {
        let button = event.target
        let itemEntry = button.parentNode.parentNode.getAttribute("item");
        let memberButtons = Array.from(button.parentNode.children);

        // toggles the button that was clicked, between selected and unselected
        if (button.classList.contains( "btn-outline-light")) {
            button.classList.replace("btn-outline-light", "btn-light")  
        }
        else {
            button.classList.replace("btn-light", "btn-outline-light")
        }

        let involved = []; 
        // if the button is currently selected, add that member to the list of involved members for that item 
        for (let i = 0; i < memberButtons.length; i++) {
            let classes = Array.from(memberButtons[i].classList)
            if (classes.includes("btn-light")) {
                involved.push(memberButtons[i].innerHTML)
            }
        }

        this.props.updateBill(itemEntry, involved)
    }

    // once clicked this button hides the previous forms and displays the totals per member in a table 
    handleBillSplit = (event) => {
        event.preventDefault(); 

        // this logic makes certain that each item has atleast one member paying, it displays an error otherwise
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

    render() {
        let userButtons = <PartyButtons members={this.props.party} handleClick={this.handlePartyButtonClick}/>
        return (
            <div>
                <CSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                    <h2 style={{textAlign : "center"}}>Your Items!</h2>
                    <p style={{textAlign : "center"}}>Select the party members who are paying for each item.</p>
                </CSSTransitionGroup>
                <ul className="items-list">
                <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                    {this.props.items.map((entry) => 
                        <li className="item-entry" key={entry.item} item={entry.item}>
                            <span className="item item-name">{entry.item}</span>
                            <span className="item item-details">  Quantity: {entry.quantity} Price: ${entry.price}</span>
                            {userButtons}
                        </li>)}
                </CSSTransitionGroup>
                </ul>
                {this.state.error ? <p style={{textAlign : "center", color : "red"}}>Make sure there is at least one member selected per item</p> : null}
                <CSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                <Button variant="light" className="billsplit-button" onClick={this.handleBillSplit}>Split my bill!</Button>
                </CSSTransitionGroup>
            </div>
        )
    }
}
