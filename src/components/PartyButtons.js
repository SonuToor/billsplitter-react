import React from 'react';

import {Button, ButtonGroup} from 'react-bootstrap'

export default class PartyButtons extends React.Component {

    // creates a button group, which has a button for each party member
    render() {
        return(
            <ButtonGroup onClick={this.props.handleClick}>
                {this.props.members[0].map((member, i) =>
                <Button variant="outline-light" key={i}>{member}</Button>
                )}
            </ButtonGroup>
        )
    }
}