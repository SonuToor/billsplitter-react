import React from 'react';

import ButtonGroup from 'react-bootstrap/ButtonGroup'


export default class PartyButtons extends React.Component {

    render() {
        console.log(this.props.members)
        return(
            <p>buttongroup</p>
            // <ButtonGroup aria-label="Basic example">
            //     <Button variant="secondary">Left</Button>
            //     <Button variant="secondary">Middle</Button>
            //     <Button variant="secondary">Right</Button>
            // </ButtonGroup>
        )
    }
}