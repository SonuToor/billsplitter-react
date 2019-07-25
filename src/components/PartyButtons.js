import React from 'react';

import {Button, ButtonGroup} from 'react-bootstrap'

export default class PartyButtons extends React.Component {
    
    render() {
        return(
            // the listener and selected button will be sent from here to the itemsList
            <ButtonGroup>
                {this.props.members[0].map((member, i) =>
                <Button variant="secondary" key={i}>{member}</Button>
                )}
            </ButtonGroup>
        )
    }
}