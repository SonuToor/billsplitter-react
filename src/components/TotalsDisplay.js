import React from 'react';

import Table from 'react-bootstrap/Table'



export default class TotalsDisplay extends React.Component {
    componentDidMount = () => {
        for (var item in this.props.items) {
            let pricePerPerson = this.props.items[item] / this.props.bill[item].length  
            for (let i = 0; i < this.props.bill[item].length; i++) {
                this.props.update(this.props.bill[item][i], pricePerPerson)
            }
        }

        // console.log(this.props.totals)
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
                            {/* {//TO DO} */}
                            {/* getting the total per member to reflect in state would make it easy to rerender 
                            you would be putting inside party-member-total the this.props.total[member]*/}
                            <td className="party-member-total">${this.props.totals[member]}</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </div>
        )
    }
}