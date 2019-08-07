import React from 'react';

import { Button, Form } from "react-bootstrap";
import { CSSTransitionGroup } from 'react-transition-group';

import "./ItemForm.css"

export default class ItemForm extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault(); 

        let itemName = event.target.item.value;
        let totalCostPerItem = Number(event.target.price.value) * Number(event.target.quantity.value)
        
        let itemEntry = {
            item : itemName,
            price : event.target.price.value,
            quantity : event.target.quantity.value
        }
        
        event.target.item.value = ""
        event.target.quantity.value = ""
        event.target.price.value = ""

        this.props.itemList(itemEntry, itemName, totalCostPerItem)
    }

    render() {
        return (
            <CSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={true}
            transitionLeaveTimeout={300}>
                <Form className="items-input-form" onSubmit={this.handleSubmit}>
                    <input name="item" min="3" required placeholder="Enter the item name"/>
                    <input type="number" name="price" min="1" placeholder="Price" required step="0.01"/>
                    <input type="number" name="quantity" min="1" placeholder="Quantity" required/>
                    <Button variant="secondary" type="submit">Submit</Button>
                </Form>
            </CSSTransitionGroup>
        )
    }
}