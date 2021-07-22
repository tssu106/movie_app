import React from 'react';
import PropTypes from 'prop-types';


function ILikeFood({name, link, rating}){
  ILikeFood.propTypes={
    name:PropTypes.string.isRequired,
    link:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired
  }
  return (
    <div>
      <h1>I like {name}</h1>
      <h2>Rating: {rating}/10</h2>
      <img src={link} alt={name} width="300"/>
    </div>
  )
}

const foodILike = [
  {id:1, name:"kimbap", link:"http://chasingjamesbeard.com/wp-content/uploads/2015/08/Kimbap.jpg", rating:6.0},
  {id:2, name:"fried chicken", link:"https://www.jessicagavin.com/wp-content/uploads/2014/01/buttermilk-fried-chicken-11-1200.jpg", rating:7.5},
  {id:3, name:"samgyupsal", link:"https://www.anythingrad.com/wp-content/uploads/2019/04/LRM_EXPORT_290616115283154_20190409_021649147.jpeg", rating:10}
];

const returnComponent = ()=>{
  return foodILike.map((obj, index)=>{
    return <ILikeFood key={obj.id} name={obj.name} link={obj.link} rating={obj.rating}></ILikeFood>
    // console.log(dataMap);
  });
}

function App() {
  return (
    <div className="App">
      {
        returnComponent()
      }
    </div>
  );
}

export default App;
