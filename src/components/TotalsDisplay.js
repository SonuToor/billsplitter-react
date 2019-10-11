import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Slider from '@material-ui/core/Slider';
import Table from 'react-bootstrap/Table'
import { Button } from "react-bootstrap";



export default class TotalsDisplay extends React.Component {
    // update the totals object in app.js 
    componentDidMount = () => {
        let totals = {}
        // get the cost per person for an item (total cost of item / number of peopled involved)
        // apply that cost to the totals for the members who are involved in that item 
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
        return (
            <div>
                <CSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                    <Table striped hover variant="dark" className="totals-table" style={{
                        marginBottom : "5%", marginTop : "5%", opacity: "0.9", backgroundColor: "rgb(39, 62, 75)", borderRadius: "25px"}}>
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
                                <td className="party-member-total">${ (isNaN(this.props.totals[member])) ? 0.00 : Number(this.props.totals[member]).toFixed(2) }</td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                    <div className="tip">
                        <label style={{fontSize : 22}}>Add a tip? (%)</label>
                        <Slider style={{width : "60%"}} defaultValue={0} valueLabelDisplay="on" onChangeCommitted={this.handleTips}/>
                    </div>
                    <Button variant="light" type="submit" style={{marginLeft : "35%", width : "30%", marginTop: "5%"}}onClick={this.props.reset}>Restart</Button>
                </CSSTransitionGroup>
            </div>
        )
    }
}