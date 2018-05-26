import React from 'react'
import FontAwesome from 'react-fontawesome'
const slider = (props) => {
  let images;
  if (props.images) {
    images = props.images.map((image, index) => {
      return (
        <div key={index} onClick={() => props.select(index)}>
          <img src={image} alt=""/>
        </div>
      )
    })
  }

  return (
    <div className="image">
      <div className="arrows">
        <div onClick={() => props.slide('left')}>
          <FontAwesome name="caret-left"/>
        </div>
        <div onClick={() => props.slide('right')}>
          <FontAwesome name="caret-right"/>
        </div>
      </div>
      <div  className="img-holder">
        <img className="full" src={props.view} alt="" />
      </div>
      <div className="img-list">
        {images}
      </div>
    </div>
  )
}

export default slider
