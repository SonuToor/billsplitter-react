import React from 'react';

import {Button, ButtonGroup} from 'react-bootstrap'

export default class PartyButtons extends React.Component {
    render() {
        return(
            <ButtonGroup onClick={this.props.handleClick}>
                {this.props.members[0].map((member, i) =>
                <Button variant="secondary" key={i}>{member}</Button>
                )}
            </ButtonGroup>
        )
    }
}