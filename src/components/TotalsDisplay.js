import React from 'react';

import Slider from '@material-ui/core/Slider';
import Table from 'react-bootstrap/Table'



export default class TotalsDisplay extends React.Component {
    componentDidMount = () => {
        let totals = {}
        for (var item in this.props.items) {
            let pricePerPerson = (this.props.items[item] / this.props.bill[item].length)
            for (let i = 0; i < this.props.bill[item].length; i++) {
                if (this.props.bill[item][i] in totals) {
                    totals[this.props.bill[item][i]] = (pricePerPerson + totals[this.props.bill[item][i]])
                }
                else {
                    totals[this.props.bill[item][i]] = pricePerPerson
                }
            }
        }
        this.props.update(totals)
    }

    handleTips = (e, value) => {
        this.props.tips(value)
    }

    render() {
        const marks = [
            {
                value: 0,
                label: '0%',
            },
            {
                value: 50,
                label: '50%'
            },
            {
                value: 100,
                label: '100%'
            }
        ]
        return (
            <div>
                <Table striped bordered hover variant="dark" style={{marginBottom : "5%", marginTop : "5%"}}>
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
                            <td className="party-member-total">${Number(this.props.totals[member]).toFixed(2)}</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
                <div style={{display : "flex", justifyContent : "space-evenly"}}>
                    <label style={{fontSize : 22}}>Add a tip?</label>
                    <Slider style={{width : "60%"}} defaultValue={0} valueLabelDisplay="on" marks={marks} onChangeCommitted={this.handleTips}/>
                </div>
            </div>
        )
    }
}