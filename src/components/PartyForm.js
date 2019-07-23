import React from 'react';


export default class PartyForm extends React.Component {
  constructor() {
    super()
    this.state = { partySize : 0}
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    let size = event.target[0].value;
    this.setState({ partySize : size })
    this.props.onSubmit(size)

  }
  createPartyMembersForm = () => {
    let inputs = []

    for (let i = 0; i < this.state.partySize; i ++) {
      inputs.push(<input key={i} className="party-member" placeholder="Enter party members name here"></input>)
    }
    return inputs
  }

  render() {
    return (
        <div className="party-form">
          <form className="party-size-form" onSubmit={this.handleSubmit}>
              <label>How many people are in your party?</label>
              <input type="number" min="2"></input>
              <button>Submit</button>
          </form>
          <form className="party-members-form">
            {this.createPartyMembersForm()}
          </form>
        </div>
    )
  }
}