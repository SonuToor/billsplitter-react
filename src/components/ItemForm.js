import React from 'react';
import { Button } from "react-bootstrap";

export default class ItemForm extends React.Component {

    render() {
        return (
            <form className="items-input-form">
                <input name="item" min="3" required placeholder="Enter the item name"/>
                <input type="number" name="price" min="1" placeholder="Price" required step="0.01"/>
                <input type="number" name="quantity" min="1" placeholder="Quantity" required/>
                <button>Submit</button>
            </form>
        )
    }
}