/**
 * @author evivehealth on 10/04/18.
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';

import { ReactTrainingActions } from './../actions/reactTrainingActions';

@connect(store => ({ reactTrainingStore: store.reactTrainingStore }))
class ReactTrainingHome extends Component {

  addButtonClick = () => {
    const id = Math.floor(Math.random() * 1000); // NEVER USER RANDOM FOR ID. USED ONLY FOR DEMO PURPOSE
    const newArray = [...this.props.reactTrainingStore.trainingList, {
      id: id, // NEVER USER RANDOM FOR ID. USED ONLY FOR DEMO PURPOSE
      value: `New Training Item ${id}`,
    }];
    this.props.dispatch(ReactTrainingActions.addNewTraining(newArray))
  };

  getListItem = (item) => (
    <div key={item.id}>{item.value}</div>
  );

  render() {
    return (
      <div>
        <h1>React Train</h1>
        <button onClick={this.addButtonClick}>Add Training</button>
        <div>
          {this.props.reactTrainingStore.trainingList.map(this.getListItem)}
        </div>
      </div>
    );
  }
}

export default ReactTrainingHome;
