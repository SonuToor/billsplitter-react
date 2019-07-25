import React from 'react';

import { Button } from "react-bootstrap";


export default class ItemsList extends React.Component { 

    render() {
        return (
            <div>
                <p>There will be a list here!</p>
                <ul className="items-list">
                </ul>
                <Button variant="secondary">Split my bill!</Button>
            </div>
        )
    }
}
