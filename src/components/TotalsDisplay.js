import React from 'react';

import Table from 'react-bootstrap/Table'



export default class TotalsDisplay extends React.Component {
    constructor () {
        super ()
        this.state = {
            membertotals : {}
        }
    }
    componentDidMount = () => {
        this.props.party[0].forEach(member => {
            this.setState({
                membertotals : { [member] : 0 }
            })
        });

        //TO DO

        // only apply pricePerPerson to the members who are a part of the array in bill[item]

        for (var item in this.props.items) {
            let pricePerPerson = this.props.items[item] / this.props.bill[item].length  
        }
    }

    render() {
        return (
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Party Member</th>
                            <th>Total Owed</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.party[0].map((member) => 
                        <tr className={member}>
                            <td className="party-member">{member}</td>
                            {/* getting the total per member to reflect in state would make it easy to rerender */}
                            <td className="party-member-total">$0.00</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </div>
        )
    }
}