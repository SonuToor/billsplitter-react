import React from 'react';

import Table from 'react-bootstrap/Table'



export default class TotalsDisplay extends React.Component {
    test = (e) => {
        e.preventDefault()
        console.log(this.props.bill)
    }
    render() {
        return (
            <div>
                <Table striped bordered hover variant="dark">
                    <tbody>
                    {this.props.party.map((member) => 
                        <tr>
                            <td className="party-member">{member}</td>
                            <td className="party-member-total">$0.00</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
                <button onClick={this.test}></button>
            </div>
        )
    }
}