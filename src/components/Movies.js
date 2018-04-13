import React, { Component } from 'react';
import {connect} from 'react-redux';
import {rating_function} from './../actions/changeRating'

import '../styles/movies.css';

@connect(store => ({ movieStore: store.movieStore }))
class Movies extends Component {

   /*addButtonClick = () => {
    const id = Math.floor(Math.random() * 1000); // NEVER USER RANDOM FOR ID. USED ONLY FOR DEMO PURPOSE
    const newArray = [...this.props.reactTrainingStore.trainingList, {
      id: id, // NEVER USER RANDOM FOR ID. USED ONLY FOR DEMO PURPOSE
      value: `New Training Item ${id}`,
    }];
    this.props.dispatch(ReactTrainingActions.addNewTraining(newArray))
  };
*/
componentDidMount(){
  this.props.dispatch(rating_function.loadInitialData());
}
changeRating = (id,rating) => {
  //console.log(rating);
  const payload = {
    id,
    rating
  }
  this.props.dispatch(rating_function.changeRating(payload));
}
  getListItem = (item) => (
    <div className="block" key={`ITEM${item.id}`}>
    <ul className="unorderedList">
    <li className="name">{item.name}</li>
    <li><div className="image"><img src={item.image} height="200px" width="150"/></div></li>
    <li>
    <div className="rating">
    Star Rating:<span className="rateIt">{item.rating}</span>
    </div>
    <div className="rating_value">
    <button onClick={()=>{this.changeRating(item.id,1)}}><img height="15px" width="15px" src="https://thumbs.dreamstime.com/b/shiny-gold-star-isolated-transparent-background-vector-illustration-82359611.jpg"/></button>
    <button onClick={()=>{this.changeRating(item.id,2)}}><img height="15px" width="15px" src="https://thumbs.dreamstime.com/b/shiny-gold-star-isolated-transparent-background-vector-illustration-82359611.jpg"/></button>
    <button onClick={()=>{this.changeRating(item.id,3)}}><img height="15px" width="15px" src="https://thumbs.dreamstime.com/b/shiny-gold-star-isolated-transparent-background-vector-illustration-82359611.jpg"/></button>
    <button onClick={()=>{this.changeRating(item.id,4)}}><img height="15px" width="15px" src="https://thumbs.dreamstime.com/b/shiny-gold-star-isolated-transparent-background-vector-illustration-82359611.jpg"/></button>
    <button onClick={()=>{this.changeRating(item.id,5)}}><img height="15px" width="15px" src="https://thumbs.dreamstime.com/b/shiny-gold-star-isolated-transparent-background-vector-illustration-82359611.jpg"/></button>
    </div>
    </li>
    </ul>
    </div>
  );
getView = () => (
  <div className="movies-page">
       <div className="welcome">
       <h1>Movie Ratings</h1>
       </div>
       <ul className="movies-details">
         {this.props.movieStore.movies.map(this.getListItem)}
       </ul>

   </div>
)
 showLoading = () => (
<div className="loader">Loading....</div>
 )
  render() {
    if(this.props.movieStore.Loading){
        return this.showLoading();
      }
      return this.getView();
      /*
      <div className="complete">
        <h1 className="heading">Movie Ratings</h1>
      <div>
        {this.props.movieStore.movieList.map(this.getListItem)}
      </div>
      </div>*/
  }
}

export default Movies;
