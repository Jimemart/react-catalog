import React from 'react';
import './Card.css'

const card = (props) => {
  const style = {
    backgroundColor: props.phone.color
  }

  return (
    <div className="card" onClick={props.click}>
      <div className="title">
        <div>
            <h1>{props.phone.name}</h1>
        </div>
      </div>
      <div className="crop">
        <div className="holder">
        <img className="phone" src={props.phone.frontImage} alt="" />
      </div>
      </div>
      <div className="shadow">
        <div className="color" style={style}></div>
        <div className="specifications">
          {props.phone.details.memory} / {props.phone.details.ram} RAM / {props.phone.details.size}"
        </div>
        <div className="brand">
          <img src={props.phone.logo} alt="" />
        </div>
      </div>
    </div>
  )
}

export default card
