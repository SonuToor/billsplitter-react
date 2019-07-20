import React from 'react';

import PartyForm from "./components/PartyForm"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="main-title">Billsplitter!</h1>
        <PartyForm />
      </div>
    )
  }
}