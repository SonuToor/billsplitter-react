import React from 'react';

import Table from 'react-bootstrap/Table'



export default class TotalsDisplay extends React.Component {
    componentDidMount = () => {
        let totals = {}
        for (var item in this.props.items) {
            let pricePerPerson = this.props.items[item] / this.props.bill[item].length  
            for (let i = 0; i < this.props.bill[item].length; i++) {
                if (this.props.bill[item][i] in totals) {
                    totals[this.props.bill[item][i]] = pricePerPerson + totals[this.props.bill[item][i]]
                }
                else {
                    totals[this.props.bill[item][i]] = pricePerPerson
                }
            }
        }
        this.props.update(totals)
    }

    render() {
        console.log(this.props.totals, "in TotalsDisplay render method")
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
                            <td className="party-member-total">${this.props.totals[member]}</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </div>
        )
    }
}