import React from 'react';

export default function Alert(props) {

    const capitalise = (word) =>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase(0) + word.slice(1);
    }

  return (
    <div style ={{height: '50px'}}>
    {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg}
    </div>}
    </div>
  )
}
