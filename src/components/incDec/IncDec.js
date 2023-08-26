import React from 'react'

function IncDec(props) {
  return (
    <div>
        <h1>Increment Decrement</h1>
        <p>{props.count}</p>
        <button onClick={props.handleIncrement}>Inc</button>
        <button onClick={props.handleDecrement}>Dec</button>
    </div>
  )
}

export default IncDec

IncDec.defaultProps = {
    count : 0,
    handleIncrement : ()=>{},
    handleDecrement : ()=>{},

}